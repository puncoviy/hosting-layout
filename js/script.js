$(function(){


    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }]
    });


})


const menuBtn = document.getElementById('burgerMenu');
const menu = document.getElementById('menu');
const div = document.querySelector('.burger__center');
const shader = document.querySelector('.shader')

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    div.classList.toggle('active');
    menu.classList.toggle('active');
    shader.classList.toggle('active');
})

shader.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    div.classList.toggle('active');
    menu.classList.toggle('active');
    shader.classList.toggle('active');
})