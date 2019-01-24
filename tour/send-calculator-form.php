<?php
$woman = trim(strip_tags($_POST['woman'])); //количество женщин
$man = trim(strip_tags($_POST['man']));  //количество мужчин
$child = trim(strip_tags($_POST['child'])); //количество детей
$infant = trim(strip_tags($_POST['infant'])); //количество малышей
$wishes = implode(',', $_POST['predp']); // массив Пожелания по отдыху
$dt = date("Y-m-d H:i:s"); // Вывод даты и времени
/*if(!empty($_POST['predp'])) {
    foreach($_POST['predp'] as $check) {
        $wishes .= $check. " ";
    }
}*/
$country = stripslashes($_POST['country']); //Страна
$days = trim(strip_tags($_POST['days'])); // количество дней
$from = trim(strip_tags($_POST['from'])); // дата начала отдыха
$toData = trim(strip_tags($_POST['to'])); // дата окончания отдыха
$moreChoice = implode(',', $_POST['morechoose']); // горящий тур или раннее бронирование
/*if(!empty($_POST['morechoose'])) {
    foreach($_POST['morechoose'] as $check) {
        $moreChoice .= $check. " ";
    }
}*/
$stars =trim(strip_tags($_POST['stars'])); //количество звезд
$rooms = trim(strip_tags($_POST['rooms'])); //количество номеров
$meal = implode(',', $_POST['meal']); //Предпочтения по кузне
/*if(!empty($_POST['meal'])) {
    foreach($_POST['meal'] as $check) {
        $meal .= $check. " ";
    }
}*/
$valuta = stripslashes($_POST['valuta']); //валюта
$budget = trim(strip_tags($_POST['budget'])); //бюджет
$email = trim(strip_tags($_POST['email']));
$komments = trim(strip_tags($_POST['komments']));
$name = trim(strip_tags($_POST['name']));
$phone =  trim(strip_tags($_POST['phone']));
if((isset($phone)&&$_POST['phone']!='')){
    $to = 'info@okmi-exclusive.com.ua';
    $subject = 'Заявка на тур!';
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Дата: '.$dt.'</p>
                        <p>Имя: '.$name.'</p>
                        <p>Телефон: '.$phone.'</p> 
                        <p>Почта: '.$email.'</p>
                        <p>Количество девушек: '.$woman.'</p>
                        <p>Количество мужчин: '.$man.'</p>
                        <p>Количество детей: '.$child.'</p>
                        <p>Количество младенцев: '.$infant.'</p>
                        <p>Тип отдыха: '.$wishes.'</p>
                        <p>Страна отдыха: '.$country.'</p>
                        <p>Количество дней: '.$days.'</p>
                        <p>С: '.$from.'</p>
                        <p>До: '.$toData.'</p>    
                        <p>Горящий тур или нет: '.$moreChoice.'</p> 
                        <p>Количество звезд: '.$stars.'</p>
                        <p>Количество номеров: '.$rooms.'</p>
                        <p>Кухня: '.$meal.'</p>
                        <p>Бюджет: '.$budget.'</p>
                        <p>Валюта: '.$valuta.'</p>
                        <p>Коментарии: '.$komments.'</p>                                          
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Отправитель <info@okmi-exclusive.com.ua>\r\n";
    $response = [];
    if(mail($to, $subject, $message, $headers)){
        $response = ['success'=> true,'name'=>$name,'phone'=>$phone];
    } else {
        $response = ['success'=> false,'message'=>'Что-то пошло не так! Попробуйте отправить сообщение позже !'];
    }
    $response['success'] ? header('HTTP/1.1 200 OK') : header('HTTP/1.1 500 Internal Server Error') ;
    header('Content-Type: application/json');
    echo json_encode($response);
}

$msg = "Oкми подбор туров Заявка"."%0A"."Дата: $dt"."%0A"."Имя: $name"."%0A"."Телефон: $phone"."%0A"."Почта: $email"."%0A"."Количество девушек: $woman"."%0A"."Количество мужчин: $man"."%0A"."Количество детей: $child"."%0A"."Количество младенцев: $infant"."%0A"."Тип отдыха: $wishes"."%0A"."Страна отдыха: $country"."%0A"."Количество дней: $days"."%0A"."С: $from"."%0A"."До: $toData"."%0A"."Горящий тур или нет: $moreChoice"."%0A"."Количество звезд: $stars"."%0A"."Количество номеров: $rooms"."%0A"."Кухня: $meal"."%0A"."Бюджет: $budget"."%0A"."Валюта: $valuta"."%0A"."Коментарии: $komments";
file_get_contents("https://api.telegram.org/bot570437910:AAEwPpGQmtVYaeRsLwiUSVr1crfjdjQ8WY4/sendMessage?chat_id=@okmilead&text=$msg");
