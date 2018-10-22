let btn = document.querySelector('.btn'),
        div = document.querySelector('.demo'),
        go = new Date();
        //div.style.cssText = `height: 100px; width: 150px; position: relative; background: green; font-size: 30px; text-align: center;`;

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
        if( dt.getSeconds() == 00 || dt.getSeconds() == 20 || dt.getSeconds() == 40 ){
          div.style.cssText = `height: 150px; width: 100px; position: relative; background: red; font-size: 20px; text-align: center;`;
          animation();
        } else {
          div.style.cssText = `height: 100px; width: 150px; position: relative; background: green; font-size: 30px; text-align: center;`;
        }
        setTimeout("Timer()",1000);
        
     };

     const animation = () => {
      animate(function(timePassed) {
        div.style.left = timePassed / 5 + 'px';
      }, 3000);
     };

     
     
    btn.addEventListener('click', () => {
        div.style.cssText = `height: 100px; width: 150px; position: relative; background: green; font-size: 30px; text-align: center;`;
        //div.style.cssText = `height: 100px; width: 150px; background: green; font-size: 30px; text-align: center;`;
        Timer();
        animation();
});



  // Рисует функция draw
  // Продолжительность анимации duration
  function animate(draw, duration) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      // определить, сколько прошло времени с начала анимации
      let timePassed = time - start;

      console.log(time, start)
        // возможно небольшое превышение времени, в этом случае зафиксировать конец
      if (timePassed > duration) timePassed = duration;

      // нарисовать состояние анимации в момент timePassed
      draw(timePassed);

      // если время анимации не закончилось - запланировать ещё кадр
      if (timePassed < duration) {
        requestAnimationFrame(animate);
      }

    });
  }