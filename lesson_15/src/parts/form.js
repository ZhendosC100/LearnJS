export default function form(){
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
        function sendForm(elem) {
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
    
            let formData = new FormData(elem);
    
            function postData(data) {
    
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
                        request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.readyState == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    };
        
                    request.send(data);
    
                });
    
            } // end of function postData
    
                //обнуляем все input
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
    
            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
    
        });
    }
    sendForm(form);
    
    let subForm = document.getElementById('form'),
        subInput = subForm.getElementsByTagName('input');
    
    //делаем невозможным ввод других символов, кроме указанных
    subInput[1].addEventListener('input', () => {
        subInput[1].value = subInput[1].value.replace(/[^0-9+]/ig, '');
    });
    
    sendForm(subForm);

    function closeToClear() {
        statusMessage.innerHTML = "";
    }
    
}

//module.exports = form;
