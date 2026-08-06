const menuButton = document.querySelector("#mobile-menu");
const navigationMenu = document.querySelector("#primary-navigation");
const navigationLinks = document.querySelectorAll(".navbar__links");

menuButton.addEventListener("click", () => {
    console.log("Boah");
    const menuIsOpen = navigationMenu.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", menuIsOpen);
    menuButton.setAttribute(
        "aria-label",
        menuIsOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigationMenu.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});