// ================================
// AI-FOCUSED WEBSITE JAVASCRIPT
// By Karen Tonoyan
// ================================

// ================================
// SMOOTH SCROLL & MOBILE MENU
// ================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
});

// ================================
// FADE-IN ON SCROLL ANIMATION
// ================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade sections
document.querySelectorAll('.fade-section').forEach(section => {
    observer.observe(section);
});

// ================================
// COPY TEMPLATE FUNCTIONALITY
// ================================
function copyTemplate(button) {
    const codeElement = button.previousElementSibling;
    const text = codeElement.textContent.trim();
    
    // Copy to clipboard
    navigator.clipboard.writeText(text).then(function() {
        // Visual feedback
        const originalText = button.textContent;
        button.textContent = 'Skopiowano! ✓';
        button.style.background = 'var(--yellow)';
        button.style.color = 'var(--black)';
        
        setTimeout(function() {
            button.textContent = originalText;
            button.style.background = '';
            button.style.color = '';
        }, 2000);
    }).catch(function(err) {
        console.error('Błąd kopiowania:', err);
        alert('Nie udało się skopiować tekstu. Spróbuj ponownie.');
    });
}

// Make copyTemplate function globally accessible
window.copyTemplate = copyTemplate;

// ================================
// NAVBAR BACKGROUND ON SCROLL
// ================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(255, 215, 0, 0.2)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(255, 215, 0, 0.1)';
    }
});

// ================================
// LOADING ANIMATION
// ================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ================================
// ACCESSIBILITY: ESC KEY TO CLOSE MOBILE MENU
// ================================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    }
});

// ================================
// PERFORMANCE: LAZY LOAD IMAGES
// ================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ================================
// CONSOLE MESSAGE
// ================================
console.log('%c🤖 Karen Tonoyan - AI Expert', 'font-size: 20px; color: #FFD700; font-weight: bold;');
console.log('%cWitaj na mojej stronie! Jeśli szukasz wsparcia z AI, zapraszam do kontaktu.', 'font-size: 14px; color: #CCCCCC;');
console.log('%c📧 kontakt@karentonoyan.pl', 'font-size: 12px; color: #FFD700;');
