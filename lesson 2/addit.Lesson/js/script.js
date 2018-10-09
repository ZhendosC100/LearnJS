let week = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];

let i = 0;
while(i < week.length){
    console.log(week[i]);
    document.write('<p class="day' + i + '">' + week[i] + '</p>');
    /*document.getElementById('text').innerHTML += week[i] + '<br/>';
    document.getElementById('text').style.fontStyle = "italic";*/
    i++;
};

/*while (i < week.length) {
    document.write('<p class="day' + i + '">' + week[i] + '</p>');
    if (i == 0 || i==6) {
        allDays[i].classList.add('weekend');
    } else if (i == dayToday) {
        allDays[i].classList.add('today');
    }
    i++;
}*/
