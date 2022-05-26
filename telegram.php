<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$text = $_POST['text'];
$token = "888421206:AAEiieizbacxgpucaY9aqHHu3fJj-BZO4dc";
$chat_id = "-284940475";


$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$text}","r");

/* MAIL */

$to = 'maxim.demkiv@gmail.com';



$subject = "Новый заказ с сайта Headshot";
$message = $text;

$headers  = "Content-type: text/html; charset=windows-1251 <br>";
$headers .= "From: Заявки с сайта Headshot";

//echo $message;
 mail($to, $subject, $message, $headers);




if ($sendToTelegram) {
  echo true;
} else {
  echo false;
}
?>
