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
	<title>Kit</title>
	<meta charset = "UTF-8">
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name = "viewport" content = "width=device-width,height=device-height,initial-scale=1.0,user-scalable=no,user-scalable=0">
	<link href='http://fonts.googleapis.com/css?family=Roboto:300,400' rel='stylesheet' type='text/css'>
	<link rel = "stylesheet" type = "text/css" href = "./lib/bootstrap.css">
	<link rel = "stylesheet" type = "text/css" href = "./css/kit.css">
	<link rel="icon" type="image/png" href="./images/favicon.png">
	<link rel="apple-touch-icon-precomposed" href="./images/favicon.png"/>
	<script type = "text/javascript" src = "./lib/jquery.js"></script>
	<script type = "text/javascript" src = "./lib/bootstrap.js"></script>
	<script type = "text/javascript" src = "./js/kit.js"></script>
<body>
	<nav class = "navbar navbar-inverse navbar-fixed-top" role = "navigation">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" style="color:#fff"><span class="glyphicon glyphicon-search"></span></button>
			<div class = "navbar-brand hidden-xs"><a href="landing.php"><img src="./images/logo.png" class="navbar-image"></a><span style="line-height:22px">Kit</span></div>
			<div class = "navbar-brand brand-center visible-xs"><a href="landing.php"><img src="./images/logo.png" class="navbar-image"></a><span style="line-height:22px">Kit</span></div>
		</div>
		<div class="collapse navbar-collapse">
			<div class="navbar-form navbar-right"><div class="form-group"><input id="search" type="text" list = "dlist" class="form-control" placeholder="Search" style="margin-right:10px;"></div></div>
		</div>
	</nav>
	<div class="container">
		<div id="overallContainer" class="row">
			<div id="contactList" class="col-sm-5"></div>
			<div id="detailedView" class="col-sm-7 hidden-xs">
				<div class="row">
					<div class="col-md-3"></div>
					<div class="col-md-6">
						<div id="photo"></div>
						<div id="fname"></div>
						<div id="lname"></div>
						<div id="title" style="margin-top:20px;"></div>
						<div id="org"></div>
					</div>
					<div class="col-md-3"></div>
				</div>
				<div class="row">
					<div class="col-md-2"></div>
					<div class="col-md-8">
						<table class="table" style="margin-top:20px;">
							<tbody>
								<tr><td style="text-align:right"><span class="btn btn-default">Quantity &nbsp<span class="glyphicon glyphicon-stats"></span></span></td><td id="email"></td></tr>
								<tr><td style="text-align:right"><span class="btn btn-default">Condition &nbsp<span class="glyphicon glyphicon-ok"></span></span></td><td id="work"></td></tr>
								<tr><td style="text-align:right;border-bottom: 1px solid #ddd;"><span class="btn btn-default">Used for &nbsp<span class="glyphicon glyphicon-cog"></span></span></td><td style="border-bottom: 1px solid #ddd;" id="mobile"></td></tr>
							</tbody>
						</table>
					</div>
					<div class="col-md-2"></div>
				</div>
			</div>
		</div>		
	</div>
	<div class="modal fade" id="detailedModal" tabindex="-1" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-body">
					<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
					<div id="photom"></div>
					<div id="fnamem"></div>
					<div id="lnamem"></div>
					<div id="titlem" style="margin-top:10px;"></div>
					<div id="orgm"></div>
					<table class="table" style="margin-top:10px;">
						<tbody>
							<tr><td style="text-align:right"><span class="btn btn-default">Quantity &nbsp<span class="glyphicon glyphicon-stats"></span></span></td><td id="emailm"></td></tr>
							<tr><td style="text-align:right"><span class="btn btn-default">Condition &nbsp<span class="glyphicon glyphicon-ok"></span></span></td><td id="workm"></td></tr>
							<tr><td style="text-align:right;border-bottom: 1px solid #ddd;"><span class="btn btn-default">Used for &nbsp<span class="glyphicon glyphicon-cog"></span></span></td><td style="border-bottom: 1px solid #ddd;" id="mobilem"></td></tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>			
</body>
</html>