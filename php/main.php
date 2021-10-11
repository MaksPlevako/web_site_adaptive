<?php 
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$to = 'maksplevako@gmail.com';
	$from = $email;
	$subdject = 'Заявка з сайта';

	$msg='
	Name: '.$name.
	' Email: '.$email.
	' Message: '.$message;

	if (mail($to, $subdject, $msg, $from)) {
		header('Location: ../index.html');
	}
	else {
		echo 'bad';
	};

 ?>