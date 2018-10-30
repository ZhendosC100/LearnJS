/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/tabs.js */ "./parts/tabs.js");
/* harmony import */ var _parts_calc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/calc.js */ "./parts/calc.js");
/* harmony import */ var _parts_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/slider.js */ "./parts/slider.js");
/* harmony import */ var _parts_timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/timer.js */ "./parts/timer.js");
/* harmony import */ var _parts_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/form.js */ "./parts/form.js");





window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  Object(_parts_tabs_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_parts_timer_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_parts_form_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_parts_slider_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_parts_calc_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./parts/calc.js":
/*!***********************!*\
  !*** ./parts/calc.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calc; });
function calc() {
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;

  function replace() {
    this.value = this.value.replace(/[^\d]/ig, '');
  }

  persons.oninput = replace;
  restDays.oninput = replace;

  var totalFunc = function totalFunc() {
    daysSum = +restDays.value;
    personSum = +persons.value;
    total = daysSum * personSum * 4000;

    if (restDays.value == '' || persons.value == '' || persons.value == 0 || restDays.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total * place.options[place.selectedIndex].value;
    }
  };

  persons.addEventListener('input', totalFunc);
  restDays.addEventListener('input', totalFunc);
  place.addEventListener('change', totalFunc);
} //module.exports = calc;

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return form; });
function form() {
  //modal
  var body = document.querySelector('body'),
      more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  var modalDisplay = function modalDisplay() {
    overlay.style.display = 'block';
    more.classList.add('more-splash'); //добавляем заранее прописанную в CSS анимацию

    document.body.style.overlay = 'hidden'; //для того, чтобы страница не прокручивалась при открытом модальном окне
  };

  var modalClose = function modalClose() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overlay = ''; // отменяем заморозку прокрутки

    statusMessage.innerHTML = "";
  };

  body.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('description-btn') || target.classList.contains('more')) {
      modalDisplay(); //в данном условии прописали появление модального окна от нажатия либо на любой <div class="description-btn">
    } // либо на <button class="more"></button>


    if (target.classList.contains('popup-close')) {
      modalClose();
    }
  }); //form

  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с Вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  var form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input'); //statusMessage = document.createElement('div');
  //statusMessage.classList.add('status');
  //делаем невозможным ввод других символов, кроме указанных

  input[0].addEventListener('input', function () {
    input[0].value = input[0].value.replace(/[^0-9+]/ig, '');
  }); //Прописываем запрос

  function sendForm(elem) {
    elem.addEventListener('submit', function (event) {
      event.preventDefault();
      elem.appendChild(statusMessage);
      var formData = new FormData(elem);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
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
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData(formData).then(function () {
        return statusMessage.innerHTML = message.loading;
      }).then(function () {
        return statusMessage.innerHTML = message.success;
      }).catch(function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInput);
    });
  }

  sendForm(form);
  var subForm = document.getElementById('form'),
      subInput = subForm.getElementsByTagName('input'),
      subInp = subInput[1],
      sbInp = subInput[0]; //делаем невозможным ввод других символов, кроме указанных

  subInp.addEventListener('input', function () {
    subInp.value = subInp.value.replace(/[^0-9+]/ig, '');
  });
  sendForm(subForm);

  function onInputClear() {
    statusMessage.innerHTML = "";
  }

  sbInp.oninput = onInputClear;
  subInp.oninput = onInputClear;
} //module.exports = form;

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slider; });
function slider() {
  var slideIndex = 1,
      //параметр текущего слайда
  slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex); //функция скрывающая слайды и показывающая нужный слайд

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    }); //делает точки не активными (обычного цвета)

    slides[slideIndex - 1].style.display = 'block'; //показываем нужный слайд при загрузке (сейчас 1-1=0) т е самый первый

    dots[slideIndex - 1].classList.add('dot-active'); //показываем точки
  } //функция увеличивающая slideIndex


  function plusSlides(n) {
    showSlides(slideIndex += n);
  } //ф-ия определяющая текущий слайд и его устанавливает


  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  }); //активируем точки на нажатие

  dotsWrap.addEventListener('click', function (event) {
    for (var i = 1; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
} //module.exports = slider;

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tabs; });
function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent'); //функция скрывающая табы

  var hideTabContent = function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1); //функция показывающая tabContent

  var showTabContent = function showTabContent(b) {
    for (var i = b; i < tabContent.length; i++) {
      if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
      }
    }
  }; //назначение обработчика событий при клике на каждый из табов


  info.addEventListener('click', function (event) {
    var target = event.target; //делегирование события

    if (target && target.classList.contains('info-header-tab')) {
      //делегирование события
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
} //module.exports = tabs;

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return timer; });
function timer() {
  var deadLine = '2018-11-22';

  var getTimeRemaining = function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        //.parse превращает любую дату в мс  и используем для остановки таймера как только t<=0 таймер останавливатеся 
    seconds = Math.floor(t / 1000 % 60),
        //Math.floor() для округления, (t/1000)%60 берем остаток секунд от минуты
    minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60)); //hours = Math.floor((t/(1000/60/60)%24),
    //days = Math.floor((t/(1000*60*60*24)));

    return {
      //вычленяем значения полностью времени, часов, минут, секунд в массив
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  var setClock = function setClock(id
  /*id элемента с которым будет работать*/
  , endtime
  /*переменная времени остановки*/
  ) {
    //функция которая делает верстку таймера динамичной, подставляет  все рассчитываемые значения в верстку
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    var updateClock = function updateClock() {
      var tm = getTimeRemaining(endtime);
      hours.textContent = "0".concat(tm.hours).slice(-2);
      minutes.textContent = "0".concat(tm.minutes).slice(-2);
      seconds.textContent = "0".concat(tm.seconds).slice(-2); // если поменять "0" + tm.seconds на `0 ${tm.seconds}` , таймер ломается
      //остановка таймера

      if (tm.total <= 0) {
        clearInterval(timeInterval);
        document.querySelector('.hours').innerHTML = "00";
        document.querySelector('.minutes').innerHTML = "00";
        document.querySelector('.seconds').innerHTML = "00";
      }
    };

    var timeInterval = setInterval(updateClock, 1000);
  };

  setClock('timer', deadLine);
} //module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map