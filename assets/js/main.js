/**
 * Jeric Mangao - Portfolio JavaScript
 * Handles interactive elements, navigation highlighting, and animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Header scroll effect
    const navbar = document.querySelector('.navbar');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once in case page loads scrolled

    // 2. Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    const handleBackToTopVisibility = () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    };
    window.addEventListener('scroll', handleBackToTopVisibility);
    handleBackToTopVisibility();

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 3. Scrollspy - Active Navbar Link Highlight
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const handleScrollSpy = () => {
        const scrollPosition = window.scrollY + 100; // offset for nav height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();

    // 4. Skills Category Tab Filters
    const tabButtons = document.querySelectorAll('.skills-tab-btn');
    const skillCards = document.querySelectorAll('.skill-card-col');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active to clicked tab
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            skillCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                    // Trigger simple reflow for fade-in animation
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transition = 'opacity 0.4s ease';
                    }, 50);
                } else {
                    if (card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transition = 'opacity 0.4s ease';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // 5. Contact Form with Mailto Redirect fallback (Production-ready static UX)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Extract fields
            const name = document.getElementById('formName').value;
            const email = document.getElementById('formEmail').value;
            const subject = document.getElementById('formSubject').value;
            const message = document.getElementById('formMessage').value;
            
            // Disable button and show sending status
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Prefilling Mail...';
            
            // Trigger mailto redirect
            const mailtoLink = `mailto:mangaojeric0505@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`;
            
            window.location.href = mailtoLink;
            
            // Show success message after redirect triggers
            setTimeout(() => {
                submitBtn.classList.remove('btn-primary-gradient');
                submitBtn.classList.add('btn-success');
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Mail Client Opened!';
                
                // Clear fields
                contactForm.reset();
                
                // Reset button after 4 seconds
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('btn-success');
                    submitBtn.classList.add('btn-primary-gradient');
                    submitBtn.innerHTML = originalText;
                }, 4000);
            }, 1000);
        });
    }

    // 6. Bootstrap Navbar Collapse auto-close on click for mobile devices
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const bsCollapse = navbarCollapse ? new bootstrap.Collapse(navbarCollapse, { toggle: false }) : null;
    
    if (navbarCollapse) {
        const navItems = navbarCollapse.querySelectorAll('.nav-link, .btn-custom');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show') && bsCollapse) {
                    bsCollapse.hide();
                }
            });
        });
    }
});
