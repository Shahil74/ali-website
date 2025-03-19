<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enhanced Website</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

</head>

<body>
    <!-- Fixed Buttons -->
    <div class="menu-button">
        <button class="btn">Menu</button>
    </div>
    <div class="language-button">
        <button class="btn btn-modern btn-modern-secondary">Language</button>
    </div>

    <!-- Hero Section -->
    <section class="hero-section">
        <img src='assets/images/logo.png' alt="Logo" class="logo">
        <div class="growth-text">
            46 Years<br> of Continuous Growth & Success
        </div>
    </section>

    <section class="ceo-section">
    <div class="ceo-container">
        <img src="assets/images/ceo.jpg" alt="CEO Image" class="ceo-image">
        <div class="ceo-content">
            <h2 class="ceo-title">Message from Our CEO</h2>
            <p class="ceo-message">
                "Our journey has always been guided by a strong commitment to our values..."
            </p>
        </div>
    </div>
</section>

<!-- <section class="next-bg">
    <div id="carouselExample" class="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="assets/images/slide1.jpg" alt="Slide 1" class="carousel-image">
                <div class="carousel-caption">
                    <h1>Technology</h1>
                </div>
            </div>
            <div class="carousel-item">
                <img src="assets/images/slide2.jpg" alt="Slide 2" class="carousel-image">
                <div class="carousel-caption">
                    <h1>Efficiency</h1>
                </div>
            </div>
            <div class="carousel-item">
                <img src="assets/images/slide3.jpg" alt="Slide 3" class="carousel-image">
                <div class="carousel-caption">
                    <h1>Perfection</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="progress-container">
        <div class="progress-bar"></div>
        <div class="progress-bar"></div>
        <div class="progress-bar"></div>
    </div>
</section> -->
<section class="carousel-section">
    <div class="carousel-item">
        <img src="assets/images/slide1.jpg" alt="Carousel 1">
        <div class="carousel-caption">Caption 1</div>
    </div>
    <div class="carousel-item">
        <img src="assets/images/slide2.jpg" alt="Carousel 2">
        <div class="carousel-caption">Caption 2</div>
    </div>
    <div class="carousel-item">
        <img src="assets/images/slide3.jpg" alt="Carousel 3">
        <div class="carousel-caption">Caption 3</div>
    </div>
</section>
<div class="progress-bar-container">
    <div class="progress-bar"></div>
    <div class="progress-bar"></div>
    <div class="progress-bar"></div>
</div>

    <!-- Portfolio Section -->
    <section class="portfolio-section">
        <h2>Our Portfolio</h2>
        <div class="portfolio-container">
            <div class="portfolio-item">
                <a href="real_estate_view">
                    <img src='<?=base_url('assets/images/portfolio1.jpg')?>' alt="Real Estate" loading="lazy">
                    <div class="portfolio-overlay">
                        <div class="portfolio-text">
                            <h3>Real Estate</h3>
                            <p>View details</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="portfolio-item">
                <a href="retail_view">
                    <img src="assets/images/portfolio2.jpg" alt="Retail" loading="lazy">
                    <div class="portfolio-overlay">
                        <div class="portfolio-text">
                            <h3>Retail</h3>
                            <p>View details</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="portfolio-item">
                <a href="investment_view">
                    <img src="assets/images/portfolio3.jpg" alt="Investment" loading="lazy">
                    <div class="portfolio-overlay">
                        <div class="portfolio-text">
                            <h3>Investment</h3>
                            <p>View details</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- Enquiry Section -->
    <section class="enquiry-section" id="enquirySection">
        <div class="enquiry-container">
            <div class="enquiry-form">
                <input type="email" placeholder="Email Address...">
                <button class="submit-button"><i class="fas fa-chevron-right"></i></button>
            </div>
            <div class="enquiry-checkboxes">
                <label><input type="checkbox" name="interest" value="automotive"> Automotive</label>
                <label><input type="checkbox" name="interest" value="energy"> Energy and Industrial</label>
                <label><input type="checkbox" name="interest" value="realestate"> Real Estate, Retail, Investment</label>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-buttons">
                    <div class="menu-button">
                        <button class="btn">Menu</button>
                    </div>
                    <div class="language-button">
                        <button class="btn btn-modern btn-modern-secondary">Enquiry</button>
                    </div>
                </div>
                <div class="footer-lower">
                    <div class="social-icons">
                        <a href="#" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <a href="#" target="_blank" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" target="_blank" class="social-icon"><i class="fab fa-pinterest-p"></i></a>
                        <a href="#" target="_blank" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="#" target="_blank" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div class="copyright">
                        <p>&copy; <span id="currentYear"></span> Your Company Name. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <script src="assets/js/script.js"></script>
    <script>
        // Dynamically set the current year
        document.getElementById("currentYear").textContent = new Date().getFullYear();
    </script>
</body>

</html>
