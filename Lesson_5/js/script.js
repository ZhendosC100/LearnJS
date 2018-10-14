let m_item = document.getElementsByClassName('menu-item');
//console.log(m_item[2]);

let menu = document.querySelector('.menu'),
    //five = m_item[3],
    second = m_item[2],
    third = m_item[1];

menu.insertBefore(second, third);

//Tworzymy piąty punkt 

let li = document.createElement('li');
    li.classList.add('menu-item');
    menu.appendChild(li);
    m_item[4].innerHTML = "Пятый пункт";

//Zmieniamy tło body

            //Первый способ
let body = document.getElementsByTagName('body');
//console.log(body);
body[0].style.background = 'url(../img/apple_true.jpg) center no-repeat';
body[0].style.backgroundSize = 'cover';

            //Второй способ
//document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';
//document.body.style.backgroundSize = 'cover';

//Zmieniamy text

let title = document.getElementById('title');
//console.log(title);
title.innerHTML = 'Мы продаем только <p>подлинную</p> технику Apple';

//Wycinamy reklamę

let column = document.querySelectorAll('.column'),
    one = column[1],
    adv = document.querySelectorAll('.adv');
//console.log(adv[0]);

one.removeChild(adv[0]);

//Pytamy o sprzętach Apple

for( let i = 0; i <1 ; i++ ) {
    let answ = prompt('Ваше отношение к технике Apple: ', '');
    if( ( typeof(answ) ) === 'string' && answ != null && answ != '' ) {
        document.getElementById('prompt').innerHTML = answ;
    } else {
        alert('Просьба ответить на вопрос');
        i--;
    }
}