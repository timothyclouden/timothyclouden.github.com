document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle the navigation menu on/off
    function toggleMenu() {
        var nav = document.querySelector('nav');
        nav.style.display = (nav.style.display === 'block' || nav.style.display === '') ? 'none' : 'block';
    }

    // Event listener for the hamburger menu icon
    var hamburgerIcon = document.querySelector('.hamburger-menu');
    hamburgerIcon.addEventListener('click', toggleMenu);
});
