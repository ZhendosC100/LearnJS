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
        ;}
        let timeInterval = setInterval(updateClock, 1000);
    };

    setClock('timer', deadLine); // в функции указан id элемента ('timer') и переменная  deadLine (в нее задано время/дата остановки)

    //Modal


    let body = document.querySelector('body'),
        more = document.querySelector('.more'),
        close = document.querySelector('.popup-close'),
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
        input[0].addEventListener('input', () => {
            input[0].value = input[0].value.replace(/[^0-9+]/ig, '');
        });

        //Прописываем запрос

        form.addEventListener('submit', function(event) {
            
            //отменим стандартное поведение браузера (тут при нажатии на кнопку обновляется страница )
            event.preventDefault();

            //
            form.appendChild(statusMessage);

            //создаем сам запрос чтобы отправить данные на сервер
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader ('Content-type', 'application/x-www-form-urlencoded');

            //request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');//Вариант отправки через JSON

            let formData = new FormData(form);

            //let obj = {};                            //Вариант отправки через JSON
            //formData.forEach(function(value, key) {  //Вариант отправки через JSON
            //    obj[key] = value;                   //Вариант отправки через JSON
            //});
            //let json = JSON.stringify(obj);         //Вариант отправки через JSON
            //request.send(json);                     //Вариант отправки через JSON
            request.send(formData);
            //выводим сообщение для пользователя выше созданной функцией
            request.addEventListener('readystatechange', function(){
                if(request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if(request.readyState === 4 && request.status == 200){
                    statusMessage.innerHTML = message.success;
                } else{
                    statusMessage.innerHTML = message.failure;
                }
            });
            //обнуляем все input

            for(let i = 0; i < input.length; i++){
                input[i].value = '';
            }
        });

        let subForm = document.getElementById('form'),
            subInput = subForm.getElementsByTagName('input');

            //делаем невозможным ввод других символов, кроме указанных
            subInput[1].addEventListener('input', () => {
                subInput[1].value = subInput[1].value.replace(/[^0-9+]/ig, '');
            });
            


        subForm.addEventListener('submit', function(event){
           
            event.preventDefault();
            subForm.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader ('Content-type', 'application/x-www-form-urlencoded');

            let subFormData = new FormData(subForm);
            request.send(subFormData);

            request.addEventListener('readystatechange', function(){
                if(request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if(request.readyState === 4 && request.status == 200){
                    statusMessage.innerHTML = message.success;
                } else{
                    statusMessage.innerHTML = message.failure;
                }
            });

            for(let i = 0; i < subInput.length; i++){
                subInput[i].value = '';
            }

            
        });

});

