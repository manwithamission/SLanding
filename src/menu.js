window.onscroll = () => {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var logo = document.getElementById('logo');
    var nav = document.getElementById('menu-nav-list');
    var header_content = document.getElementById('header-content');
    var header = document.getElementById('header');
    var wrapper = document.getElementById('wrapper');
    var menu_img = document.getElementById('menu-img');
    var navlist = document.getElementById('nav-list');
    var nav_list_link = document.getElementsByClassName('nav-list__link');
    var nav_list_name = document.getElementsByClassName('nav-list__name');
    var voir_list__link = document.getElementById('voir-nav-list__link');
    var nav_list__item = document.getElementById('nav-list__item');

    Array.from(nav_list_link).forEach( (link) => {
        if (scrolled > 1) {
            link.style.gridTemplateRows = "1fr";
            link.style.gridTemplateColumns = "35px 1fr";
        } else {
            link.style.gridTemplateRows = "28px 19px";
            link.style.gridTemplateColumns = "1fr";
        }
    });

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
        voir_list__link.style.gridTemplateColumns = "50px 1fr";
        voir_list__link.style.gridTemplateRows = "1fr";
    } else {
        logo.style.height = "119px";
        logo.style.width = "300px";
        header.style.height = "119px";
        wrapper.style.paddingTop = "119px";
        header_content.style.gridTemplateColumns = "300px 1fr";
        menu_img.style.width = "100px";
        menu_img.style.height = "50px";
        menu_img.style.paddingTop = "calc((121px - 50px) / 2)";
        menu_img.style.paddingBottom = "calc((121px - 50px) / 2)";
        voir_list__link.style.gridTemplateColumns = "1fr";
        voir_list__link.style.gridTemplateRows = "28px 19px";
    }
}

setTimeout( () => {
    var logo = document.getElementById('logo');
    var nav = document.getElementById('menu-nav-list');
    var header_content = document.getElementById('header-content');
    var header = document.getElementById('header');
    var wrapper = document.getElementById('wrapper');
    var menu_img = document.getElementById('menu-img');
    var navlist = document.getElementById('nav-list');
    var x = window.matchMedia("(max-width: 430px)")
    
    if (x.matches) {
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
    }

    menuicon = document.getElementById('menu-img');
    nav = document.getElementById('menu-nav-list');
    menuicon.onclick = () => {
        nav.style.display === "none" ? nav.style.display = "inline" : nav.style.display = "none";
        nav.style.height = "100vh";
    }
}, 1000);