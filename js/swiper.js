var swiper = new Swiper('.swiper-container-love1', {
    pagination: '.swiper-pagination-love1',
    paginationClickable: true,
    spaceBetween: 30,
});

var swiper = new Swiper('.swiper-container-love2', {
    pagination: '.swiper-pagination-love2',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

var swiper = new Swiper('.swiper-container-love3', {
    pagination: '.swiper-pagination-love3',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next-love3',
    prevButton: '.swiper-button-prev-love3'
});