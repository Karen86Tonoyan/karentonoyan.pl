// AI Education Website - JavaScript
// Author: Karen Tonoyan

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Copy prompt function
function copyPrompt(button) {
    const promptBox = button.closest('.prompt-box');
    const code = promptBox.querySelector('code');
    const text = code.textContent.trim();
    
    navigator.clipboard.writeText(text).then(() => {
        // Change button text temporarily
        const originalText = button.textContent;
        button.textContent = '✓ Skopiowano!';
        button.style.background = '#4CAF50';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Nie udało się skopiować. Spróbuj ponownie.');
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 4px 30px rgba(255, 233, 0, 0.2)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = '0 4px 20px rgba(255, 233, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Console message
console.log('%cAI Education Website', 'color: #ffe900; font-size: 24px; font-weight: bold;');
console.log('%cPowered by Karen Tonoyan', 'color: #fff; font-size: 14px;');
console.log('%cKontakt: kontakt@karentonoyan.pl', 'color: #888; font-size: 12px;');
