/* Comportamiento de la página (basado en restaurant.custom.js de la plantilla).
   Usa solo lo que ya trae js/plugins.js, sin servicios externos. */
$(function () {
    // pantalla de carga
    $(window).preloader({
        delay: 500
    });

    // cerrar el menú del celular al elegir una sección
    $('.navbar a.nav-link').on('click', function () {
        $('.navbar-toggler:visible').click();
    });

    // fijar el encabezado al bajar
    $(document).on('scroll', function () {
        if ($(document).scrollTop() > 150) {
            $('.header-transparent').addClass('fixed-top');
        } else {
            $('.header-transparent').removeClass('fixed-top');
        }
    });

    // ampliar las fotos de los fondos de pantalla y de las tortas
    $('.fondos-row').magnificPopup({
        delegate: 'a.vista',
        type: 'image',
        gallery: { enabled: true }
    });
    $('.food-menu-card').magnificPopup({
        delegate: 'a.g-width-100',
        type: 'image',
        gallery: { enabled: true }
    });

    // animaciones al aparecer
    new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true }).init();

    // desplazamiento suave entre secciones
    smoothScroll.init({
        selector: '[data-scroll]',
        speed: 800,
        easing: 'easeInOutCubic',
        offset: 70
    });

    // carrusel de categorías
    $('.carousel-cards').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 }
        }
    });
});
