
import tabs from './parts/tabs.js';
import calc from './parts/calc.js';
import slider from './parts/slider.js';
import timer from './parts/timer.js';
import modal from'./parts/modal.js';
import form from './parts/form.js';

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
tabs();
timer();
modal();
form();
slider();
calc();
});