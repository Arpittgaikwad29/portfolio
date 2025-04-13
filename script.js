// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Loading screen animation
    setTimeout(() => {
        document.querySelector('.loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loading-screen').style.display = 'none';
        }, 500);
    }, 1500);

    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Changing title text animation
    const titles = ['AI Engineer', 'ML Developer', 'Python Expert', 'Tech Enthusiast'];
    let currentIndex = 0;
    const changingTitle = document.querySelector('.changing-title');
    
    function updateTitle() {
        changingTitle.classList.add('fade-out');
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % titles.length;
            changingTitle.textContent = titles[currentIndex];
            changingTitle.classList.remove('fade-out');
            changingTitle.classList.add('fade-in');
            
            setTimeout(() => {
                changingTitle.classList.remove('fade-in');
            }, 500);
        }, 500);
    }
    
    // Set initial title
    changingTitle.textContent = titles[0];
    
    // Start the title changing animation
    setInterval(updateTitle, 3000);

    // Progress bar animation
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress');
        
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            const rect = bar.getBoundingClientRect();
            const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
            
            if (isInViewport) {
                bar.style.width = targetWidth;
            }
        });
    }

    // Animate elements when they come into view
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.animate-text-delay');
        
        animatedElements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top <= window.innerHeight - 100;
            
            if (isInViewport) {
                element.style.animation = `fadeInUp 0.8s ${0.2 * (index + 1)}s forwards`;
            }
        });
        
        // Also check progress bars
        animateProgressBars();
    }

    // Initial animation check
    animateOnScroll();
    
    // Check animations on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Active navigation highlighting
    function highlightNavLinks() {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        sections.forEach(section => {
            const sectionId = section.getAttribute('id');
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Initial nav highlight check
    highlightNavLinks();
    
    // Update nav highlighting on scroll
    window.addEventListener('scroll', highlightNavLinks);

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real scenario, you would send this data to a server
            // For now, we'll just show an alert
            alert(`Thank you ${name} for your message! I'll get back to you soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }

    // Skill bubbles animation
    function animateSkillBubbles() {
        const skillBubbles = document.querySelectorAll('.skill-bubble');
        
        skillBubbles.forEach((bubble, index) => {
            // Add random movement to make them more lively
            setInterval(() => {
                const randomX = Math.random() * 10 - 5;
                const randomY = Math.random() * 10 - 5;
                
                bubble.style.transform = `translate(${randomX}px, ${randomY}px)`;
                
                setTimeout(() => {
                    bubble.style.transform = 'translate(0, 0)';
                }, 500);
            }, 3000 + (index * 500));
        });
    }
    
    // Start skill bubbles animation
    animateSkillBubbles();

    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });

    // Achievement card hover effects
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });

    // Skill category hover effects
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            category.style.transform = 'translateY(-5px)';
            category.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.08)';
        });
        
        category.addEventListener('mouseleave', () => {
            category.style.transform = '';
            category.style.boxShadow = '';
        });
    });

    // Education item hover effects
    const educationItems = document.querySelectorAll('.education-item');
    
    educationItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.08)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
            item.style.boxShadow = '';
        });
    });

    // Parallax effect for hero section
    function parallaxEffect() {
        const heroSection = document.querySelector('.hero');
        const scrollPosition = window.scrollY;
        
        if (scrollPosition < 600) {
            heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    }
    
    // Update parallax on scroll
    window.addEventListener('scroll', parallaxEffect);

    // Custom cursor implementation
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');

const cursorDot = document.createElement('div');
cursorDot.classList.add('cursor-dot');

document.body.appendChild(cursor);
document.body.appendChild(cursorDot);

// Mouse movement tracking
document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Small delay for the dot for subtle trailing effect
    setTimeout(() => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    }, 50);
});

// Add hover effect when hovering over clickable elements
const clickables = document.querySelectorAll('a, button, .btn, .nav-links li, .project-card, .skill-item');

clickables.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorDot.style.opacity = '0';
    });
    
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorDot.style.opacity = '1';
    });
});
});