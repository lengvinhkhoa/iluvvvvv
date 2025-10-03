// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const mainButton = document.getElementById('mainButton');
    const letterSection = document.getElementById('letterSection');
    const continueButton = document.getElementById('continueButton');
    const memoriesSection = document.getElementById('memoriesSection');

    // Create floating hearts function
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.position = 'fixed';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-50px';
        heart.style.zIndex = '9999';
        heart.style.pointerEvents = 'none';
        heart.style.animation = 'float-up 3s ease-in forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }

    // Add float-up animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-up {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Main button click handler
    mainButton.addEventListener('click', function() {
        // Create multiple hearts
        for (let i = 0; i < 15; i++) {
            setTimeout(createHeart, i * 100);
        }

        // Scroll to letter section
        setTimeout(() => {
            letterSection.classList.remove('hidden');
            letterSection.classList.add('opacity-100');
            
            letterSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
        }, 500);
    });

    // Continue button click handler
    continueButton.addEventListener('click', function() {
        // Create hearts
        for (let i = 0; i < 10; i++) {
            setTimeout(createHeart, i * 100);
        }

        // Show memories section
        setTimeout(() => {
            memoriesSection.classList.remove('hidden');
            memoriesSection.classList.add('opacity-100');
            
            memoriesSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
        }, 500);
    });

    // Add click effects to memory cards and open modals
    const memoryCards = document.querySelectorAll('.memory-card');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    const modalClose = document.querySelector('.modal-close');

    memoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Create hearts effect
            for (let i = 0; i < 5; i++) {
                setTimeout(createHeart, i * 50);
            }

            // Get modal content ID
            const modalId = this.getAttribute('data-modal');
            const contentElement = document.getElementById(modalId + '-content');
            
            if (contentElement) {
                // Clone and insert content
                modalContent.innerHTML = contentElement.innerHTML;
                
                // Show modal
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    // Close modal on close button click
    modalClose.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close modal on overlay click
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Create shooting stars randomly
    function createShootingStar() {
        const star = document.createElement('div');
        star.innerHTML = '⭐';
        star.style.position = 'fixed';
        star.style.fontSize = '20px';
        star.style.top = Math.random() * 50 + '%';
        star.style.right = '-50px';
        star.style.zIndex = '5';
        star.style.pointerEvents = 'none';
        star.style.animation = 'shoot 2s linear forwards';
        
        document.body.appendChild(star);
        
        setTimeout(() => {
            star.remove();
        }, 2000);
    }

    // Add shooting star animation
    const shootStyle = document.createElement('style');
    shootStyle.textContent = `
        @keyframes shoot {
            0% {
                transform: translateX(0) translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateX(-100vw) translateY(50vh) rotate(-45deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(shootStyle);

    // Create shooting star every 5-10 seconds
    setInterval(() => {
        if (Math.random() > 0.5) {
            createShootingStar();
        }
    }, 5000);

    // Add sparkle effect on mouse move
    let lastSparkleTime = 0;
    document.addEventListener('mousemove', function(e) {
        const now = Date.now();
        if (now - lastSparkleTime > 200) { // Throttle sparkles
            lastSparkleTime = now;
            
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = e.clientX + 'px';
            sparkle.style.top = e.clientY + 'px';
            sparkle.style.fontSize = '15px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9998';
            sparkle.style.animation = 'sparkle-fade 1s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    });

    // Add sparkle animation
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkle-fade {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: scale(1.2) rotate(180deg);
                opacity: 0.8;
            }
            100% {
                transform: scale(0) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(sparkleStyle);
});