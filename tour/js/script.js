/**
 плагин маски для номера телефона
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
jQuery(function ($) {
    $('input[name=phone]').focus(function () {
        $(this).val('+380(');
        $(this).mask("+38(999)999-99-99");
    });
    $(document).ready(function () {
        $('input[name=phone]').keypress(function (e) {
            if (!(e.which == 8 || e.which == 44 || e.which == 45 || e.which == 46 || (e.which > 47 && e.which < 58))) return false;
        });
    });
});
// Переключение экранов
function runEffect(hideScreen, showScreen) {

    showScreen.show();
    $('html,body').animate({
        scrollTop: $(showScreen).offset().top}, 1000);
    return false;
}


/*fancy*/
$(document).ready(function () {
    $(".fancy").fancybox({
        padding: 0
    });
});

/*chosen*/
// $(document).ready(function () {
//     $(".chosen-select").chosen();
// });

//Datepicker
$(document).ready(function () {
    ( function( factory ) {
        if ( typeof define === "function" && define.amd ) {

            // AMD. Register as an anonymous module.
            define( [ "../widgets/datepicker" ], factory );
        } else {

            // Browser globals
            factory( jQuery.datepicker );
        }
    }( function( datepicker ) {

        datepicker.regional.ru = {
            closeText: "Закрыть",
            prevText: "&#x3C;Пред",
            nextText: "След&#x3E;",
            currentText: "Сегодня",
            monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
                "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
            monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
                "Июл","Авг","Сен","Окт","Ноя","Дек" ],
            dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
            dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
            dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
            weekHeader: "Нед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: "" };
        datepicker.setDefaults( datepicker.regional.ru );

        return datepicker.regional.ru;

    } ) );
    $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
    $( function() {
        var dateFormat = "dd.mm.yy",
            from = $( "#from" )
                .datepicker({
                    defaultDate: "+1w",
                    changeMonth: true,
                    numberOfMonths: 1,
                    minDate: +0
                })
                .on( "change", function() {
                    to.datepicker( "option", "minDate", getDate( this ) );
                }),
            to = $( "#to" )
                .datepicker({
                    defaultDate: "+1w",
                    changeMonth: true,
                    numberOfMonths: 1
                })
                .on( "change", function() {
                    from.datepicker( "option", "maxDate", getDate( this ) );
                });

        function getDate( element ) {
            var date;
            try {
                date = $.datepicker.parseDate( dateFormat, element.value );
            } catch( error ) {
                date = null;
            }

            return date;
        }
    } );
});

//Рандомайзер
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

//slider
$(document).ready(function () {
    $('#slider').slider({
        range: "value",
        min: 1000,
        max: 50000,
        value: 10000,
        slide: function( event, ui ) {
            $('input[name="budget"]').val( ui.value );
        }
    });
   $('input[name="budget"]').val( $("#slider").slider("value"));

    $('input[name="budget"]').on( "change", function() {
        $("#slider").slider( "value", $(this).val() );
    });

});

//navigation
$(document).ready(function () {
    $('.startQuest, .nextBottomBlock .button, .navigation .steps').click(function () {
        var hideScreen = $(this).closest('.screen');
        var showScreen = hideScreen.next();
        runEffect(hideScreen, showScreen);
        return false;
    });

    $('.navigation .button2').click(function () {
        var hideScreen = $(this).closest('.screen');
        if ($(this).hasClass("prev")){
            var showScreen = hideScreen.prev();
            runEffect(hideScreen, showScreen);
        } else if ($(this).hasClass("next")){
            var showScreen = hideScreen.next();
            runEffect(hideScreen, showScreen);
        }

        return false;
    })
});

//Отмен нажатия по кнопке "назад"
$(document).ready(function () {
    history.pushState(null, null, location.href);
    window.onpopstate = function(event) {
        history.go(1);
    };
});

//Вызов формы заказ звонка
$(document).ready(function () {
    $('.stickerCall').click(function () {
       $(this).hide();
       $('.callWind').show("slow");
    });
    $('.callWind .close').click(function () {
        $('.callWind').hide();
        $('.stickerCall').show("slow");
    });
    $('.stickerWindownum').click(function () {
        $('.stickerCall').hide();
        $('.callWind').show("slow");
    });
    $('.stickerRassr').click(function () {
        $('.stickerCall').hide();
        $('.callWind').show("slow");
    });
    $('#screen6 .consult').click(function () {
        $('.stickerCall').hide();
        $('.callWind').show("slow");
    });
});

/***********************/

//Плюс-Минус
$(document).ready(function () {
    $('body #screen2 .quest ul li .inputBlock .calcButton, body #screen5 .quest .chooseLine .rooms .inputBlock .calcButton').click(function () {
        var inp = $(this).closest('.inputBlock').find('input').val();
        if($(this).hasClass('minus')){
            if(inp<1){
                return false;
            } else{
                $(this).closest('.inputBlock').find('input').val(inp*1 - 1);
            }
        } else if ($(this).hasClass('plus')){
            $(this).closest('.inputBlock').find('input').val(inp*1 + 1);
        }
    });
    $('body #screen2 .quest ul li .inputBlock input, body #screen5 .quest .chooseLine .rooms .inputBlock input').change(function () {
        if($(this).val()<0 || isNaN($(this).val())){
            $(this).val(0);
        }
    });

    //Ночи
    $('body #screen4 .quest .bg .days .inputBlock .calcButton').click(function () {
        var inp = $(this).closest('.inputBlock').find('input').val();
        if($(this).hasClass('minus')){
            if(inp<=1){
                return false;
            } else{
                $(this).closest('.inputBlock').find('input').val(inp*1 - 1);
            }
        } else if ($(this).hasClass('plus')){
            $(this).closest('.inputBlock').find('input').val(inp*1 + 1);
        }
    });
    $('body #screen4 .quest .bg .days .inputBlock input').change(function () {
        if($(this).val()<1 || isNaN($(this).val())){
            $(this).val(1);
        }
    });
});

//Количество звёзд
$(document).ready(function () {
    function checkstars() {
        $('#screen5 .starsLine>div').removeClass('active');
        if($('#screen5 #star1').is(':checked')){
            $('#screen5 .star1').addClass('active');
        } else if ($('#screen5 #star2').is(':checked')){
            $('#screen5 .star1, #screen5 .star2').addClass('active');
        } else if ($('#screen5 #star3').is(':checked')){
            $('#screen5 .star1, #screen5 .star2, #screen5 .star3').addClass('active');
        } else if ($('#screen5 #star4').is(':checked')){
            $('#screen5 .star1, #screen5 .star2, #screen5 .star3, #screen5 .star4').addClass('active');
        } else if ($('#screen5 #star5').is(':checked')){
            $('#screen5 .star1, #screen5 .star2, #screen5 .star3, #screen5 .star4, #screen5 .star5').addClass('active');
        }
    }
    checkstars();
    $('#screen5 .quest .chooseLine .starsLine input').change(function () {
        checkstars();
    });
});

//Активация валюты
$(document).ready(function () {
    function checkValuta() {
        $('body #screen6 .quest .valuta input').closest('label').removeClass('active');
        $('body #screen6 .quest .valuta input').each(function (i,val) {
            if($(val).prop("checked")){
                $(val).closest('label').addClass('active');
            }
        });
    }
    checkValuta();
    $('body #screen6 .quest .valuta label').click(function () {
        checkValuta();
    });
});

//Пока не знаю стоимость
$(document).ready(function () {
    function checkdontknowprice() {
        if($('body #screen6 .quest #dontknowprice').prop("checked")){
            $('body #screen6 #budget').addClass('passive');
            $('body #screen6 .dontknow').addClass('active');
            $('body #screen6 .slider').hide('slow');
        } else {
            $('body #screen6 #budget').removeClass('passive');
            $('body #screen6 .dontknow').removeClass('active');
            $('body #screen6 .slider').show('slow');
        }
    }
    checkdontknowprice();
    $('body #screen6 .quest #dontknowprice').change(function () {
        checkdontknowprice();
    });
});

//Агрегатор
$(document).ready(function () {
    $('#screen6 .next, #screen6 .navigation ul, #screen6 .nextBottomBlock .button').click(function () {
        //Каким составом
        var people = $('#woman').val()*1 + $('#man').val()*1 + $('#child').val()*1 + $('#infant').val()*1;
        $('#screen7 .fullpeopleNum').text(people);

        //Предпочтения
        $('#screen3 input[type="checkbox"]:checked').each(function () {
            $("#screen7 .fullpredp").append($(this).val() + ", ");
        });
        if($("#screen7 .fullpredp").text().length == 0){
            $("#screen7 .fullpredp").text('Неизвестно');
        } else{
            var zap  = $("#screen7 .fullpredp").text().slice(0,-2);
            $("#screen7 .fullpredp").text(zap);
        }

        //Страна для отдыха
        var country = $('#screen3 select[name="country"]').val();
        $('#screen7 .fullcountry').text(country);

        //Количество дней
        var days = $('#screen4 #days').val()*1;
        $('#screen7 .fulldaysNum').text(days);

        //Даты
        var from = $('#screen4 #from').val();
        var to = $('#screen4 #to').val();
        $('#screen7 .fullfromdate').text(from);
        $('#screen7 .fulltodate').text(to);

        //Звёздность отеля
        var stars = $('#screen5 input[name="stars"]:checked').val();
        $('#screen7 .fullstarsNum').text(stars);

        //Количество номеров
        var rooms = $('#screen5 #rooms').val()*1;
        $('#screen7 .fullroomsNum').text(rooms);

        //Питание на отдыхе
        $('#screen5 input[type="checkbox"]:checked').each(function () {
            $("#screen7 .fullMeals").append($(this).val() + ", ");
        });
        if($("#screen7 .fullMeals").text().length == 0){
            $("#screen7 .fullMeals").text('Не выбрано');
        } else{
            var zap  = $("#screen7 .fullMeals").text().slice(0,-2);
            $("#screen7 .fullMeals").text(zap);
        }

        //Бюджет
        if($('#screen6 #dontknowprice').is(':checked')){
            $('#screen7 .fullBudget').text('Не указан');
            $('#screen7 .fullValuta').text('');
        } else {
            //Бюджет
            var budget = $('#screen6 #budget').val()*1;
            $('#screen7 .fullBudget').text(budget);

            //Валюта
            var valuta = $('#screen6 input[name="valuta"]:checked').val();
            $('#screen7 .fullValuta').text(valuta);
        }

    });
});

//Идёт поиск вариантов
$(document).ready(function () {
    $('#screen6 .next, #screen6 .navigation ul, #screen6 .nextBottomBlock .button').click(function () {
        function animateBar(){
            $("#screen7 .quest .progressBar .linebar .bar").animate({
                width: "100%"
            }, 8000,function() {
                $('#screen7 .quest .progressBar .text').text('Готово!')
                runEffect($('#screen7'), $('#screen8'));
            })
        }
        setTimeout(animateBar, 1000);
    });
});

//Отправка форм
$(document).ready(function () {
    $("form").submit(function(e) {
        var ref = $(this).find("required");
        $(ref).each(function(){
            if ( $(this).val() == '' )
            {
                alert("Поле не должно быть пустое!");
                $(this).focus();
                e.preventDefault();
                return false;
            }
        });  return true;
    });
    $('#callForm').submit(function () {
        var but = $(this).find('input[type="submit"]');
        but.prop( 'disabled', true ).val('Отправка...');
        var form = $('#callForm');
        var phone = $('#callForm').find('input[name="phone"]');
        var form_data = form.serialize();

        if (phone.val().length < 10) {
            phone
                .animate({backgroundColor: "#ff0000", opacity: 0.8}, 300)
                .animate({backgroundColor: "#fff", opacity: 1}, 300);
            but.prop( 'disabled', false ).val('Заказать звонок');
        }
        else {
            $.ajax({
                type: "POST",
                url: "send-temp.php",
                data: form_data,
                cache: false,
                success: function () {
                        form.fadeOut(300, function () {
                        form.trigger('reset');
                        $('.callWind .title').hide();
                        $(this).after("<div class='thankYou'>В ближайшее время с Вами свяжется менеджер по туризму.<br> Незабываемого Вам отдыха! :)</div>");
                        dataLayer.push({'event': 'sendGreenForm'}); //зеленая кнопка телефона
                            fbq('track', 'greenCallBack');
                    });
                    setTimeout(function () {
                        $('.callWind').hide();
                        $('.callWind .title').show();
                        $('.stickerCall').show('slow');
                        form.fadeIn(300).siblings('.thankYou').remove();
                        but.prop( 'disabled', false ).val('Заказать звонок');
                    }, 10000);

                }

            });
        }
        return false;
    });

    $('#zvonokForm').submit(function () {
        var but = $(this).find('input[type="submit"]');
        but.prop( 'disabled', true ).val('Отправка...');
        var form = $(this);
        var phone = form.find('input[name="phone"]');
        var form_data = form.serialize();

        if (phone.val().length < 10) {
            phone
                .animate({backgroundColor: "#ff0000", opacity: 0.8}, 300)
                .animate({backgroundColor: "#fff", opacity: 1}, 300);
            but.prop( 'disabled', false ).val('Заказать звонок');
        }

        else {
            $.ajax({
                type: "POST",
                url: "send-temp.php",
                data: form_data,
                cache: false,
                success: function () {
                    form.fadeOut(300, function () {
                        form.trigger('reset');
                        $('.callWind .title').hide();
                        $(this).after("<div class='thankYou'>В ближайшее время с Вами свяжется менеджер по туризму.<br> Незабываемого Вам отдыха! :)</div>");
                       dataLayer.push({'event': 'callBackForm'}); //форма отправки обратного звонка (вверху справа)
                        fbq('track', 'callBack'); //отправка события в фб
                    });
                    setTimeout(function () {
                       form.fadeIn(300).siblings('.thankYou').remove();
                        but.prop( 'disabled', false ).val('Заказать звонок');
                    }, 10000);

                }

            });
        }
        return false;
    });

    $('#kalkulatorForm').submit(function () {
        var but = $(this).find('input[type="submit"]');
        $('#screen10 .phone .alert').hide();
        but.prop( 'disabled', true ).val('Отправка...');
        var form = $('#kalkulatorForm');
        var phone = $('#kalkulatorForm').find('input[name="phone"]');
        var form_data = form.serialize();

        if (phone.val().length < 10) {
            phone
                .animate({backgroundColor: "#ff0000", opacity: 0.8}, 300)
                .animate({backgroundColor: "#fff", opacity: 1}, 300);
            $('#screen8 .alert').show("slow").effect("shake", 500);
            but.prop( 'disabled', false ).val('Подобрать тур');
        }

        else {
            $.ajax({
                type: "POST",
                url: "send-calculator-form.php",
                data: form_data,
                cache: false,
                success: function (response) {
                   // result = $.parseJSON(response);
                        $('#screen1, #screen2, #screen3, #screen4, #screen5, #screen6, #screen7, #screen8').fadeOut(300, function () {
                        form.trigger('reset');
                        $('#thankyou').show();
                        $('.stickerCall').show();
                        dataLayer.push({'event': 'formsend'}); //подбор тура отправка формы
                            fbq('track', 'Lead');
                    });
                }
            });
        }
        return false;
    });
});

//Развернуть все экраны
$(document).ready(function () {
    $('.showAllBlocks').click(function () {
        $('#kalkulator').find('.screen').show();
    });
});