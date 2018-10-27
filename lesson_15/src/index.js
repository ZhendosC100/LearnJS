window.addEventListener('DOMContentLoaded', function() {
    
    'use strict';
    let tabs = require('./src/tabs'),
        timer = require('./src/timer'),
        modal = require('./src/modal'),
        form = require('./src/form'),
        slider = require('./src/slider'),
        calc = require('./src/calc');

    tabs();
    timer();
    modal();
    form();
    slider();
    calc();
});