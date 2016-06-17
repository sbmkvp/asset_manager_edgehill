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
		<title>edgehill 2016</title>
		<meta charset = "UTF-8">
		<meta name="mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name = "viewport" content = "width=device-width,height=device-height,initial-scale=1.0,user-scalable=no,user-scalable=0">
		<link rel="icon" type="image/png" href="./images/favicon.png">
		<link rel="apple-touch-icon-precomposed" href="./images/favicon.png"/>
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
				<div id="inf-text">Please enter your password above. If you have forgotten your password or do not have one contact admin at <a href="mailto:edgehillventure@gmail.com">edgehillventure@gmail.com</a> or <a href="tel:07400906360">07400906360</a></div>			
			</div>
			<script> (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-79522253-1', 'auto'); ga('send', 'pageview'); </script>
		</div>
	</body>
</html>