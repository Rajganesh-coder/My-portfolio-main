// Initialize on document ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js
    const typed = new Typed('.typed-text', {
        strings: ['Software Trainer', 'MCA Graduate', 'Web Developer', 'Code Mentor','Designer'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
    });

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a nav link
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Check for saved theme preference or use default
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.classList.add(savedTheme);

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light')) {
            body.classList.replace('light', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.replace('dark', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // Project filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            projects.forEach(project => {
                if (filter === 'all') {
                    project.style.display = 'block';
                } else if (project.getAttribute('data-category') === filter) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });

    // Contact form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Get form data
            const formData = {
                name: name,
                email: email,
                subject: document.getElementById('subject').value,
                message: message
            };
            
            // Here you would typically send the data to a server
            // For this example, we'll just show a success message
            alert('Message sent successfully! Thank you for reaching out.');
            contactForm.reset();
        });
    }

    // Back to top button functionality
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for anchor links
    const smoothScroll = function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            
            const hash = this.hash;
            const targetElement = document.querySelector(hash);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for header height
                    behavior: 'smooth'
                });
            }
        }
    };
    
    // Apply smooth scrolling to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    anchorLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Add scroll event to change header style
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animate skill bars on scroll
    const animateSkillBars = function() {
        const skillSection = document.getElementById('skills');
        const skillBars = document.querySelectorAll('.skill-progress');
        
        if (skillSection && skillBars.length) {
            const sectionPosition = skillSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (sectionPosition < screenPosition) {
                skillBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    if (bar.style.width === '0px' || bar.style.width === '') {
                        setTimeout(() => {
                            bar.style.width = progress;
                        }, 300);
                    }
                });
            }
        }
    };
    
    window.addEventListener('scroll', animateSkillBars);
    // Call once on load to animate if already in view
    setTimeout(animateSkillBars, 500);
    
});






