/*
$(window).scroll(function () {

    wScroll = $(this).scrollTop();

    if(wScroll > $('.searchbox').offset().top) {

        $('#nav').css({
            'background-color': 'white',
            'box-shadow': '10px 0 25px #d3d3d3'
        })
        ;
    }else  if(wScroll < $('.searchbox').offset().top){

        $('#nav').css({
            'background-color': 'rgba(255, 255, 255, 0)',
            'box-shadow': '0 0 0 rgba(255, 255, 255, 0)'
        });

    }
});
*/

$(window).scroll(function () {

    var Scroll_pos = 0;
    var Scroll_begin = 100;

    Scroll_pos = $(this).scrollTop();

    // Turun

    if (Scroll_pos > Scroll_begin) {

        $('#nav').css({

            'background-color': '#fff',
            'box-shadow': '10px 0 15px rgba(67, 67, 67, 0.29)',

        });

        $('#nav a').css({

            'color': '#1d1d1d',

        });

        $('#nav #logo img')
            .attr('src', 'assets/img/Logo_black.png');

        // Naik

    } else if (Scroll_pos < Scroll_begin) {

        $('#nav').css({

            'background-color': 'rgba(238, 238, 238, 0)',
            'box-shadow': '10px 0 15px rgba(67, 67, 67, 0)',

        });

        $('#nav a').css({

            'color': '#fff',

        });

        $('#nav #logo img')
            .attr('src', 'assets/img/Logo.png');

    }
});
