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
		<title>Home</title>
		<meta charset = "UTF-8">
		<meta name="mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name = "viewport" content = "width=device-width,height=device-height,initial-scale=1.0,user-scalable=no,user-scalable=0">
		<link href='http://fonts.googleapis.com/css?family=Roboto:300,400' rel='stylesheet' type='text/css'>
		<link rel = "stylesheet" type = "text/css" href = "./lib/bootstrap.css">
		<link rel = "stylesheet" type = "text/css" href = "./css/landing.css">
		<link rel="icon" type="image/png" href="./images/favicon.png">
		<link rel="apple-touch-icon-precomposed" href="./images/favicon.png"/>
		<script type = "text/javascript" src = "./lib/jquery.js"></script>
		<script type = "text/javascript" src = "./lib/bootstrap.js"></script>
		<script type = "text/javascript" src = "./js/landing.js"></script>
	</head>
	<body>
		<nav class = "navbar navbar-inverse navbar-fixed-top" role = "navigation">
			<div class="navbar-header">
				<div class = "navbar-brand hidden-xs"><a href="#"><img src="./images/logo.png" class="navbar-image"></a></div>
				<div class = "navbar-brand brand-center visible-xs"><a href="#"><img src="./images/logo.png" class="navbar-image"></a></div>
			</div>
		</nav>
		<div class="container" style="text-align:center">
			<img src="./images/ehlogo.jpg" style="margin-top:75px;height:150px;"></img>
		</div>
		<div class="container">
			<div class="row" style="margin-top:20px">
				<div class="col-xs-2"></div>
				<a class="col-xs-4 bbox" href="people.php">People</a>
				<a class="col-xs-4 bbox" href="kit.php">Kit</a>
				<div class="col-xs-2"></div>
			</div>
			<div class="row" style="margin-top:10px">
				<div class="col-xs-2"></div>
				<a class="col-xs-4 bbox" href="prayer.php">Prayer</a>
				<a class="col-xs-4 bbox" href="<?php echo(file_get_contents("data/feed")); ?>">Feedback</a>
				<div class="col-xs-2"></div>
			</div>
		</div>
		<div class="container" style="text-align:center">
			<button type="button" id="logout" class="btn btn-warning" style="margin-top:20px" onclick="$.post('./scripts/logout.php',function(){window.location.reload();})">Logout</button>
		</div>
	</body>
</html>