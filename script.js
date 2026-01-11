// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (navToggle) {
            navToggle.classList.remove('active');
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Advanced Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

// Observe all sections with animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    fadeObserver.observe(section);
});

// Stagger animation for cards
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.highlight-card, .cert-card, .gallery-item, .contact-card, .exp-list li');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 120);
            });
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Apply stagger animation to card containers
document.querySelectorAll('.highlights-grid, .cert-grid, .gallery-grid, .contact-info, .exp-list').forEach(container => {
    const cards = container.querySelectorAll('.highlight-card, .cert-card, .gallery-item, .contact-card, .exp-list li');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    cardObserver.observe(container);
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function setActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// Parallax effect for hero background
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// Animated number counter for stats
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Observe highlight stats for counter animation
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statElement = entry.target;
            const finalValue = statElement.textContent;
            
            // Only animate if it's a time format (contains :)
            if (finalValue.includes(':')) {
                statElement.style.opacity = '0';
                setTimeout(() => {
                    statElement.style.transition = 'opacity 0.5s ease';
                    statElement.style.opacity = '1';
                }, 300);
            }
            
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.highlight-stat').forEach(stat => {
    statObserver.observe(stat);
});

// Smooth hover effect for skill tags
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    const rippleElement = button.querySelector('.ripple');
    if (rippleElement) {
        rippleElement.remove();
    }
    
    button.appendChild(ripple);
}

// Add ripple CSS dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Magnetic effect for buttons and cards
function addMagneticEffect(elements) {
    elements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            this.style.transform = `translate(${deltaX * 10}px, ${deltaY * 10}px)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
}

// Apply magnetic effect to specific elements
addMagneticEffect(document.querySelectorAll('.cert-icon, .contact-icon'));

// Scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), var(--primary-color));
    z-index: 10000;
    transform-origin: left;
    transition: transform 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Typing effect for hero title (optional, subtle)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    element.style.opacity = '1';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Image lazy loading animation
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.style.transform = 'scale(0.95)';
            
            img.addEventListener('load', () => {
                img.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            });
            
            imageObserver.unobserve(img);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.image-wrapper img').forEach(img => {
    imageObserver.observe(img);
});

// Performance optimization: Debounce function
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedSetActiveNav = debounce(setActiveNav, 20);
window.addEventListener('scroll', debouncedSetActiveNav);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loading');
    
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 500);
});

// Animate text on scroll
const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const words = entry.target.textContent.split(' ');
            entry.target.textContent = '';
            entry.target.style.opacity = '1';
            
            words.forEach((word, index) => {
                const span = document.createElement('span');
                span.textContent = word + ' ';
                span.style.opacity = '0';
                span.style.display = 'inline-block';
                span.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.05}s`;
                entry.target.appendChild(span);
            });
            
            textObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Apply text animation to specific elements
document.querySelectorAll('.hero-description').forEach(element => {
    textObserver.observe(element);
});

// Add gradient animation to section titles
document.querySelectorAll('.section-title').forEach(title => {
    title.style.backgroundImage = 'linear-gradient(90deg, #000 0%, #666 50%, #000 100%)';
    title.style.backgroundSize = '200% 100%';
    title.style.webkitBackgroundClip = 'text';
    title.style.backgroundClip = 'text';
    
    const animateGradient = () => {
        let position = 0;
        setInterval(() => {
            position = (position + 1) % 200;
            title.style.backgroundPosition = position + '% 0';
        }, 30);
    };
    
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateGradient();
                titleObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    titleObserver.observe(title);
});

// Add floating animation to hero image
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
    let floatDirection = 1;
    let floatPosition = 0;
    
    setInterval(() => {
        floatPosition += 0.5 * floatDirection;
        if (floatPosition > 10 || floatPosition < -10) {
            floatDirection *= -1;
        }
        heroImage.style.transform = `translateY(${floatPosition}px)`;
    }, 50);
}

// Add tilt effect on mouse move for cards
document.querySelectorAll('.highlight-card, .gallery-item').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Cursor trail effect (subtle)
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

if (circles.length === 0) {
    // Create subtle cursor followers
    for (let i = 0; i < 20; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.1);
            pointer-events: none;
            z-index: 9998;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(circle);
    }
}

const allCircles = document.querySelectorAll('.circle');

window.addEventListener('mousemove', function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    
    allCircles.forEach((circle, index) => {
        circle.style.left = x - 2 + 'px';
        circle.style.top = y - 2 + 'px';
        circle.style.transform = `scale(${(allCircles.length - index) / allCircles.length})`;
        
        const nextCircle = allCircles[index + 1] || allCircles[0];
        x += (parseInt(nextCircle.style.left) - x) * 0.3;
        y += (parseInt(nextCircle.style.top) - y) * 0.3;
    });
    
    requestAnimationFrame(animateCircles);
}

animateCircles();

// Gallery Lightbox
function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="" alt="">
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(lightbox);
    return lightbox;
}

const lightbox = createLightbox();
const lightboxImg = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
const lightboxClose = lightbox.querySelector('.lightbox-close');

// Add lightbox styles
const lightboxStyle = document.createElement('style');
lightboxStyle.textContent = `
    .lightbox {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.95);
        z-index: 10001;
        animation: fadeIn 0.3s ease;
    }
    .lightbox.active {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        text-align: center;
    }
    .lightbox-content img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        animation: zoomIn 0.4s ease;
    }
    .lightbox-close {
        position: absolute;
        top: -50px;
        right: 0;
        font-size: 40px;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 300;
        line-height: 1;
    }
    .lightbox-close:hover {
        color: #ff6b35;
        transform: rotate(90deg);
    }
    .lightbox-caption {
        color: #fff;
        margin-top: 1.5rem;
        font-size: 1.1rem;
        font-weight: 500;
    }
    @keyframes zoomIn {
        from {
            transform: scale(0.8);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(lightboxStyle);

// Gallery item click handlers
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const caption = this.querySelector('.overlay-content p');
        
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = caption ? caption.textContent : img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close lightbox
lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close lightbox with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Log initialization
console.log('%cMOVE WOO', 'font-size: 48px; font-weight: 900; color: #000; letter-spacing: -2px;');
console.log('%cPhysical Growth Journal', 'font-size: 16px; color: #666; font-weight: 600;');
console.log('%c✓ All animations loaded', 'font-size: 12px; color: #ff6b35; font-weight: 600;');
