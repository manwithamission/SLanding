window.onscroll = () => {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var logo = document.getElementById('logo');
    var nav = document.getElementById('nav-list');
    var header_content = document.getElementById('header-content');
    var header = document.getElementById('header');
    var wrapper = document.getElementById('wrapper');

    if (scrolled > 1) {
        logo.style.height = "50px";
        logo.style.width = "150px";
        nav.style.paddingBottom = "15.5px";
        nav.style.paddingTop = "15.5px";
        header.style.height = "50px";
        wrapper.style.paddingTop = "50px";
        header_content.style.gridTemplateColumns = "150px 1fr";
    } else {
        logo.style.height = "119px";
        logo.style.width = "300px";
        nav.style.paddingBottom = "50px";
        nav.style.paddingTop = "50px";
        // nav.style.paddingLeft = "50px";
        header.style.height = "119px";
        wrapper.style.paddingTop = "119px";
        header_content.style.gridTemplateColumns = "300px 1fr";
    }
    console.log(scrolled + 'px');
}