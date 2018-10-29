export default function slider(){
    let slideIndex = 1, //параметр текущего слайда
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

showSlides(slideIndex);
//функция скрывающая слайды и показывающая нужный слайд
function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active')); //делает точки не активными (обычного цвета)

    slides[slideIndex - 1].style.display = 'block'; //показываем нужный слайд при загрузке (сейчас 1-1=0) т е самый первый
    dots[slideIndex - 1].classList.add('dot-active'); //показываем точки
}
//функция увеличивающая slideIndex

function plusSlides(n) {
    showSlides(slideIndex += n);
}

//ф-ия определяющая текущий слайд и его устанавливает
function currentSlide(n) {
    showSlides(slideIndex = n);
}

prev.addEventListener('click', function () {
    plusSlides(-1);
});

next.addEventListener('click', function () {
    plusSlides(1);
});

//активируем точки на нажатие
dotsWrap.addEventListener('click', function (event) {
    for (let i = 1; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
});
}

//module.exports = slider;