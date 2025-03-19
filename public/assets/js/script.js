// document.addEventListener("DOMContentLoaded", function () {
//     let ticking = false;

//     window.addEventListener("scroll", function () {
//         if (!ticking) {
//             requestAnimationFrame(function () {
//                 handleScrollEffects();
//                 ticking = false;
//             });
//             ticking = true;
//         }
//     });
//     const enquiryButton = document.querySelector('.language-button button');
//     const enquirySection = document.getElementById('enquirySection');

//     enquiryButton.addEventListener('click', function(e) {
//         e.preventDefault(); // Prevent default button behavior
//         enquirySection.scrollIntoView({ behavior: 'smooth' });
//     });
    

//     function handleScrollEffects() {
//         let scrollTop = window.scrollY;
//         let ceoSection = document.querySelector(".ceo-section");
//         let ceoTop = ceoSection.offsetTop;
//         let windowHeight = window.innerHeight;
//         let nextBg = document.querySelector(".next-bg");
//         let carousel = document.querySelector("#horizontalCarousel");
//         let carouselItems = document.querySelectorAll(".carousel-item");
//         let numImages = carouselItems.length;
//         let languageButton = document.querySelector(".language-button button");

//         // Logo & Growth Text Scroll Effect
//         let logoElements = document.querySelectorAll(".logo, .growth-text");
//         if (scrollTop >= ceoTop - windowHeight / 2) {
//             logoElements.forEach(element => element.classList.add("scrolled-up"));
//         } else {
//             logoElements.forEach(element => element.classList.remove("scrolled-up"));
//         }

//         // CEO Section Effects
//         let ceoText = document.querySelector(".ceo-text");
//         let ceoImage = document.querySelector(".ceo-image");

//         if (scrollTop >= ceoTop) {
//             // Fade out CEO text, image, and background
//             ceoText.classList.add("fade-out");
//             ceoImage.classList.add("fade-out");
//             ceoSection.style.opacity = "0"; // Hide CEO background

//             // Show carousel background
//             nextBg.classList.add("show");

//             // Change language button text to "Enquiry"
//             if (languageButton.textContent !== "Enquiry") {
//                 languageButton.style.display = "none";
//                 setTimeout(function () {
//                     languageButton.textContent = "Enquiry";
//                     languageButton.style.display = "inline-block";
//                 }, 200);
//             }

//             // **Carousel Image Scroll Effect**
//             let scrollProgress = ((scrollTop - ceoTop) / windowHeight) * numImages;
//             let index = Math.min(Math.floor(scrollProgress), numImages - 1);

//             // Remove 'active' class from all slides and set new one based on scroll
//             carouselItems.forEach(item => item.classList.remove("active"));
//             if (!carouselItems[index].classList.contains("active")) {
//                 carouselItems.forEach(item => item.classList.remove("active"));
//                 carouselItems[index].classList.add("active");
//             }
            

//         } else {
//             // Reset CEO section (bring back its background)
//             ceoText.classList.remove("fade-out");
//             ceoImage.classList.remove("fade-out");
//             ceoSection.style.opacity = "1"; // Show CEO background again

//             // Hide new background (carousel)
//             nextBg.classList.remove("show");

//             // Reset language button text to "Language"
//             if (languageButton.textContent !== "Language") {
//                 languageButton.style.display = "none";
//                 setTimeout(function () {
//                     languageButton.textContent = "Language";
//                     languageButton.style.display = "inline-block";
//                 }, 200);
//             }
//         }
//     }
//     const carousel = document.querySelector("#horizontalCarousel");
//     const slides = document.querySelectorAll(".carousel-item");
//     const progressBars = document.querySelectorAll(".progress-bar");

//     function updateOnScroll() {
//         let scrollTop = window.scrollY;
//         let sectionTop = document.querySelector(".next-bg").offsetTop;
//         let sectionHeight = document.querySelector(".next-bg").offsetHeight;
//         let scrollProgress = Math.min(1, (scrollTop - sectionTop) / sectionHeight);
//         let activeIndex = Math.floor(scrollProgress * slides.length);

//         slides.forEach((slide, index) => {
//             slide.classList.toggle("active", index === activeIndex);
//         });

//         progressBars.forEach((bar, index) => {
//             bar.classList.toggle("active", index === activeIndex);
//         });
//     }

//     window.addEventListener("scroll", updateOnScroll);
//     updateOnScroll(); // Initialize on load
// });
// document.addEventListener("scroll", function () {
//     let carouselItems = document.querySelectorAll(".carousel-item");

//     carouselItems.forEach((item) => {
//         let heading = item.querySelector("h1");
//         let rect = item.getBoundingClientRect();
//         let windowHeight = window.innerHeight;

//         // If the carousel item is mostly in view
//         if (rect.top < windowHeight - 100 && rect.bottom > 100) {
//             heading.classList.add("swing");
//         } else {
//             heading.classList.remove("swing"); // Reset when out of view
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector(".portfolio-container");

//     container.addEventListener("wheel", (event) => {
//         event.preventDefault();
//         container.scrollBy({ left: event.deltaY * 3, behavior: "instant" });
//     });
    
// });
// document.addEventListener("DOMContentLoaded", function () {
//     let ticking = false;

//     // Elements
//     const progressBars = document.querySelectorAll(".progress-bar");
//     const carouselItems = document.querySelectorAll(".carousel-item");
//     const enquiryButton = document.querySelector(".language-button button");
//     const enquirySection = document.getElementById("enquirySection");
//     const logo = document.querySelector(".logo");
//     const growthText = document.querySelector(".growth-text");
//     const heroSection = document.querySelector(".hero-section");
//     const ceoSection = document.querySelector(".ceo-section");
//     const ceoContainer = document.querySelector(".ceo-container");
//     const nextBg = document.querySelector(".next-bg");

//     // Scroll Event Listener
//     window.addEventListener("scroll", function () {
//         if (!ticking) {
//             requestAnimationFrame(() => {
//                 handleScrollEffects();
//                 handleCeoFadeEffect();
//                 updateCarouselAndProgress();
//                 ticking = false;
//             });
//             ticking = true;
//         }
//     });

//     // Handle Scroll Effects for Logo and Growth Text
//     function handleScrollEffects() {
//         const scrollTop = window.scrollY;
//         const heroHeight = heroSection.offsetHeight;

//         const moveFactor = Math.min(1, scrollTop / heroHeight);

//         logo.style.transform = `translateY(${moveFactor * 100}px)`;
//         growthText.style.transform = `translateY(${moveFactor * -50}px)`;
//         growthText.style.opacity = `${1 - moveFactor}`;

//         // Check if we have scrolled past the hero section
//         if (scrollTop > heroHeight) {
//             if (enquiryButton.textContent !== "Enquiry") {
//                 enquiryButton.textContent = "Enquiry";
//                 enquiryButton.onclick = function () {
//                     enquirySection.scrollIntoView({ behavior: "smooth" });
//                 };
//             }
//         } else {
//             if (enquiryButton.textContent !== "Language") {
//                 enquiryButton.textContent = "Language";
//                 enquiryButton.onclick = null;
//             }
//         }
//     }

//     // Handle CEO Section Effects
//     function handleCeoFadeEffect() {
//         const scrollTop = window.scrollY;
//         const ceoTop = ceoSection.offsetTop;
//         const ceoHeight = ceoSection.offsetHeight;

//         if (scrollTop > ceoTop + ceoHeight / 2) {
//             ceoContainer.classList.add("fade-out");
//             nextBg.classList.add("show");
//         } else {
//             ceoContainer.classList.remove("fade-out");
//             nextBg.classList.remove("show");
//         }
//     }

//     // Update Carousel and Progress Bar
//     function updateCarouselAndProgress() {
//         const scrollTop = window.scrollY;
//         const nextBgTop = nextBg.offsetTop;
//         const nextBgHeight = nextBg.offsetHeight;
//         const scrollProgress = Math.min(
//             1,
//             Math.max(0, (scrollTop - nextBgTop) / nextBgHeight)
//         );

//         // Update progress bars
//         progressBars.forEach((bar, index) => {
//             if (scrollProgress >= (index + 1) / progressBars.length) {
//                 bar.classList.add("active");
//             } else {
//                 bar.classList.remove("active");
//             }
//         });

//         // Sync carousel slides
//         const activeIndex = Math.floor(scrollProgress * carouselItems.length);
//         carouselItems.forEach((item, idx) => {
//             item.classList.toggle("active", idx === activeIndex);
//         });
//     }

//     // Smooth Scroll to Enquiry Section
//     enquiryButton.addEventListener("click", function (e) {
//         e.preventDefault();
//         enquirySection.scrollIntoView({ behavior: "smooth" });
//     });

//     // Initial Carousel and Progress Bar Update
//     updateCarouselAndProgress();
// });
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let ceoSection = document.querySelector(".ceo-section");
    let logoElements = document.querySelectorAll(".logo, .growth-text");
    let languageButton = document.querySelector(".language-button button");
    let carouselItems = gsap.utils.toArray(".carousel-item");
    let progressBars = gsap.utils.toArray(".progress-bar");
    document.querySelector(".carousel-item").classList.add("active");
    const carousel = document.querySelector(".carousel-section");
    const progressBar = document.querySelector(".progress-bar-container");
    let ceoSectionRect = ceoSection.getBoundingClientRect();
    let carouselSection = document.querySelector(".carousel-section");

// Hide all images initially
carouselItems.forEach(item => item.style.display = "none");

// Show the first image by default
if (carouselItems.length > 0) {
    carouselItems[0].style.display = "block";
}


    if (!ceoSection || !carouselSection) {
        console.error("CEO section or carousel section not found!");
        return;
    }

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;
        let ceoTop = ceoSection.offsetTop;
        let windowHeight = window.innerHeight;

        // **CEO fades out**
        let fadeProgress = Math.min((scrollTop - ceoTop) / (windowHeight / 2), 1);
        ceoSection.style.opacity = 1 - fadeProgress;
        ceoSection.style.transform = `scale(${1 + fadeProgress * 0.15})`;

        // **Carousel appears**
        if (scrollTop > ceoTop) {
            carouselSection.style.opacity = fadeProgress;
            carouselSection.style.transform = `translateY(0)`;
        } else {
            carouselSection.style.opacity = 0;
            carouselSection.style.transform = `translateY(50px)`;
        }

        // **Progress Bar & Image Update**
        let progressIndex = Math.min(Math.floor((scrollTop - ceoTop) / windowHeight * carouselItems.length), carouselItems.length - 1);

        carouselItems.forEach((item, index) => {
            item.classList.toggle("active", index === progressIndex);
        });

        progressBars.forEach((bar, index) => {
            bar.classList.toggle("active", index === progressIndex);
        });
    });

    if (ceoSectionRect.top < -100) { 
        carousel.classList.add("visible"); // Show the carousel
        progressBar.style.opacity = "1";  // Make progress bar visible
    } else {
        carousel.classList.remove("visible");
        progressBar.style.opacity = "0";
    }
    // **CEO Section Fade Out & Scale Up**
    gsap.to(ceoSection, {
        opacity: 0,
        scale: 1.1,
        scrollTrigger: {
            trigger: ceoSection,
            start: "top center",
            end: "top 10%",
            scrub: true
        }
    });

    // **Logo & Growth Text Movement**
    gsap.to(logoElements, {
        y: -100, // Moves up
        scrollTrigger: {
            trigger: ceoSection,
            start: "top bottom",
            end: "top top",
            scrub: true
        }
    });

    // **Language Button Change**
    ScrollTrigger.create({
        trigger: ceoSection,
        start: "top center",
        end: "top 10%",
        scrub: true,
        onEnter: () => {
            if (languageButton.textContent !== "Enquiry") {
                languageButton.style.opacity = "0";
                setTimeout(() => {
                    languageButton.textContent = "Enquiry";
                    languageButton.style.opacity = "1";
                }, 200);
            }
        },
        onLeaveBack: () => {
            if (languageButton.textContent !== "Language") {
                languageButton.style.opacity = "0";
                setTimeout(() => {
                    languageButton.textContent = "Language";
                    languageButton.style.opacity = "1";
                }, 200);
            }
        }
    });

    // **Carousel Image Transition Effect**
    carouselItems.forEach((item, index) => {
        gsap.to(item, {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "top top",
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });
    });

    // **Carousel Content Moves Up as We Scroll**
    gsap.utils.toArray(".carousel-caption").forEach((caption) => {
        gsap.to(caption, {
            y: -150,
            opacity: 1,
            scrollTrigger: {
                trigger: caption,
                start: "top bottom",
                end: "top top",
                scrub: true
            }
        });
    });

    // **Progress Bar Animation for Carousel Only**
    progressBars.forEach((bar, index) => {
        gsap.to(bar, {
            height: "100%",
            scrollTrigger: {
                trigger: carouselItems[index],
                start: "top bottom",
                end: "top top",
                scrub: true
            }
        });
    });

    // **Horizontal Scroll for Portfolio**
    const portfolioContainer = document.querySelector(".portfolio-container");
    if (portfolioContainer) {
        portfolioContainer.addEventListener("wheel", (event) => {
            event.preventDefault();
            portfolioContainer.scrollLeft += event.deltaY * 1.2;
        });
    }
    
});
document.addEventListener("DOMContentLoaded", function () {
    let carouselItems = document.querySelectorAll(".carousel-item");
    let progressBars = document.querySelectorAll(".progress-bar");
    let currentIndex = 0;

    function showSlide(index) {
        // Hide all images & reset progress bars
        carouselItems.forEach((item, i) => {
            item.style.display = "none";
            progressBars[i].classList.remove("active");
        });

        // Show the selected image & activate corresponding progress bar
        carouselItems[index].style.display = "block";
        progressBars[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length; // Loop back after last image
        showSlide(currentIndex);
    }

    // Show the first image initially
    showSlide(currentIndex);

    // Auto-change images every 3 seconds
    setInterval(nextSlide, 3000);
});





