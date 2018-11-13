window.onload = () => {
    console.log('Документ и все ресурсы загружены');
    var acc = document.getElementsByClassName('projects-content__title');
    var grids = [document.getElementById('grid-project'), document.getElementById('grid-group'), document.getElementById('grid-patent')];
    grids[0].style.display = "grid";

    Array.from(acc).forEach( (accardion, i) => {
        accardion.onclick = () => {
            grids.map( (g, j) => g.style.display = i !== j ? "none" : "grid");
        }
    })

    var slideIndex = 1;
    var PrevProjectButtons = [document.getElementById('prev1'), document.getElementById('prev2'), document.getElementById('prev3')];
    var NextProjectButtons = [document.getElementById('next1'), document.getElementById('next2'), document.getElementById('next3')];
    var PrevGroupButtons = [document.getElementById('prev4'), document.getElementById('prev5'), document.getElementById('prev6'), document.getElementById('prev7')];
    var NextGroupButtons = [document.getElementById('next4'), document.getElementById('next5'), document.getElementById('next6'), document.getElementById('next7')];
    var PrevPatentButtons = [document.getElementById('prev8'), document.getElementById('prev9'), document.getElementById('prev10')];
    var NextPatentButtons = [document.getElementById('next8'), document.getElementById('next9'), document.getElementById('next10')];

    showSlides(slideIndex, document.getElementById('grid-project'));

    PrevProjectButtons.forEach( (prevbutton) => {
        prevbutton.onclick = ( () => {
            plusSlides(-1, document.getElementById('grid-project'));
        });
    });

    for (var i = 0; i < NextProjectButtons.length; i++) {
        NextProjectButtons[i].onclick = (() => {
            return () => {
                plusSlides(1, document.getElementById('grid-project'));
            }
        })(i);
    }

    for (var i = 0; i < PrevGroupButtons.length; i++) {
        showSlides(slideIndex, document.getElementById('grid-group'));
        PrevGroupButtons[i].onclick = () => {
            plusSlides(-1, document.getElementById('grid-group'));
        };
    }

    for (var i = 0; i < NextGroupButtons.length; i++) {
        showSlides(slideIndex, document.getElementById('grid-project'));
        NextGroupButtons[i].onclick = (() => {
            return () => {
                plusSlides(1, document.getElementById('grid-group'));
            }
        })(i);
    }

    for (var i = 0; i < PrevPatentButtons.length; i++) {
        showSlides(slideIndex, document.getElementById('grid-patent'));
        PrevPatentButtons[i].onclick = (() => {
            return () => {
                plusSlides(-1, document.getElementById('grid-patent'));
            }
        })(i);
    }

    for (var i = 0; i < NextPatentButtons.length; i++) {
        showSlides(slideIndex, document.getElementById('grid-patent'));
        NextPatentButtons[i].onclick = (() => {
            return () => {
                plusSlides(1, document.getElementById('grid-patent'));
            }
        })(i);
    }

    function plusSlides(n, parentslide) {
        showSlides((slideIndex += n), parentslide);
    }

    function showSlides(n, parentslide) {

        var i;
        // console.log(parentslide);
        var slides = parentslide.getElementsByClassName('block_content');
        // console.log(n, slides.length)
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "grid";
    }
};