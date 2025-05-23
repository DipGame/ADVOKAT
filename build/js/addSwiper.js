document.addEventListener("DOMContentLoaded", function () {


    let swiperMainDetail = new Swiper(".swiperMainDetail", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        speed: 500,
        effect: "slide",
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiperMainDetail_container .sw-btn_next",
            prevEl: ".swiperMainDetail_container .sw-btn_prev",
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            720: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1441: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });

    let swiperMainBlog = new Swiper(".swiperMainBlog", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        speed: 500,
        effect: "slide",
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiperMainBlog_container .sw-btn_next",
            prevEl: ".swiperMainBlog_container .sw-btn_prev",
        },
        breakpoints: {
            721: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            961: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });
    let swiperBlogDetail = new Swiper(".swiperBlogDetail", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        speed: 500,
        effect: "slide",
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiperBlogDetail_container .sw-btn_next",
            prevEl: ".swiperBlogDetail_container .sw-btn_prev",
        },
        pagination: {
            el: ".swiperBlogDetail_container .swiper-pagination",
            clickable: true,
        },
    });

    if (document.querySelector('.admin')) {
        console.log('addSwiper.js finish work');
    }

});