<?php
	session_start();
	ini_set("display_errors", "On");
	if( isset($_SESSION['login']) ) {
		if( $_SESSION['login']=="admin" ) {
			if(isset($_FILES['0'])){
				if($_FILES['0']['error']==0) {
					if($_REQUEST['mode']=='people') {
						move_uploaded_file($_FILES["0"]["tmp_name"],"../data/people.csv") or die('failed');
						echo 'success';	
					}
					if($_REQUEST['mode']=='kit') {
						move_uploaded_file($_FILES["0"]["tmp_name"],"../data/kit.csv") or die('failed');
						echo 'success';	
					}
					if($_REQUEST['mode']=='prayer') {
						move_uploaded_file($_FILES["0"]["tmp_name"],"../data/prayer.csv") or die('failed');
						echo 'success';	
					}
					if($_REQUEST['mode']=='photospeople') {
						move_uploaded_file($_FILES["0"]["tmp_name"],"../data/photospeople.zip") or die('failed');
						$zip = new ZipArchive;
						$res = $zip->open('../data/photospeople.zip');
						$zip->extractTo('../photos/people/');
  						$zip->close();
  						unlink('../data/photospeople.zip');
						echo 'success';	
					}
					if($_REQUEST['mode']=='photoskit') {
						move_uploaded_file($_FILES["0"]["tmp_name"],"../data/photoskit.zip") or die('failed');
						$zip = new ZipArchive;
						$res = $zip->open('../data/photoskit.zip');
						$zip->extractTo('../photos/kit/');
  						$zip->close();
  						unlink('../data/photoskit.zip');
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