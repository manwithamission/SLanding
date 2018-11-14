window.onload = () => {
    console.log('Документ и все ресурсы загружены');
    var acc = document.getElementsByClassName('projects-content__title');
    var grids = [document.getElementById('grid-project'), document.getElementById('grid-group'), document.getElementById('grid-patent')];
    grids[0].style.display = "grid";

    Array.from(acc).forEach( (accardion, i) => {
        accardion.onclick = () => {
            grids.map( (g, j) => g.style.display = i !== j ? "none" : "grid");
            showSlides(1, grids[i]);
        }
    })

    var slideIndex = 1;
    var PrevProjectButtons = [document.getElementById('prev1'), document.getElementById('prev2'), document.getElementById('prev3')];
    var NextProjectButtons = [document.getElementById('next1'), document.getElementById('next2'), document.getElementById('next3')];

    showSlides(slideIndex, grids[0]);

    PrevProjectButtons.forEach( (prevbutton, i) => {
        prevbutton.onclick = () => plusSlides(-1, grids[i]);
    });

    NextProjectButtons.forEach( (nextbutton, i) => {
        nextbutton.onclick = () => plusSlides(1, grids[i]);
    });

    function plusSlides(n, parentslide) {
        showSlides((slideIndex += n), parentslide);
    }

    function showSlides(n, parentslide) {

        var i;
        var slides = parentslide.getElementsByClassName('block_content');
        if (n > slides.length) {
            slideIndex = 1
        } else if (n < 1) {
            slideIndex = slides.length
        }
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "grid";
    }
};