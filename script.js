// Property Tabs Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const propertyDetails = document.querySelectorAll('.property-detail');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const property = this.getAttribute('data-property');
            
            // Remove active class from all tabs and property details
            tabs.forEach(t => t.classList.remove('active'));
            propertyDetails.forEach(pd => pd.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding property detail
            this.classList.add('active');
            document.getElementById(property).classList.add('active');
            
            // Smooth scroll to properties section
            document.getElementById('residencias').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Gallery image click - expand main image (optional enhancement)
    const galleryImages = document.querySelectorAll('.image-gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const mainImage = this.closest('.property-images').querySelector('.main-image img');
            const tempSrc = mainImage.src;
            mainImage.src = this.src;
            this.src = tempSrc;
        });
    });
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            property: document.getElementById('property').value,
            timeline: document.getElementById('timeline').value,
            message: document.getElementById('message').value
        };
        
        // Create email body
        const emailBody = `
Nuevo Lead - La Huerta San Sebastián

INFORMACIÓN DE CONTACTO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}

DETALLES DE INTERÉS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Residencia de Interés: ${formData.property}
Timeline de Compra: ${formData.timeline}

MENSAJE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message || 'No se incluyó mensaje adicional.'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Formulario enviado desde: La Huerta San Sebastián Landing Page
Fecha: ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mazatlan' })}
        `.trim();
        
        // Create mailto link
        const subject = encodeURIComponent(`Nuevo Lead - ${formData.property} - ${formData.name}`);
        const body = encodeURIComponent(emailBody);
        const mailtoLink = `mailto:tyson@ricardoamigo.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showSuccessMessage();
        
        // Reset form after short delay
        setTimeout(() => {
            contactForm.reset();
        }, 1000);
    });
    
    function showSuccessMessage() {
        // Create success message element
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div class="success-content">
                <span class="success-icon">✓</span>
                <h3>¡Solicitud Enviada!</h3>
                <p>Se abrirá tu cliente de correo para confirmar el envío a Tyson Gargas.</p>
            </div>
        `;
        
        // Add styles for success message
        const style = document.createElement('style');
        style.textContent = `
            .success-message {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 2rem 3rem;
                border-radius: 8px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                z-index: 10000;
                text-align: center;
                animation: slideIn 0.4s ease;
            }
            
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translate(-50%, -60%);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%);
                }
            }
            
            .success-icon {
                display: inline-block;
                width: 60px;
                height: 60px;
                background: #c9a690;
                color: white;
                border-radius: 50%;
                font-size: 2rem;
                line-height: 60px;
                margin-bottom: 1rem;
            }
            
            .success-content h3 {
                color: #6b5842;
                margin-bottom: 0.5rem;
                font-size: 1.5rem;
            }
            
            .success-content p {
                color: #8b7355;
                font-size: 1rem;
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(successDiv);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            successDiv.style.animation = 'slideIn 0.4s ease reverse';
            setTimeout(() => {
                document.body.removeChild(successDiv);
            }, 400);
        }, 3000);
    }
    
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Navbar scroll effect
    let lastScroll = 0;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // Add animation on scroll for feature cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
});

// Add loading animation for images
window.addEventListener('load', function() {
    document.querySelectorAll('img').forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        }
    });
});
