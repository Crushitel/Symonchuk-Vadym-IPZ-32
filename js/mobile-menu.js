(() => {
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
    const body = document.querySelector('body');
    mobileMenuButton.addEventListener('click', () => {
        const expanded = mobileMenuButton.getAttribute("aria-expanded") === "true" || false;
        mobileMenuButton.classList.toggle('is-open');
        mobileMenuButton.setAttribute("aria-expanded", !expanded);
        mobileMenu.classList.toggle('is-open');
        body.classList.toggle("no-scroll");
    });
})();
