export default function tabs() {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    //функция скрывающая табы
    const hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);

    //функция показывающая tabContent
    const showTabContent = (b) => {
        for (let i = b; i < tabContent.length; i++) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }

        }
    };

    //назначение обработчика событий при клике на каждый из табов
    info.addEventListener('click', (event) => {
        let target = event.target; //делегирование события
        if (target && target.classList.contains('info-header-tab')) { //делегирование события
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

//module.exports = tabs;