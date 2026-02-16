// ============================================
// LA HUERTA SAN SEBASTIÁN
// Luxury Landing Interactions
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for all anchor links
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
    
    // Parallax effect for hero
    const hero = document.querySelector('.hero-immersive');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            hero.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: this.name.value,
                email: this.email.value,
                phone: this.phone.value,
                property: this.property.value,
                message: this.message.value
            };
            
            // Create email body
            const emailBody = `
New Inquiry — La Huerta San Sebastián

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INQUIRY DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Property of Interest: ${formData.property}

Message:
${formData.message || 'No additional message provided.'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString('en-US', { 
    timeZone: 'America/Mazatlan',
    dateStyle: 'full',
    timeStyle: 'short'
})}
            `.trim();
            
            // Create mailto link
            const subject = encodeURIComponent(`La Huerta Inquiry — ${formData.property} — ${formData.name}`);
            const body = encodeURIComponent(emailBody);
            const mailtoLink = `mailto:tyson@ricardoamigo.com?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show subtle confirmation
            showConfirmation();
            
            // Reset form
            setTimeout(() => {
                contactForm.reset();
            }, 1000);
        });
    }
    
    function showConfirmation() {
        const confirmation = document.createElement('div');
        confirmation.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #2A2521;
            color: #FFFCF7;
            padding: 2rem 3rem;
            font-family: 'PP Fraktion Mono', monospace;
            font-size: 0.875rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        confirmation.textContent = 'Opening email client...';
        
        document.body.appendChild(confirmation);
        
        setTimeout(() => {
            confirmation.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
            confirmation.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(confirmation);
            }, 300);
        }, 2500);
    }
    
    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe residence showcases
    document.querySelectorAll('.residence-showcase').forEach(residence => {
        fadeObserver.observe(residence);
    });
    
    // Navigation background on scroll
    const nav = document.querySelector('.nav-minimal');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.background = 'rgba(250, 248, 245, 0.98)';
            nav.style.boxShadow = '0 1px 0 rgba(42, 37, 33, 0.08)';
        } else {
            nav.style.background = 'rgba(250, 248, 245, 0.95)';
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // Lazy load images
    const images = document.querySelectorAll('img[src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.6s ease';
                
                img.addEventListener('load', () => {
                    img.style.opacity = '1';
                });
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});
