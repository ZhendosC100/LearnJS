function Timer() {
    let dt = new Date();
    function hello(i){
        if (i<10) {
      return i="0" + i;
        } else {
            return i;
            }
            
    }
    document.getElementById('demo').innerHTML= (hello(dt.getHours()))+  ":"  + (hello(dt.getMinutes()))+":" + (hello(dt.getSeconds()));
    setTimeout("Timer()",1000);
  
 }
 Timer();










/*function Timer() {
    let dt = new Date(),
    i = dt.getHours(),
    k = dt.getMinutes(),
    j = dt.getSeconds();

function timerDate (){
    /* i = hours;
     k = minutes;
     j = seconds;
    if ( i < 10 ) {
        i = "0" +  i;
    } else {
        return i;
        }
    
        if ( k < 10 ) {
            k = "0" + k;
        } else {
            return k;
            }

    if ( j < 10 ) {
        j = "0" + j;
    } else {
        return j;
        }
}

document.getElementById('demo').innerHTML= timerDate (i) +  ":"  + timerDate (k) +":" + timerDate (j);
setTimeout("Timer()", 1000);
}

Timer();*/


