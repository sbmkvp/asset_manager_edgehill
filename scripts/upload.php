<?php
	session_start();
	if( isset($_SESSION['login']) ) {
		if( $_SESSION['login']=="admin" ) {
			if(isset($_FILES['0'])){
				if($_FILES['0']['error']==0) {
					if($_REQUEST['mode']=='people') {
						move_uploaded_file($_FILES["0"]["tmp_name"],"../data/people.json") or die('failed');
						echo 'success';	
					}
					if($_REQUEST['mode']=='kit') {
						move_uploaded_file($_FILES["0"]["tmp_name"],"../data/kit.json") or die('failed');
						echo 'success';	
					}
					if($_REQUEST['mode']=='prayer') {
						move_uploaded_file($_FILES["0"]["tmp_name"],"../data/prayer.json") or die('failed');
						echo 'success';	
					}
					if($_REQUEST['mode']=='photos') {
						move_uploaded_file($_FILES["0"]["tmp_name"],"../data/photos.zip") or die('failed');
						$zip = new ZipArchive;
						$res = $zip->open('../data/photos.zip');
						$zip->extractTo('../photos/');
  						$zip->close();
  						unlink('../data/photos.zip');
						echo 'success';	
					}

				}				
			}
			if(isset($_REQUEST['pass'])) {	
				if($_REQUEST['mode']=='ap') {
					$file = fopen('../data/ap','w');
					fwrite($file,$_REQUEST['pass']);
					fclose($file);
					echo 'success';	
				}
				if($_REQUEST['mode']=='up') {
					$file = fopen('../data/up','w');
					fwrite($file,$_REQUEST['pass']);
					fclose($file);
					echo 'success';	
				}
			}
		} else {
			echo("Authentication failed");
		}
	} else {
		echo("Authentication failed");
	}
?>