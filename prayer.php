<?php
	session_start();
	if (isset($_SESSION['login']) ) { } else {
		header('location:index.php');
		exit();
	}
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Prayer</title>
		<meta charset = "UTF-8">
		<meta name="mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name = "viewport" content = "width=device-width,height=device-height,initial-scale=1.0,user-scalable=no,user-scalable=0">
		<link href='http://fonts.googleapis.com/css?family=Roboto:300,400' rel='stylesheet' type='text/css'>
		<link rel = "stylesheet" type = "text/css" href = "./lib/bootstrap.css">
		<link rel = "stylesheet" type = "text/css" href = "./css/prayer.css">
		<link rel="icon" type="image/png" href="./images/favicon.png">
		<link rel="apple-touch-icon-precomposed" href="./images/favicon.png"/>
		<script type = "text/javascript" src = "./lib/jquery.js"></script>
		<script type = "text/javascript" src = "./lib/bootstrap.js"></script>
		<script type = "text/javascript" src = "./js/prayer.js"></script>
	</head>
	<body>
		<nav class = "navbar navbar-inverse navbar-fixed-top" role = "navigation">
			<div class="navbar-header">
				<div class = "navbar-brand hidden-xs"><a href="landing.php"><img src="./images/logo.png" class="navbar-image"></a>edgehill prayer</div>
				<div class = "navbar-brand brand-center visible-xs"><a href="landing.php"><img src="./images/logo.png" class="navbar-image"></a>edgehill prayer</div>
			</div>
		</nav>
		<div id="cbox" style="display:none">
			<div id="prayer"></div>
			<div id="source"></div>
			<div id="logo1"></div>
			<div id="logo2"></div>
		</div>
		<script> (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-79522253-1', 'auto'); ga('send', 'pageview'); </script>
	</body>
</html>
