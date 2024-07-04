document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    document.addEventListener('click', function (event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle && !menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1024) {
            menu.classList.remove('hidden');
            hamburgerIcon.classList.add('hidden');
            closeIcon.classList.add('hidden');
        } else {
            menu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
});