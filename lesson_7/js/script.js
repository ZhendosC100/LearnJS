/*window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let infoHeader = document.querySelector('.info-header'),
        info = document.querySelector('.info'),
        tabHeadContent = 
});*/









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
                let target = event.target;
                if (target && target.classList.contains('info-header-tab')){
                    for(let i = 0; i < tab.length; i++){
                        if (target == tab[i]){
                            hideTabContent(0);
                            showTabContent(i);
                            break;
                        }
                    }
                }
            });
});