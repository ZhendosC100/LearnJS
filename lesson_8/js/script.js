window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

        console.log(tab);
        console.log(info);
        console.log(tabContent);
        
    //функция скрывающая табы
    function hideTabContent(a) {
        for( let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);   
        
        //функция показывающая tabContent
        function showTabContent(b) {
            for( let i = b; i < tabContent.length; i++){
                if (tabContent[b].classList.contains('hide')){
                    tabContent[b].classList.remove('hide');
                    tabContent[b].classList.add('show');
            }
                
                }
            }

            //назначение обработчика событий при клике на каждый из табов
            info.addEventListener('click', function(event){
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

    function getTimeRemaining(endtime) {
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
    }

    function setClock(id /*id элемента с которым будет работать*/, endtime/*переменная времени остановки*/){ //функция которая делает верстку таймера динамичной, подставляет  все рассчитываемые значения в верстку
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let tm = getTimeRemaining(endtime);

            hours.textContent = ("0" + tm.hours).slice(-2);
            minutes.textContent = ("0" + tm.minutes).slice(-2);
            seconds.textContent = ("0" + tm.seconds).slice(-2);

          //остановка таймера
          
          if (tm.total <= 0  ) {
              clearInterval(timeInterval);
              document.querySelector('.hours').innerHTML = "00";
              document.querySelector('.minutes').innerHTML = "00";
              document.querySelector('.seconds').innerHTML = "00";
          }
        }
    }

    setClock('timer', deadLine); // в функции указан id элемента ('timer') и переменная  deadLine (в нее задано время/дата остановки)
});