<?php
	session_start();
	if ( isset($_SESSION['login']) ) {
		if($_SESSION['login']=='user') {
			header('location:landing.php');
			exit();
		} else if($_SESSION['login']=='admin') {
			header('location:admin.php');
			exit();
		}
	}	
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Login</title>
		<meta charset = "UTF-8">
		<meta name="mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name = "viewport" content = "width=device-width,height=device-height,initial-scale=1.0,user-scalable=no,user-scalable=0">
		<link href='http://fonts.googleapis.com/css?family=Roboto:300,400' rel='stylesheet' type='text/css'>
		<link rel = "stylesheet" type = "text/css" href = "./lib/bootstrap.css">
		<link rel = "stylesheet" type = "text/css" href = "./css/index.css">
		<script type = "text/javascript" src = "./lib/jquery.js"></script>
		<script type = "text/javascript" src = "./lib/bootstrap.js"></script>
		<script type = "text/javascript" src = "./js/index.js"></script>
	</head>
	<body>
		<nav class = "navbar navbar-inverse navbar-fixed-top" role = "navigation">
			<div class="navbar-header">
				<div class = "navbar-brand hidden-xs"><a href="#"><img src="./images/logo.png" class="navbar-image"></a></div>
				<div class = "navbar-brand brand-center visible-xs"><a href="#"><img src="./images/logo.png" class="navbar-image"></a></div>
			</div>
		</nav>
		<div id="cbox" style="display:none;text-align:center">
			<img src="./images/ehlogo.jpg" style="height:150px;"></img>
			<div class="form-group" id="pwdgroup">
				<div class="input-group">
					<div class="input-group-addon">
						<span class="glyphicon glyphicon-lock"></span>
					</div>
					<input id="password" name="pass" type="password" class="form-control" placeholder="Password">
					<div id="goButton"></div>
				</div>
			</div>
			<div class="alert alert-info" id="inf-wrap" role="alert">
				<div id="inf-text">Please enter your password above. If you have forgotten your password or do not have one contact admin at <a href="mailto:email@gmail.com">email@gmail.com</a> or <a href="tel:+447547979373">+44 75479 79373</a></div>			
			</div>
		</div>
	</body>
</html>