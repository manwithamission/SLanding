window.onscroll = () => {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var logo = document.getElementById('logo');
    var nav = document.getElementById('menu-nav-list');
    var header_content = document.getElementById('header-content');
    var header = document.getElementById('header');
    var wrapper = document.getElementById('wrapper');
    var menu_img = document.getElementById('menu-img');
    var navlist = document.getElementById('nav-list');

    if (scrolled > 1) {
        logo.style.height = "50px";
        logo.style.width = "150px";
        nav.style.paddingBottom = "15.5px";
        nav.style.paddingTop = "15.5px";
        header.style.height = "50px";
        wrapper.style.paddingTop = "50px";
        header_content.style.gridTemplateColumns = "150px 1fr";
        menu_img.style.width = "100px";
        menu_img.style.height = "50px";
        menu_img.style.padding = "0";
        navlist.style.paddingTop = "5px";
    } else {
        logo.style.height = "119px";
        logo.style.width = "300px";
        nav.style.paddingBottom = "0px";
        nav.style.paddingTop = "0px";
        header.style.height = "119px";
        wrapper.style.paddingTop = "119px";
        header_content.style.gridTemplateColumns = "300px 1fr";
        menu_img.style.width = "150px";
        menu_img.style.height = "100px";
        menu_img.style.paddingTop = "8.5px";
        menu_img.style.paddingBottom = "8.5px";
        navlist.style.paddingTop = "40px";
    }
}

setTimeout( () => {
    menuicon = document.getElementById('menu-img');
    nav = document.getElementById('menu-nav-list');
    menuicon.onclick = () => {
        nav.style.display === "none" ? nav.style.display = "inline" : nav.style.display = "none";
        nav.style.height = "100vh";
    }
}, 1000);