
$(document).ready(function ($) {
    console.log("this file loads")
    $(window).scroll(function(){
        console.log("scrolling")
    })

    /*attempt at navbar*/
    $(window).scroll(function()
    {
        if($(this).scrollTop() > 500) {
            $('.navbar').addClass('solid');
            console.log("not at the top")
        }  else 
            {
            $('.navbar').removeClass('solid');
            console.log("at the top.")
            }
        });
    });

jQuery(document).ready(function ($) {


    console.log("A starter template created by Eleven Fifty Academy under MIT Licensing.");

    // Initialize wowjs 
    new WOW().init();

    /*-------------------
    MAGNIFICO STARTER - 
    Code from a starter example by the creator. 
    https://codepen.io/dimsemenov/pen/hutrb
    -------------------*/
    $('.with-caption').magnificPopup({
        type: 'image',
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',

        image: {
            verticalFit: true,
            titleSrc: function (item) {
                //More could be done here......
                //Also doesn't fit so good on iPad.
                var caption = item.el.attr('title');
                return caption;
            }
        },

        //This will let us click through images eventually....
        gallery: {
            enabled: true
        },
    });
});