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

    const projects = [
        {
            id: 1,
            name: "PemboPay",
            desc: "A Payroll System Web Application.",
            image: "PemboPay Dashboard.png",
            categories: ["School Project", "UX/UI", "Payroll"]
        },
        {
            id: 2,
            name: "Furiagana Web",
            desc: "An E-book Web Application.",
            image: "FuriganaWebDashboard.png",
            categories: ["School Project", "E-Book"]
        },
        {
            id: 3,
            name: "Angels Burger",
            desc: "Burger Website.",
            image: "AngelsBurger1stYear.png",
            categories: ["School Project", "Static Website"]
        },
        {
            id: 4,
            name: "Happy Tails",
            desc: "Pet Grooming Web Application.",
            image: "HappyTails.png",
            categories: ["School Project", "Pet Grooming"]
        },
        {
            id: 5,
            name: "BDDRHomes",
            desc: "Project Selling Web Application for BDDRealty & Contruction Works.",
            image: "bddrhomes.png",
            categories: ["Thesis", "Real Estate", "Hybrid Filtering"]
        },
        {
            id: 6,
            name: "Ortegas Drugstore",
            desc: "Point of Sales system for Ortegas Drugstore.",
            image: "ortegasmeds.png",
            categories: ["Commision", "POS"]
        },
        {
            id: 7,
            name: "Barangay Sinbanali",
            desc: "A Web Application for Barangay Sinbanali",
            image: "bddrhomes.png",
            categories: ["Commission", "Document Request", "Emergency Call", "Scheduling System"]
        },
    ];



    /**
     * For "Projects" Script
     */
    webProjBtn.on('click', () => {
        hideAllContainer();
        removeActiveBtns();
        webProjBtn.addClass('active');
        webApplicationProjCont.removeClass('d-none');
    });

    deskProjBtn.on('click', () => {
        hideAllContainer();
        removeActiveBtns();
        deskProjBtn.addClass('active');
        deskAppProjCont.removeClass('d-none');
    });

    androidProjBtn.on('click', () => {
        hideAllContainer();
        removeActiveBtns();
        androidProjBtn.addClass('active');
        androidProjCont.removeClass('d-none');
    });


    function hideAllContainer() {
        webApplicationProjCont.addClass('d-none');
        deskAppProjCont.addClass('d-none');
        androidProjCont.addClass('d-none');
    }

    function removeActiveBtns() {
        webProjBtn.removeClass('active');
        deskProjBtn.removeClass('active');
        androidProjBtn.removeClass('active');
    }

    projects.forEach((proj, index) => {
        const categories = proj.categories
            .map((cat) => `<div class="proj-tag">${cat}</div>`)
            .join(""); // Combine the array of strings into a single string.
    
        webApplicationProjCont.append(`
            <div class="project">
                <div class="proj-pic">
                    <img src="root/media/${proj.image}" class="position-absolute h-100" alt="${proj.name}">
                </div>
    
                <div class="padding-x-2 d-flex flex-direction-y gap3">
                    <div class="proj-tags-cont">
                        ${categories} <!-- Insert the processed categories string here -->
                    </div>
    
                    <div>
                        <p class="txt-l3 fw-bold">
                            ${proj.name}
                        </p>
                        <p class="txt-m2">
                            ${proj.desc}
                        </p>
                    </div>
                    
                </div>
            </div>
        `);
    });    
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





    //For nav-burger-icon 
    $('.nav-burger-icon').click(function(){
		$(this).toggleClass('open');
        $('.nav1-links-mobile').toggleClass('active');

        
	});

    $('.nav1-links-a').on('click', function() {
        $('.nav1-links-mobile').toggleClass('active');
        $('.nav-burger-icon').toggleClass('open');
    });




});