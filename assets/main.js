
        const menuBtn = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileDropBtn = document.getElementById('mobile-dropdown-btn');
        const mobileDropContent = document.getElementById('mobile-dropdown-content');

        menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        
        mobileDropBtn.addEventListener('click', () => {
            mobileDropContent.classList.toggle('hidden');
        });

        // Fermeture automatique du menu mobile lors du clic sur un lien
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
        // Animation simple lors de l'apparition à l'écran
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target); // On anime une seule fois
        }
    });
}, observerOptions);

// Cible la section à animer
document.querySelectorAll('#a-propos').forEach(el => {
    observer.observe(el);
});
    