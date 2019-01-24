/*jQuery(document).ready(function($) {
    $("#zvonokForm").submit(
        function () {
            sendForm('zvonokForm', 'send-temp.php');
            return false;
        }
    );

    function sendForm(ajax_form, url) {
        $.ajax({
            url: url, //url страницы (action_ajax_form.php)
            type: "POST", //метод отправки
            dataType: "html", //формат данных
            data: $("#" + ajax_form).serialize(),  // Сеарилизуем объект
            success: function (response) { //Данные отправлены успешно
                var result = $.parseJSON(response);

              $('#answer-header').text(result.message);
              $("#zvonokForm")[0].reset();
            },
            error: function (response) {
                // Данные не отправлены
                var result = $.parseJSON(response.responseText);
                alert(result.message);
                $("#zvonokForm")[0].reset();
            }
        });
    };
});
*/
