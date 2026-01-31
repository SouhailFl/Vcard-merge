// Initialize Lucide icons
lucide.createIcons();

// Loading screen
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').classList.add('hidden');
    }, 1800);
});