        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Mobile Menu Toggle
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');

            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            // Close menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });

            // 2. Contact Form Handling
            const contactForm = document.getElementById('contactForm');
            const formMessage = document.getElementById('formMessage');

            contactForm.addEventListener('submit', (e) => {
                e.preventDefault(); // Stop actual submission for demo
                
                // Simulate sending data...
                const btn = contactForm.querySelector('button');
                const originalText = btn.innerText;
                btn.innerText = 'Sending...';
                btn.disabled = true;

                setTimeout(() => {
                    formMessage.style.display = 'block';
                    contactForm.reset();
                    btn.innerText = originalText;
                    btn.disabled = false;
                    
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        formMessage.style.display = 'none';
                    }, 5000);
                }, 1000);
            });
        });