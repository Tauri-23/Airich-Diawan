$(document).ready(function () {
    //btns
    const webProjBtn = $('#web-proj-btn');
    const deskProjBtn = $('#desktop-proj-btn');
    const androidProjBtn = $('#android-proj-btn');

    //containers
    const webApplicationProjCont = $('#web-app-projects');
    const deskAppProjCont = $('#desktop-app-projects');
    const androidProjCont = $('#android-app-projects');

    //navbar Links
    const homeLink = $('#home-nav-link');
    const projectLink = $('#proj-nav-link');
    const aboutLink = $('#about-nav-link');



    //For "Projects" Script
    webProjBtn.on('click', () => {
        hideAllContainer();
        removeActiveBtns();
        webProjBtn.addClass('project-classification-active');
        webApplicationProjCont.removeClass('d-none');
    });

    deskProjBtn.on('click', () => {
        hideAllContainer();
        removeActiveBtns();
        deskProjBtn.addClass('project-classification-active');
        deskAppProjCont.removeClass('d-none');
    });

    androidProjBtn.on('click', () => {
        hideAllContainer();
        removeActiveBtns();
        androidProjBtn.addClass('project-classification-active');
        androidProjCont.removeClass('d-none');
    });


    function hideAllContainer() {
        webApplicationProjCont.addClass('d-none');
        deskAppProjCont.addClass('d-none');
        androidProjCont.addClass('d-none');
    }

    function removeActiveBtns() {
        webProjBtn.removeClass('project-classification-active');
        deskProjBtn.removeClass('project-classification-active');
        androidProjBtn.removeClass('project-classification-active');
    }
    //End For "Projects" Script



    //For Navbar
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop() + 1;
        var content1Top = $('#content1').offset().top;
        var content1Bottom = content1Top + $('#content1').outerHeight(true);
        var content2Top = $('#content2').offset().top;
        var content2Bottom = content2Top + $('#content2').outerHeight(true);
        var content3Top = $('#content3').offset().top;
        var content3Bottom = content3Top + $('#content3').outerHeight(true);
    
        // Check if the scroll top is inside #contents
        if (scrollTop >= content1Top && scrollTop <= content1Bottom) {
            removeActiveNavLinks();
            removeActiveNavIcons();
            homeLink.addClass('nav1-links-active');
            homeLink.find('.nav-icon').attr('class', 'bi bi-house-fill nav-icon');
        }
        else if (scrollTop >= content2Top && scrollTop <= content2Bottom) {
            removeActiveNavLinks();
            removeActiveNavIcons();
            projectLink.addClass('nav1-links-active');
            projectLink.find('.nav-icon').attr('class', 'bi bi-archive-fill nav-icon');
        }
        else if (scrollTop >= content3Top && scrollTop <= content3Bottom) {
            removeActiveNavLinks();
            removeActiveNavIcons();
            aboutLink.addClass('nav1-links-active');
            aboutLink.find('.nav-icon').attr('class', 'bi bi-info-square-fill nav-icon');
        }
    });
    
    

    function removeActiveNavLinks() {
        homeLink.removeClass('nav1-links-active');
        projectLink.removeClass('nav1-links-active');
        aboutLink.removeClass('nav1-links-active');
    }

    function removeActiveNavIcons() {
        homeLink.find('.nav-icon').attr('class', 'bi bi-house nav-icon');
        projectLink.find('.nav-icon').attr('class', 'bi bi-archive nav-icon');
        aboutLink.find('.nav-icon').attr('class', 'bi bi-info-square nav-icon');
    }
    //End For Navbar




});