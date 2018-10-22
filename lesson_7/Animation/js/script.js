

    let btn = document.querySelector('.btn'),
        div = document.querySelector('#demo'),
        go = new Date();

    const Timer = () => {
        let dt = new Date();
    
        const hello = (i) => {
            if (i < 10) {
                return i = "0" + i;
            } else {
                return i;
            }
    
        };
        document.getElementById('demo').innerHTML = `${hello(dt.getHours())} : ${hello(dt.getMinutes())} : ${hello(dt.getSeconds())}`;
        setTimeout("Timer()",1000);
        
     };
     //Timer();

    
        const timer = setInterval(() => {
            // вычислить сколько времени прошло с начала анимации
             timePassed = Date.now() - go;
          
            if (timePassed >= 12000) {
              clearInterval(timer); // конец через 2 секунды
              return;
            }
          
            // рисует состояние анимации, соответствующее времени timePassed
            draw(timePassed);
          
          }, 20);
          
          // в то время как timePassed идёт от 0 до 2000
          // left принимает значения от 0 до 400px
          const draw = (timePassed) => {
            div.style.left = timePassed / 5 + 'px';
          };
    
     
     
    btn.addEventListener('click', () => {
        //div.style.cssText = `height: 100px; width: 150px; background: green; font-size: 30px; text-align: center;`;
        Timer();
        draw(timePassed);
     });




