document.addEventListener('DOMContentLoaded', function () {
    // Swiper para la sección de credenciales
    var credencialesSwiper = new Swiper('.swiper-container:not(.clientes-swiper)', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2000, // 2000 milisegundos = 2 segundos
            disableOnInteraction: false, // Permite que el autoplay continúe después de la interacción del usuario
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
        loop: true, // Opcional, para que el carrusel sea infinito
    });

    // Swiper para la sección de clientes
    var clientesSwiper = new Swiper('.clientes-swiper', {
        slidesPerView: 1, // Mostrar uno por uno
        spaceBetween: 30,
        pagination: {
            el: '.clientes-swiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.clientes-swiper .swiper-button-next',
            prevEl: '.clientes-swiper .swiper-button-prev',
        },
        autoplay: {
            delay: 2000, // 2000 milisegundos = 2 segundos
            disableOnInteraction: false, // Permite que el autoplay continúe después de la interacción del usuario
        },
        loop: true, // Opcional, para que el carrusel sea infinito
    });
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.text-content').classList.add('fade-in');
    }, 1000); // 1000 milisegundos = 1 segundo
});