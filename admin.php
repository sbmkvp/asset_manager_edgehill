<?php
	session_start();
	if (isset($_SESSION['login']) ) { 
		if($_SESSION['login']=='admin') {

		} else {
			header('location:index.php');
			exit();
		}
	} else {
		header('location:index.php');
		exit();
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
		<link rel = "stylesheet" type = "text/css" href = "./css/admin.css">
		<script type = "text/javascript" src = "./lib/jquery.js"></script>
		<script type = "text/javascript" src = "./lib/bootstrap.js"></script>
		<script type = "text/javascript" src = "./js/admin.js"></script>
	</head>
	<body>
		<nav class = "navbar navbar-inverse navbar-fixed-top" role = "navigation">
			<div class="navbar-header">
				<div class = "navbar-brand hidden-xs"><a href="#"><img src="./images/logo.png" class="navbar-image"></a></div>
				<div class = "navbar-brand brand-center visible-xs"><a href="#"><img src="./images/logo.png" class="navbar-image"></a></div>
			</div>
		</nav>
		<div id="cbox" style="display:none;text-align:center">
			<form class="form-group" id="peoplegroup">
				<div class="input-group">
					<div class="input-group-addon">
						<span class="glyphicon glyphicon-user"></span>
					</div>
					<input id="people" name="people" type="file" class="form-control">
				</div>
			</form>
			<form class="form-group" id="kitgroup">
				<div class="input-group">
					<div class="input-group-addon">
						<span class="glyphicon glyphicon-tags"></span>
					</div>
					<input id="kit" name="kit" type="file" class="form-control">
				</div>
			</form>
			<form class="form-group" id="prayergroup">
				<div class="input-group">
					<div class="input-group-addon">
						<span class="glyphicon glyphicon-heart"></span>
					</div>
					<input id="prayer" name="prayer" type="file" class="form-control">
				</div>
			</form>
			<div class="form-group input-group">
				<div class="input-group-addon">
					<span class="glyphicon glyphicon-lock"></span>
				</div>
				<input id="up" name="up" type="text" class="form-control" placeholder="user password">
			</div>
			<div class="input-group">
				<div class="input-group-addon">
					<span class="glyphicon glyphicon-cog"></span>
				</div>
				<input id="ap" name="ap" type="text" class="form-control" placeholder="user password">
			</div>
			<button type="button" id="logout" class="btn btn-warning" style="margin-top:10px" onclick="$.post('./scripts/logout.php',function(){window.location.reload();})">Logout</button>
		</div>
	</body>
</html>