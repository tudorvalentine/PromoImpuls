$(document).ready(function(){

let number = document.querySelector('.service-description__wrap-number'),
    numberTop = number.getBoundingClientRect().top;

window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > numberTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll); //удаляем прослушку событий т.к дальнейшем не нужна
            $('.service-description__number').css('opacity', '0');
            $('.service-description__number').spincrement({
              thousandSeparator: "",
              duration: 2500
         });
            
    }
});
});