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

    if (marginY >= destination) {
        clearTimeout(scroller);
    }

    window.scroll(0, marginY);
}

$(document).ready(function (e) {
    $("#other-gender").click(function () {
        $("#other").show();
    });
    $("#male-gender").click(function () {
        $("#other").hide();
    });
    $("#female-gender").click(function () {
        $("#other").hide();
    });

    // $('#btnSubmit').click(function (e) {
    //     var isValid = true;
    //     $('input[id="textbox-name"]').each(function () {
    //         if ($.trim($(this).val()) == '') {
    //             isValid = false;
    //             $(this).css({
    //                 "border": "1px solid red",
    //                 "background": "#FFCECE"
    //             });
    //         }
    //         else {
    //             $(this).css({
    //                 "border": "",
    //                 "background": ""
    //             });
    //         }
    //     });
    //     if (isValid == false)
    //         e.preventDefault();
    // });

    $('#btnSubmitBirth').click(function (e) {
        var isValid = true;
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
        if ($.trim(sEmail).length == 0) {
            alert('Please enter valid email address');
            e.preventDefault();
        }
    });

    // /validation for all text box/
    $('#btnSubmit').click(function () {
        var txt = $('#textbox-name');
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

    $('#checkBtn').click(function () {
        var txt = $('#job-title');
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

    $('#checkBtn4').click(function () {
        var txt = $('#report');
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