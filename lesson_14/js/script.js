$(document).ready(function(){


    $('[href="#sheldure"], .main_btna, .main_btn').on('click', function(){
        console.log('Hej');

        $('.overlay').animate(
            {
                opacity: 'toggle'
            }, 3500
        );
        
        $('.modal').slideDown(2000);

    });

    $('.close').on('click', function(){
        $('.overlay').animate(
            {
                opacity: 'toggle'
            }, 1500
        );
        
        $('.modal').slideUp(2500);
    });
});