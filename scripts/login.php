<?php
	if ( isset($_POST['pass']) ) {
		session_start();	
		$pass = $_POST['pass'];
		if($pass==file_get_contents("../data/ap")) { 
			$_SESSION['login']='admin';
			echo 'success';
		} else if ($pass==file_get_contents("../data/up")) {
			$_SESSION['login']='user';
			echo 'success';
		}
	} else {
		echo 'error';
	}
?>