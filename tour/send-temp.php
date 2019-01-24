<?php
$name = trim(strip_tags($_POST['name']));
$phone =  trim(strip_tags($_POST['phone']));
$dt = date("Y-m-d H:i:s"); // Вывод даты и времени
if((isset($name)&&$_POST['name']!='')&&(isset($phone)&&$_POST['phone']!='')){
    //$to = 'info@okmi-exclusive.com.ua';
    $to = 'info@okmi-exclusive.com.ua';
    $subject = 'Заявка на тур! Лендинг 2';
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Дата: '.$dt.'</p>
                        <p>Имя: '.$name.'</p>
                        <p>Телефон: '.$phone.'</p>                            
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Отправитель <info@okmi-exclusive.com.ua>\r\n";
    $response = [];
    if(mail($to, $subject, $message, $headers)){
        $response = ['success'=> true,'message'=>'Спасибо за заявку! Мы свяжемся с Вами в ближайшее время !'];
    } else {
        $response = ['success'=> false,'message'=>'Что-то пошло не так! Попробуйте отправить сообщение позже !'];
    }
    $response['success'] ? header('HTTP/1.1 200 OK') : header('HTTP/1.1 500 Internal Server Error') ;
    header('Content-Type: application/json');
    echo json_encode($response);
}
$msg = "Oкми подбор туров Заявка Звонок"."%0A"."Дата: $dt"."%0A"."Имя: $name"."%0A"."Телефон: $phone";
file_get_contents("https://api.telegram.org/bot570437910:AAEwPpGQmtVYaeRsLwiUSVr1crfjdjQ8WY4/sendMessage?chat_id=@okmilead&text=$msg");