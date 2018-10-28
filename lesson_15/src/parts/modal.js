function modal(){
    let body = document.querySelector('body'),
    more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay');

const modalDisplay = () => {
    overlay.style.display = 'block';
    more.classList.add('more-splash'); //добавляем заранее прописанную в CSS анимацию
    document.body.style.overlay = 'hidden'; //для того, чтобы страница не прокручивалась при открытом модальном окне

};

const modalClose = () => {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overlay = ''; // отменяем заморозку прокрутки
};

body.addEventListener('click', (e) => {
    let target = e.target;

    if (target.classList.contains('description-btn') || target.classList.contains('more')) {
        modalDisplay(); //в данном условии прописали появление модального окна от нажатия либо на любой <div class="description-btn">
    } // либо на <button class="more"></button>

    if (target.classList.contains('popup-close')) {
        modalClose();
    }
});
}

module.exports = modal;
