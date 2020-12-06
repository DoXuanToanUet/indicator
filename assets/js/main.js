$(document).ready(function() {
    /*Scroll to top when arrow up clicked BEGIN*/
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('.ind-scrollTop').fadeIn();
        } else {
            $('.ind-scrollTop').fadeOut();
        }
    });
    $(document).ready(function() {
        $(".ind-scrollTop").click(function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });

    });
    /*Scroll to top when arrow up clicked END*/
    $('.ind-anchor-input').click(function() {
        if ($(this).find('.anchor-down').hasClass("lnr-chevron-down")) {
            $(this).find('.anchor-down').removeClass("lnr-chevron-down").addClass("lnr-chevron-up");
        } else {
            $(this).find('.anchor-down').removeClass("lnr-chevron-up").addClass("lnr-chevron-down");
        }
        $(this).closest(".ind-anchor").find(".ind-anchor-content").slideToggle("slow");

    })


    // Active Tab 
    $("#ind-itemTab ul li ").click(function(e) {
        activeTab(this);
    });

    function activeTab(obj) {
        $("#ind-itemTab ul li").removeClass("active");
        id = $(obj).find("a").attr("data-id");
        $(obj).addClass("active");
        $(".ind-rightmain ").removeClass('active');
        $(id).addClass('active');

    }

    // Display Data visualizations
    var $window = $(window);
    var windowsize = $window.width();
    if (windowsize < 768) {
        $(".ind-itemMobile").css("display", "block")
        $(".ind-itemMobile").click(function() {
            $("#ind-itemTab").toggleClass("activeItem");
        });
        
        text1default = $('.ind-navigation_content .item ul li.active').find("a span").text();
        console.log(text1default);
        text2default = $('.ind-navigation_content .item ul li.active').find("a .sub-text").text();
        $('.ind-showcontent').html(text1default +' '+ text1default)
        $('.ind-navigation_content .item ul li').click(function() {
            text1= $(this).find("a span").text();
            text2= $(this).find("a .sub-text").text();
            $('.ind-showcontent').html(text1 +' '+ text2)
            $("#ind-itemTab").toggleClass("activeItem");
        });

    }

    // Anchor Navigation effect
    $(".ind-anchor-content a").click(function(e) {
        e.preventDefault();
        var elm = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(elm).offset().top
        }, 500);

    })

    // esc on keyboard
    $(document).keydown(function(e) {
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            $(".ind-anchor-content").toggle();
        }
    })

})