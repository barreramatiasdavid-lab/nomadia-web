// Inicializar iconos (si los usás)
lucide.createIcons();

/*=========================================
MENÚ MOBILE
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".menu-overlay");
const menuLinks = document.querySelectorAll(".mobile-menu a");

function openMenu() {

    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    menuToggle.setAttribute("aria-expanded", "true");

}

function closeMenu() {

    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    menuToggle.setAttribute("aria-expanded", "false");

}

menuToggle.addEventListener("click", () => {

    if (mobileMenu.classList.contains("active")) {

        closeMenu();

    } else {

        openMenu();

    }

});

overlay.addEventListener("click", closeMenu);

menuLinks.forEach(link => {

    link.addEventListener("click", closeMenu);

});

/*======================================================
WHATSAPP TOOLTIP
======================================================*/
/*======================================================
WHATSAPP TOOLTIP
======================================================*/

const whatsappButton = document.querySelector(".floating-whatsapp");

if (whatsappButton) {

    function showTooltip() {

        whatsappButton.classList.add("show-tooltip");

        setTimeout(() => {

            if (!whatsappButton.matches(":hover")) {

                whatsappButton.classList.remove("show-tooltip");

            }

        }, 3000);

    }

    setTimeout(showTooltip, 2500);

    setInterval(showTooltip, 10000);

}