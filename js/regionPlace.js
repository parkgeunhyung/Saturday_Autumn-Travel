$(function () {
    $("#headerdropdown>button").click(function () {
        $("#headerdropdown .headerbar").slideDown(500);
    })
    $("#headerClose").click(function () {
        $("#headerdropdown .headerbar").slideUp(500);
    })

    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    var top = 0;
    var totalTop = 370 * 4;


    for (var i = 0; i < 4; i++) {
        top += 420;
        var article = $("main section article:nth-of-type(" + (i + 2) + ")");
        article.css("top", top);
    }



    $(window).scroll(function () {
        var windowY = window.scrollY;
        console.log(windowY);
        if (windowY < 300) {
            $("footer button").fadeOut();
        } else if (windowY >= 300) {
            $("footer button").fadeIn().click(function () {
                $(window).scrollTop(0);
            });
        }


    });

//    $('.thumbnail').on('click', function () {
//        var clicked = $(this);
//        var newSelection = clicked.data('big');
//        var $img = $('.primary').css("background-image", "url(" + newSelection + ")");
//        clicked.parent().find('.thumbnail').removeClass('selected');
//        clicked.addClass('selected');
//        $('.primary').empty().append($img.hide().fadeIn('slow'));
//    });
    
    $('img').click(function(){
        console.log("click");
        
    });





}) // end of document ready
