<?php

$admin_email = 'info@ligatura.by';
$form_subject = 'Новая заявка на сайте - paket.ligatura.by';
$project_name = 'paket.ligatura.by';
$from = 'no-reply@ligatura.by';

$langPack = array(
    'user-name' => 'Имя',
    'user-email' => 'Email',
    'user-phone' => 'Телефон',
    'user-order' => 'Детали заказа',
);

$dataForm = $_POST;
$orderArray = json_decode($_POST['user-order'], true);

if (empty($dataForm['user-name']) or empty($dataForm['user-phone'])) { 
    exit(json_encode(array('status' => 'error', 'msg' => 'Все поля обязательны для заполнения')));
}

$c = true;

foreach ($dataForm as $key => $value) {
    if ($value != "" && $key != "user-order") {
        $message .= "
        " . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>".$langPack[$key]."</b></td>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
        </tr>
        ";
    }
}

$message .="<tr><td style='padding: 10px;'><b>Детали заказа</b></td><td style='padding: 10px;'></td></tr>";

foreach ($orderArray as $key => $value) {
    if ($value != "" && $key != "user-order") {
        $message .= "
        " . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>".$value['name']."</b></td>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'>".$value['value']."</td>
        </tr>
        ";
    }
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text)
{
    return '=?UTF-8?B?' . Base64_encode($text) . '?=';
}


$headers = "MIME-Version: 1.0" . PHP_EOL .
    "Content-Type: text/html; charset=utf-8" . PHP_EOL .
    'From: ' . "admin" . ' <' . $from . '>' . PHP_EOL .
    'Reply-To: ' . $admin_email . '' . PHP_EOL;


if (mail($admin_email, adopt($form_subject), $message, $headers)) {
    exit(json_encode(array('status' => 'send', 'msg' => 'Cообщение успешно отправлено!')));
} else {
    exit(json_encode(array('status' => 'error', 'msg' => 'Не отправлено')));
}
