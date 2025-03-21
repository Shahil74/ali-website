        function setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        function getCookie(cname) {
            let name = cname + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }


        gsap.registerPlugin(ScrollTrigger);

        window.isMobile = window.innerWidth <= 1023;
        window.isHome = $('body').hasClass('home');
        window.isArabic = $('body').hasClass('ar');

        /* START: Logo Shrink */
        /* if(window.innerWidth > 767)
        {
            let logoShrinkTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '.logo-link',
                    start: "400px top",
                    scrub: 1,
                    onEnter: function() {
                        $('.logo_container').addClass('blur')
                    },
                    onEnterBack: function() {
                        $('.logo_container').removeClass('blur')
                    }
                },
            });
            logoShrinkTimeline.to('.logo-link', {scale: 0.75});
        } */
        /* END: Logo Shrink */

        /* ---------------------------- */

        /* START: Headroom for Mobile */

        /* if(window.innerWidth <= 767)
        {
            var headroomEl = document.querySelector('.logo_component');
            var headroom = new Headroom(headroomEl, {
            	offset: 100,
                tolerance: {
                    down: 0,
                    up: 40
                }
            });
            headroom.init();
        } */

        /* END: Headroom for Mobile */

        /* ---------------------------- */

        /* START: Verticals */

        // srcset is making the image blurry, so removing srcset using js
        $('.vertical_image').removeAttr('srcset');
        $('.vertical_image').removeAttr('sizes');

        if ($('.verticals_accordion.w--current').length) {
            $('.verticals_accordion.w--current').addClass('hide');
            $('.verticals_accordion:not(.hide)').first().addClass('active')
            $('.verticals_component').addClass('two-slides');
        }
        var verticalsPaused = false;
        var currentVerticalsIndex = $('.verticals_accordion:not(.hide)').first().index();
        var numVerticalsSlides = $('.verticals_accordion:not(.hide)').length;

        var openVertical = function(index) {

            if (typeof index == 'undefined') {
                if ($('.verticals_accordion.active ~ .verticals_accordion:not(.hide)').length) {
                    index = $('.verticals_accordion.active ~ .verticals_accordion:not(.hide)').index();
                } else {
                    index = $('.verticals_accordion:not(.hide)').first().index();
                }
            }

            currentVerticalsIndex = index;
            $('.verticals_accordion:eq(' + index + ')').addClass('active').siblings().removeClass('active');
        };

        $('.verticals_accordion').on('mouseover', function(e) {
            verticalsPaused = true;
            openVertical($(e.currentTarget).index());
        });
        $('.verticals_component').on('mouseout', function(e) {
            verticalsPaused = false;
        });

        $(window).one('scroll', function() {
            setInterval(function() {
                if (!verticalsPaused) {
                    openVertical();
                }
            }, 5000);
        });

        /* END: Verticals */

        /* ---------------------------- */

        /* START: Primary Links Hover */
        if (!isMobile) {
            var linksWrapperWidth = $('.nav_links-wrapper').outerWidth();
            var menuWidth = $('.nav_menu').outerWidth();
            $('.nav_primary_link_hover').width(menuWidth);

            $('.nav_primary_link').on('mouseover', function(e) {
                var index = $(e.currentTarget).index();
                $('.nav_primary_link_hover img:eq(' + (index - 1) + ')').addClass('show').siblings().removeClass('show');
                var aHeight = $(e.currentTarget).outerHeight(true);
                var aPosition = $(e.currentTarget).position().top;
                $('.nav_primary_link_hover').css('top', aPosition + (aHeight / 2));
                $('.nav_primary_link_hover').height((aHeight + 20) < 80 ? 80 : (aHeight + 20));
            });

            $('.nav_links-wrapper').on('mouseleave', function(e) {
                $('.nav_primary_link_hover').height(0);
            });
        }
        /* END: Primary Links Hover */

        /* ---------------------------- */

        /* START: Newsletter Form */
        var oldPlaceHolder = ''
        var focusedPlaceHolder = 'Email Address...';
        if (isArabic) {
            focusedPlaceHolder = 'البريد الإلكتروني...';
        }
        $('.cta_newsletter_form_input').on('focus', function() {
            if ($(this).val() == '') {
                oldPlaceHolder = $('.cta_newsletter_form_input').attr('placeholder');
                $('.cta_newsletter_form_input').attr('placeholder', focusedPlaceHolder);
            }
        });
        $('.cta_newsletter_form_input').on('blur', function() {
            if ($(this).val() == '') {
                $('.cta_newsletter_form_input').attr('placeholder', oldPlaceHolder);
            }
        });
        /* END: Newsletter Form */

        /* ---------------------------- */

        /* START: Form custom submiting state */
        Webflow.push(function() {
            $('form').submit(function() {
                $(this).addClass('sending');
            });
        });
        /* END: Form custom submiting state */

        /* ---------------------------- */

        /* START: Change logo color on white & dark bgs */
        /* var logoColorSTs = [];
        var logoColorTimeout = null;
        const logoColorOnEnter = function () {
            clearTimeout(logoColorTimeout);
            $('.logo-link').addClass('dark');
        };
        const logoColorOnLeave = function () {
            logoColorTimeout = setTimeout(function () {
                $('.logo-link').removeClass('dark');
            }, 100);
        };
        $('.section-white').each(function (i, el) {
            logoColorSTs[i] = ScrollTrigger.create({
                trigger: el,
                start: 'top 15%',
                end: 'bottom 15%',
                onEnter: function () {
                    logoColorOnEnter();
                    if (window.isHome) {
                        logoColorSTs.forEach(function (st) {
                            st.refresh();
                        });
                    }
                },
                onEnterBack: function () {
                    logoColorOnEnter();
                },
                onLeave: function () {
                    logoColorOnLeave();
                },
                onLeaveBack: function () {
                    logoColorOnLeave();
                },
            });
        }); */
        /* END: Change logo color on white & dark bgs */

        /* ---------------------------- */


        /* START: Change menu button colors on white & dark sections */
        navButtonColorsTimeout = null;
        const navButtonColorsOnEnter = function() {
            clearTimeout(navButtonColorsTimeout);
            $('.nav_wrapper').addClass('invert-colors');
        };
        const navButtonColorsOnLeave = function() {
            navButtonColorsTimeout = setTimeout(function() {
                $('.nav_wrapper').removeClass('invert-colors');
            }, 100);
        };
        var navButtonColorSTs = [];
        $('.section-white').each(function(i, el) {
            var triggerEnd = 'bottom';
            if ($(el).hasClass('last-section')) {
                triggerEnd = '1000px';
            }
            navButtonColorSTs[i] = ScrollTrigger.create({
                trigger: el,
                start: 'top ' + $('.nav_menu-button').offset().top + 'px',
                end: triggerEnd + ' ' + $('.nav_menu-button').offset().top + 'px',
                onEnter: function() {
                    if (window.isHome) {
                        navButtonColorSTs.forEach(function(st) {
                            st.refresh();
                        });
                    }
                    navButtonColorsOnEnter();
                },
                onEnterBack: function() {
                    navButtonColorsOnEnter();
                },
                onLeave: function() {
                    navButtonColorsOnLeave();
                },
                onLeaveBack: function() {
                    navButtonColorsOnLeave();
                },
            });
        });
        /* END: Change menu button colors on white & dark sections */

        /* ---------------------------- */

        /* START: Refresh nav button color & logo color on white & dark bg */
        refreshNavLogoColorInterval = null;
        refreshNavLogoColorCounter = 0;
        const refreshNavLogoScrollTriggers = function() {
            /* logoColorSTs.forEach(function (st) {
              st.refresh();
            }); */
            navButtonColorSTs.forEach(function(st) {
                st.refresh();
            });
        }
        $(window).one('scroll', function() {
            refreshNavLogoScrollTriggers();
            refreshNavLogoColorInterval = setInterval(function() {
                refreshNavLogoColorCounter++;
                if (refreshNavLogoColorCounter == 2) {
                    clearInterval(refreshNavLogoColorInterval);
                }
                refreshNavLogoScrollTriggers()

            }, 2000);
        });
        /* END: Refresh nav button color & logo color on white & dark bg */


        /* ---------------------------- */

        /* START: Nav Menu */

        $('.nav_menu-label').attr('title', $('.nav_menu-label').text())

        $('.enquiry-dropdown_close').on('click', function() {
            $('.enquiry-dropdown_component').triggerHandler("w-close.w-dropdown");
        });


        if (window.innerWidth <= 767) {
            var positionDir = 'right';
            var positionVal = -1 * (window.innerWidth - $('.enquiry-language_wrapper').width() - $('.enquiry-language_wrapper').offset().left - 20);
            if ($('body').hasClass('ar')) {
                positionDir = 'left';
                positionVal = -1 * ($('.enquiry-language_wrapper').offset().left - 20);
            }
            $('.enquiry-language_wrapper').css(
                positionDir,
                positionVal
            );
            $('.enquiry-dropdown_dropdown-list').outerWidth(window.innerWidth - 32);
            //$('.nav_menu-overlay-mobile').width($('.nav_menu-button').outerWidth() + 2);
        }

        /* END: Nav Menu */


        /* ---------------------------- */

        /* START: Change slider nav appearance */

        var Webflow = Webflow || [];
        Webflow.push(function() {

            $('.w-slider-dot').height(5);
            if (window.innerWidth <= 767) {
                //.slider_hero-vertical-nav 
                $('.w-slider-dot').width(20);
                $('.w-slider-dot').css('border-radius', 20);
            } else {
                $('.w-slider-dot').width(30);
                $('.w-slider-dot').css('border-radius', 20);
            }
        });

        /* END: Change slider nav appearance */


        /* ---------------------------- */


        /* START: Newsletter force vertical selection */

        function checkNlCheckboxes() {
            var checkedCounter = 0;
            $('.cta_newsletter_checkboxes input[type=checkbox]').each(function(i, checkbox) {
                if ($(checkbox).is(':checked')) {
                    checkedCounter++;
                }
            });

            $('.cta_newsletter_form_button').attr('disabled', checkedCounter == 0);
        }

        $(window).one('scroll', function(e) {
            checkNlCheckboxes();
        });
        $('.cta_newsletter_checkboxes input[type=checkbox]').on('change', function() {
            checkNlCheckboxes();
        });

        /* END: Newsletter force vertical selection */


        /* ---------------------------- */


        /* START: Copyrights Year */

        $('.copyrights-year').text(new Date().getFullYear())

        /* END: Copyrights Year */

        /* ---------------------------- */

        /* START: Enquiry & Lang Switch */


        var link = '';
        var homeLinks = ['/', '#'];
        if (homeLinks.includes(window.location.pathname)) {
            link = '#';
            if ($('body').hasClass('ar')) {
                link = '/';
            }
        } else {
            var searchValues = ['/en-', '/en/'];
            var replaceValues = ['/ar-', '/ar/'];

            if ($('body').hasClass('ar')) {
                searchValues = ['/ar-', '/ar/'];
                replaceValues = ['/en-', '/en/'];
            }

            link = window.location.pathname;
            searchValues.forEach(function(sv, i) {
                link = link.replace(sv, replaceValues[i]);
            });
        }

        $('.footer4_link.lang-link').attr('href', link + window.location.hash);
        $('.enquiry-dropdown_dropdown-toggle-label.lang').attr('href', link + window.location.hash);

        /*$('.enquiry-dropdown_dropdown-toggle-label.lang').on('click', function (e) {
            window.location = $(this).attr('href');
        });*/


        ScrollTrigger.create({
            trigger: '.page-wrapper',
            start: 'top+=120px top',
            onEnter: function() {
                $('.enquiry-language_wrapper').removeClass('show-lang-switch');
                $('.enquiry-dropdown_dropdown-toggle').outerWidth(122);
            },
            onLeaveBack: function() {
                $('.enquiry-language_wrapper').addClass('show-lang-switch');
                $('.enquiry-dropdown_dropdown-toggle').outerWidth(78);
            },
        });

        /* END: Enquiry & Lang Switch */

    // <!-- Google Tag Manager (noscript) -->
//     <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCX8PBP"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
//     <!-- End Google Tag Manager (noscript) 
        // if (window.Mobile) {
        //     ScrollTrigger.config({
        //         // default is "resize,visibilitychange,DOMContentLoaded,load" so we can remove "resize" from the list:
        //         autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
        //     });
        // }

        /* START: CEO Message BG Transition */
        var CEOMessageBG_tl;
        $('.ceo-keyfacts-wrapper').each(function(index) {
            let triggerElement = $(this);
            let targetElement = $(this);

            CEOMessageBG_tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: 1,
                },
            });
            CEOMessageBG_tl.from(targetElement, {
                backgroundColor: 'rgba(0,0,0,0.1)'
            });
            CEOMessageBG_tl.from(
                '.facts-sections-bg-wrapper', {
                    backgroundColor: 'rgba(0,0,0,0.1)'
                },
                '<'
            );
        });
        /* END: CEO Message BG Transition */

        /* ---------------------------- */

        /* START: CEO Image Pinning */
        let CEOImagePinning_tl;
        $('.ceo_message_image-wrapper').each(function(index) {
            let triggerElement = $(this);
            let targetElement = $(this);

            var start = 'top top';
            var end = '100% top';

            if (window.innerWidth >= 479 && $('.ceo_message_content').height() > $('.ceo_message_image-wrapper').height()) {
                end = '200% top';
            }

            CEOImagePinning_tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    // trigger element - viewport
                    start: start,
                    end: end,
                    pin: true,
                    pinSpacing: false,
                },
            });
        });
        /* END: CEO Image Pinning */

        /* ---------------------------- */

        /* START: Grow keyfacts from CEO Image */

        //const ceoImgWidth = $('.ceo_message_image').width();
        //const ceoImgHeight = $('.ceo_message_image').height();
        //var factsSectionsInnerWrapperOpacity = 0;
        var keyfacts_tl;

        $('.facts-sections-inner-wrapper').css('opacity', 0);

        const width = $('.ceo_message_image').attr('width');
        const height = $('.ceo_message_image').attr('height');
        var renderedHeight = $('.ceo_message_image').height();
        var renderedWidth = width / height * renderedHeight;
        $('.ceo_message_image').height(renderedHeight);
        $('.ceo_message_image').width(renderedWidth);
        var ceoImgTopPos = parseInt($('.ceo_message_image-wrapper').css('padding-top'));
        var ceoImgLeftPos = $('.ceo_message_image').offset().left;
        var ceoImageLeftAutoMargin = $('.ceo_message_image-wrapper').width() - renderedWidth;
        var hideCeoImage = false;

        keyfacts_tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.facts-sections-wrapper',
                start: 'top top',
                end: '75% top',
                pin: '.facts-sections',
                scrub: true,
                onToggle: function(self) {
                    //var opacity = 0;
                    if (self.isActive) {
                        //opacity = 1;
                        $('.ceo_message_image').addClass('animating');
                        $('.facts-sections-bullets').addClass('hide');
                    } else {
                        $('.ceo_message_image').removeClass('animating');
                    }
                    //$('.facts-sections-inner-wrapper').css('opacity', opacity);
                },
                onEnter: function() {},
                onLeave: function() {
                    //$('.facts-sections-inner-wrapper').css('opacity', 1);
                    $('.ceo_message_image').addClass('animating');
                },
                onUpdate: function(self) {
                    if (self.progress <= 0.05 && hideCeoImage) {
                        gsap.to('.ceo_message_image', {
                            opacity: 1,
                            duration: 0.2
                        });
                        gsap.to('.facts-sections-inner-wrapper', {
                            opacity: 0,
                            duration: 0
                        });
                        hideCeoImage = false;
                    } else if (self.progress > 0.05 && !hideCeoImage) {
                        gsap.to('.ceo_message_image', {
                            opacity: 0,
                            duration: 0.2
                        });
                        gsap.to('.facts-sections-inner-wrapper', {
                            opacity: 1,
                            duration: 0
                        });
                        hideCeoImage = true;
                    }
                },
            },
        });

        keyfacts_tl.from('.facts-sections-inner-wrapper', {
            width: renderedWidth,
            height: renderedHeight,
            x: ceoImgLeftPos,
            y: ceoImgTopPos
        });

        keyfacts_tl.to(
            '.ceo_message_image', {
                //opacity: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                x: -1 * ceoImgLeftPos,
                y: -1 * ceoImgTopPos
            },
            '<'
        );

        /* END: Grow keyfacts from CEO Image */

        /* ---------------------------- */

        /* START: Keyfacts slides */
        var startPosition = 75;
        var endPosition;
        $('.section_facts').each(function(i, el) {
            /* start: Math.round(((i + 1) / 2) * 100) + '% top',
            end: Math.round(((i + 2) / 2) * 100) + '% top', */
            endPosition = startPosition + 100;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.facts-sections-wrapper',
                    pin: '.facts-sections',
                    scrub: true,
                    start: startPosition + '% top',
                    end: endPosition + '% top',
                    onEnter: function() {
                        if (i == 0) {
                            $('.facts-sections-bullets').removeClass('hide');
                        }
                        $('.section_facts:eq(' + i + ')')
                            .addClass('active')
                            .siblings()
                            .removeClass('active');

                        /* $('.facts-sections-bullet:eq(' + i + ')')
                            .addClass('active')
                            .siblings()
                            .removeClass('active'); */
                    },
                    onEnterBack: function() {
                        $('.section_facts:eq(' + i + ')')
                            .addClass('active')
                            .siblings()
                            .removeClass('active');

                        /* $('.facts-sections-bullet:eq(' + i + ')')
                            .addClass('active')
                            .siblings()
                            .removeClass('active'); */
                    },
                },
            });
            tl.to('.facts-sections-bullet.child-' + (i + 1) + ' .facts-sections-bullets-inner-wrapper', {
                height: '100%'
            });
            tl.from('.section_facts:nth-child(' + (i + 1) + ') .facts_heading', {
                y: '100%',
                scale: 2
            }, "<");
            tl.from('.section_facts:nth-child(' + (i + 1) + ') .header-100vh.key-facts', {
                y: '100%'
            }, "<");
            startPosition = endPosition;

            /* tl.to('.section_facts:not(:nth-child('+(i+1)+'))', {opacity: 0});
                  tl.to('.section_facts:nth-child('+(i+1)+')', {opacity: 1}, "<"); */
        });
        /* END: Keyfacts slides */

        ScrollTrigger.refresh(true);

        var ceoMessageDetailHeight = $('.ceo_message_detail').height();
        $('.ceo_message_detail').height(0)
        $('.ceo_message_show_more .button').on('click', function(e) {
            $('.ceo_message_show_more').hide();
            $('.ceo_message_detail').css('height', ceoMessageDetailHeight);
            setTimeout(function() {
                ScrollTrigger.refresh(true);
            }, 500);
        });


        $(window).on("orientationchange", function(event) {
            location.reload();
        });