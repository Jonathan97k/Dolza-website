document.addEventListener('DOMContentLoaded', function() {
    // 1. Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking a nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
    
    // 2. Sticky Navigation
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
    
    // 3. Property Filtering (only for properties.html)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const propertyCards = document.querySelectorAll('.property-card');
    
    if (filterButtons.length > 0 && propertyCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active filter button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                propertyCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // 4. Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // 5. Hero Text Animation
    const animatedText = document.querySelector('.animated-text');
    const texts = animatedText ? animatedText.querySelectorAll('span') : [];
    let currentIndex = 0;
    
    if (texts.length > 0) {
        function cycleText() {
            texts[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % texts.length;
            texts[currentIndex].classList.add('active');
        }
        
        setInterval(cycleText, 3000);
    }
    
    // 6. Active Navigation Link Highlighting
    const currentPage = window.location.pathname.split('/').pop();
    const navLinksAll = document.querySelectorAll('.nav-links a');
    
    navLinksAll.forEach(link => {
        // For index.html, check href="#" as active (since homepage)
        if ((currentPage === '' || currentPage === 'index.html') && link.href.includes('#')) {
            link.classList.add('active');
            return;
        }
        
        // For other pages, match the href
        if (link.href.includes(currentPage) && currentPage !== '') {
            link.classList.add('active');
        }
    });
    
    // 7. Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Basic validation
            if (name && email) {
                alert('Thank you for your message! We will contact you shortly.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // 8. Scroll Animation for Elements
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= window.innerHeight / dividend
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('appear');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('appear');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // Initialize scroll animation for elements that are already in view
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
});
