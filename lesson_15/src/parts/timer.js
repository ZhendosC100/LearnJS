export default function timer(){
    let deadLine = '2018-11-22';

    const getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()), //.parse превращает любую дату в мс  и используем для остановки таймера как только t<=0 таймер останавливатеся 
            seconds = Math.floor((t / 1000) % 60), //Math.floor() для округления, (t/1000)%60 берем остаток секунд от минуты
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        //hours = Math.floor((t/(1000/60/60)%24),
        //days = Math.floor((t/(1000*60*60*24)));
    
        return { //вычленяем значения полностью времени, часов, минут, секунд в массив
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };
    
    const setClock = (id /*id элемента с которым будет работать*/ , endtime /*переменная времени остановки*/ ) => { //функция которая делает верстку таймера динамичной, подставляет  все рассчитываемые значения в верстку
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
    
            if (tm.total <= 0) {
                clearInterval(timeInterval);
                document.querySelector('.hours').innerHTML = "00";
                document.querySelector('.minutes').innerHTML = "00";
                document.querySelector('.seconds').innerHTML = "00";
            }
        };
        let timeInterval = setInterval(updateClock, 1000);
    };
    
    setClock('timer', deadLine);
}

//module.exports = timer;
