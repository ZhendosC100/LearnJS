window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
        
    //функция скрывающая табы
    const hideTabContent = (a) => {
        for( let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);   
        
        //функция показывающая tabContent
        const showTabContent = (b) => {
            for( let i = b; i < tabContent.length; i++){
                if (tabContent[b].classList.contains('hide')){
                    tabContent[b].classList.remove('hide');
                    tabContent[b].classList.add('show');
            }
                
                }
            };

            //назначение обработчика событий при клике на каждый из табов
            info.addEventListener('click', (event) => {
                let target = event.target;                                      //делегирование события
                if (target && target.classList.contains('info-header-tab')){    //делегирование события
                    for(let i = 0; i < tab.length; i++){
                        if (target == tab[i]){
                            hideTabContent(0);
                            showTabContent(i);
                            break;
                        }
                    }
                }
            });
        
    //Таймер

    let deadLine = '2018-10-22';

    const getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()), //.parse превращает любую дату в мс  и используем для остановки таймера как только t<=0 таймер останавливатеся 
            seconds = Math.floor((t/1000) % 60), //Math.floor() для округления, (t/1000)%60 берем остаток секунд от минуты
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            //hours = Math.floor((t/(1000/60/60)%24),
            //days = Math.floor((t/(1000*60*60*24)));

            return {  //вычленяем значения полностью времени, часов, минут, секунд в массив
                'total' : t,
                'hours' : hours,
                'minutes': minutes,
                'seconds' : seconds
            };
    };

    const setClock = (id /*id элемента с которым будет работать*/, endtime/*переменная времени остановки*/) => { //функция которая делает верстку таймера динамичной, подставляет  все рассчитываемые значения в верстку
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
            

        const updateClock = () => {
            let tm = getTimeRemaining(endtime);

            hours.textContent = (`0${tm.hours}`).slice(-2);
            minutes.textContent = (`0${tm.minutes}`).slice(-2);
            seconds.textContent = (`0${tm.seconds}`).slice(-2); // если поменять "0" + tm.seconds на `0 ${tm.seconds}` , таймер ломается

          //остановка таймера
          
          if (tm.total <= 0  ) {
              clearInterval(timeInterval);
              document.querySelector('.hours').innerHTML = "00";
              document.querySelector('.minutes').innerHTML = "00";
              document.querySelector('.seconds').innerHTML = "00";
          }
        };
        let timeInterval = setInterval(updateClock, 1000);
    };

    setClock('timer', deadLine); // в функции указан id элемента ('timer') и переменная  deadLine (в нее задано время/дата остановки)

    //Modal


    let body = document.querySelector('body'),
        more = document.querySelector('.more'),
        //close = document.querySelector('.popup-close'),
        overlay = document.querySelector('.overlay');

    const modalDisplay = () => {
        overlay.style.display = 'block';
        more.classList.add('more-splash'); //добавляем заранее прописанную в CSS анимацию
        document.body.style.overlay = 'hidden'; //для того, чтобы страница не прокручивалась при открытом модальном окне

    };

    const modalClose = () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overlay = '';// отменяем заморозку прокрутки
    };

    body.addEventListener('click', (e) => {
        let target = e.target;

        if(target.classList.contains('description-btn') || target.classList.contains('more')){
            modalDisplay();             //в данном условии прописали появление модального окна от нажатия либо на любой <div class="description-btn">
        }                               // либо на <button class="more"></button>

        if(target.classList.contains('popup-close')){
            modalClose();
        }
    });


     //Form
     let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    
        let form = document.querySelector('.main-form'),
            input = form.getElementsByTagName('input'),
            statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            

        //делаем невозможным ввод других символов, кроме указанных
                        //const validNum = (i) => {
                         //for (let i=0; i < input.length; i++){
                             //input[i].value = input[i].value.replace(/[^0-9+]/ig, '');
                         //}
                        //};
        input[0].addEventListener('input', () => {
            input[0].value = input[0].value.replace(/[^0-9+]/ig, '');
        });

        //Прописываем запрос

        function sendForm(elem) {
            elem.addEventListener('submit', function(event) {
                event.preventDefault();
                elem.appendChild(statusMessage);
                
                let formData = new FormData(elem);
    
            function postData(data){
    
                return new Promise(function (resolve,reject){
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader ('Content-type', 'application/x-www-form-urlencoded');        
        
                        
                    request.onreadystatechange = function(){
                        if(request.readyState < 4) {
                            resolve();
                        } else if(request.readyState === 4 && request.readyState ==200){
                                resolve();
                        } else{
                               reject();
                         
                        }
                    };
                                            
        
                        request.send(data);
                    
                });
                   
                } // end of function postData
    
                
                //обнуляем все input
            function clearInput(){
                for(let i = 0; i < input.length; i++){
                    input[i].value = '';
                }
            }
    
            postData(formData)
                            .then(() => statusMessage.innerHTML = message.loading)
                            .then(() => statusMessage.innerHTML = message.success)
                            .catch(() => statusMessage.innerHTML = message.failure)
                            .then(clearInput);
                
            });
        }
        sendForm(form);

        let subForm = document.getElementById('form'),
            subInput = subForm.getElementsByTagName('input');

            //делаем невозможным ввод других символов, кроме указанных
            subInput[1].addEventListener('input', () => {
                subInput[1].value = subInput[1].value.replace(/[^0-9+]/ig, '');
            });

            sendForm(subForm);

            //Slider
            let slideIndex = 1, //параметр текущего слайда
                slides = document.querySelectorAll('.slider-item'),
                prev = document.querySelector('.prev'),
                next = document.querySelector('.next'),
                dotsWrap = document.querySelector('.slider-dots'),
                dots = document.querySelectorAll('.dot');
                
            showSlides(slideIndex);
                //функция скрывающая слайды и показывающая нужный слайд
            function showSlides(n) {
                if (n > slides.length){
                    slideIndex = 1;
                }
                if(n < 1) {
                    slideIndex = slides.length;
                }

                slides.forEach((item) => item.style.display = 'none');
                //аналог функции показанной выше
                //for(let i=0; i<slides.lenght; i++){
                    //slides[1].style.display = 'none';
                //}
                    dots.forEach((item) => item.classList.remove('dot-active')); //делает точки не активными (обычного цвета)
                
                    slides[slideIndex -1].style.display = 'block'; //показываем нужный слайд при загрузке (сейчас 1-1=0) т е самый первый
                    dots[slideIndex -1].classList.add('dot-active'); //показываем точки
                } 
            //функция увеличивающая slideIndex
           
            function plusSlides(n){
                showSlides(slideIndex += n);
            }

            //ф-ия определяющая текущий слайд и его устанавливает
            function currentSlide(n){
                showSlides(slideIndex = n);
            }

            prev.addEventListener('click', function(){
                plusSlides(-1);
            });

            next.addEventListener('click', function(){
                plusSlides(1);
            });

            //активируем точки на нажатие
          dotsWrap.addEventListener('click', function(event){
              for (let i = 0; i < dots.length + 1; i++) {
                  if (event.target.classList.contains('dot') && event.target == dots[i-1]){
                      currentSlide(i);
                  }
              }
          });
           
        //calculator
        
        let persons = document.querySelectorAll('.counter-block-input')[0],
            restDays = document.querySelectorAll('.counter-block-input')[1],
            place = document.getElementById('select'),
            totalValue = document.getElementById('total'),
            price = document.getElementById('price'),
            personSum = 0,
            daysSum = 0,
            total = 0;

            totalValue.innerHTML = 0;

                     
            function replace(){
                this.value = this.value.replace(/[^\d]/ig, '');
            }  

            persons.oninput = replace;
            restDays.oninput = replace;

            const totalFunc = () => {
                daysSum = +restDays.value;
                personSum = +persons.value;
                total = (daysSum + personSum)*4000;

                if(restDays.value == '' || persons.value == '' || persons.value == 0 || restDays.value == 0) {
                    totalValue.innerHTML = 0;
                } else {
                    totalValue.innerHTML = total * place.options[place.selectedIndex].value;
                }
            };

            persons.addEventListener('input', totalFunc);
            restDays.addEventListener('input', totalFunc);
            place.addEventListener('change', totalFunc);                       
  
});  


