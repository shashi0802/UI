var marginY = 0;
var destination = 0;
var speed = 5;
var scroller = null;

function initScroll(elementId) {

    destination = document.getElementById(elementId).offsetTop;
    scroller = setTimeout(function () {
        initScroll(elementId);
    }, 1);
    marginY = marginY + speed;
    console.log(marginY);
    if (marginY >= destination) {
        clearTimeout(scroller);
    }

    window.scroll(0, marginY);


}

// here is code for scrolling
// $(document).on("scroll", function () {
//     var pageTop = $(document).scrollTop()
//     var pageBottom = pageTop + $(window).height()
//     var tags = $("section")

//     for (var i = 0; i < tags.length; i++) {
//         var tag = tags[i]

//         if ($(tag).position().top < pageBottom) {
//             $(tag).addClass("visible")
//         } else {
//             $(tag).removeClass("visible")
//         }
//     }
// })
// here is code end for scrolling

// $(window).on("load", function () {
//     $(window).scroll(function () {
//         var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//         $(".fade").each(function () {
//             /* Check the location of each desired element */
//             var objectBottom = $(this).offset().top + $(this).outerHeight();

//             /* If the element is completely within bounds of the window, fade it in */
//             if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//                 if ($(this).css("opacity") == 0) { $(this).fadeTo(500, 1); }
//             } else { //object goes out of view (scrolling up)
//                 if ($(this).css("opacity") == 1) { $(this).fadeTo(500, 0); }
//             }
//         });
//     }).scroll(); //invoke scroll-handler on page-load
// });

$(document).ready(function (e) {

    //     $(document).scroll(function () {
    //         var docButton = $(this).scrollTop() + $(this).innerHeight();
    //         $(".fade").each(function () {
    //             var objectBottom = $(this).offsetTop + $(this).outerHeight();

    //             if (objectBottom < docButton) {
    //                 if ($(this).css("opacity") == 0) { $(this).fadeTo(500, 1); }
    //             } else { //object goes out of view (scrolling up)
    //                 if ($(this).css("opacity") == 1) { $(this).fadeTo(500, 0); }
    //             }
    //         });
    //     }).scroll();
    // });

    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 100) {
    //         $(".item2").stop().animate({
    //             opacity: 1
    //         }, 500);
    //     } else {
    //         $(".item2").stop().animate({
    //             opacity: 0
    //         }, 500);
    //     }
    // });

    // $(document).on("scroll", function () {
    //     var pageTop = $(document).scrollTop() + 800;
    //     var tags = $('.wrapper');
    //     for (var i = 0; i < tags.length; i++) {
    //         var tag = tags[i]

    //         if ($(tag).position().top <= pageTop) {
    //             $(tag).addClass("active")
    //             $(tag).siblings().removeClass("active")
    //         }
    //         else {
    //             $(tag).removeClass("active")
    //         }
    //     }
    // });

    $(document).scroll(function() {
        
        if ($(this).scrollTop() > 400) {
            
            $(".notactive").stop().animate({
                opacity: 1
            }, 500);
        } else {
            $(".notactive").stop().animate({
                opacity: 0.4
            }, 500);
        }
    });
    $(document).scroll(function() {
        
        if ($(this).scrollTop() > 400) {
            
            $(".notactive1").stop().animate({
                opacity: 1
            }, 500);
        } else {
            $(".notactive1").stop().animate({
                opacity: 0.4
            }, 500);
        }
    });

    $("#genderbtn").click(function () {
        $("#fourth").fadeIn(6000, function () {
            $(this).css("opacity", 1);
        });
    });



    $("#other-gender").click(function () {
        $("#other").show();
    });
    $("#male-gender").click(function () {
        $("#other").hide();
    });
    $("#female-gender").click(function () {
        $("#other").hide();
    });



    $('#btnSubmitBirth').click(function (e) {
        var isValid = true;
        $("#third").fadeIn(6000, function () {
            $(this).css("opacity", 1);
        });
        $('input[type="date"]').each(function () {
            if ($.trim($(this).val()) == '') {
                isValid = false;
                $(this).css({
                    "border": "1px solid red",
                    "background": "#FFCECE"
                });
            }
            else {
                $(this).css({
                    "border": "",
                    "background": ""
                });
            }
        });
        if (isValid == false)
            e.preventDefault();
    });

    $('#btnValidate').click(function () {
        var sEmail = $('#email').val();
        $("#sixth").fadeIn(6000, function () {
            $(this).css("opacity", 1);
        });
        if ($.trim(sEmail).length == 0) {
            alert('Please enter valid email address');
            e.preventDefault();
        }
    });

    // /validation for all text box/
    $('#btnSubmit').click(function () {
        var txt = $('#textbox-name');
        $("#second").fadeIn(6000, function () {
            $(this).css("opacity", 1);
        });
        if (txt.val() == '') {
            $(txt).css({
                "border": "1px solid red",
                "background": "#FFCECE"
            })

            // alert('Please enter text')
        }
        else {
            $(txt).css({
                "border": "",
                "background": ""
            });
        }
    });

    $("#genderbtn").click(function () {
        $("#fourth").fadeIn(6000, function () {
            $(this).css("opacity", 1);
        });
    });

    $("#expbtn").click(function () {
        $("#fifth").fadeIn(6000, function () {
            $(this).css("opacity", 1);
        });
    });


    $('#checkBtn').click(function () {
        var txt = $('#job-title');
        $("#seventh").fadeIn(6000, function () {
            $(this).css("opacity", 1);
        });
        if (txt.val() == '') {
            $(txt).css({
                "border": "1px solid red",
                "background": "#FFCECE"
            })

            // alert('Please enter text')
        }
        else {
            $(txt).css({
                "border": "",
                "background": ""
            });
        }
    });

    $('#checkBtn2').click(function () {
        var txt = $('#skills');
        $("#eightth").fadeIn(6000, function () {
            $(this).css("opacity", 1);
        });
        if (txt.val() == '') {
            $(txt).css({
                "border": "1px solid red",
                "background": "#FFCECE"
            })
            // alert('Please enter text')
        }
        else {
            $(txt).css({
                "border": "",
                "background": ""
            });
        }
    });

    $('#checkBtn3').click(function () {
        var txt = $('#sports');
        $("#nineth").fadeIn(6000, function () {
            $(this).css("opacity", 1);
        });
        if (txt.val() == '') {
            $(txt).css({
                "border": "1px solid red",
                "background": "#FFCECE"
            })
            // alert('Please enter text')
        }
        else {
            $(txt).css({
                "border": "",
                "background": ""
            });
        }
    });

    $("#keep").click(function () {
        $("#tenth").fadeIn(6000, function () {
            $(this).css("opacity", 1);
        });
    });


    $('#checkBtn4').click(function () {
        var txt = $('#report');
        $("#tenth").fadeIn(6000, function () {
            $(this).css("opacity", 1);
        });
        if (txt.val() == '') {
            $(txt).css({
                "border": "1px solid red",
                "background": "#FFCECE"
            })
            // alert('Please enter text')
        }
        else {
            $(txt).css({
                "border": "",
                "background": ""
            });
        }
    });


});