$(document).ready(function(){
	$('#cbox').fadeIn('slow');
	$('#people').on('change', function(event) {
        if (this.value!=='') {
        	files = event.target.files
			data1 = new FormData();
			$.each(files, function(key, value)
			{
				data1.append(key, value);
			});
			$.ajax({
				url: './scripts/upload.php?mode=people&files',
				type: 'POST',
				data: data1,
				processData: false,
				contentType: false,
				cache:false,
				success: function(e, textStatus, jqXHR) {
					console.log(e);
					console.log(textStatus);
					console.log(jqXHR);
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.log(errorThrown);
					console.log(textStatus);
					console.log(jqXHR);
				}
			});
        }
    });
	$('#kit').on('change', function(event) {
        if (this.value!=='') {
        	files = event.target.files
			data1 = new FormData();
			$.each(files, function(key, value)
			{
				data1.append(key, value);
			});
			$.ajax({
				url: './scripts/upload.php?mode=kit&files',
				type: 'POST',
				data: data1,
				processData: false,
				contentType: false,
				cache:false,
				success: function(e, textStatus, jqXHR) {
					console.log(e);
					console.log(textStatus);
					console.log(jqXHR);
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.log(errorThrown);
					console.log(textStatus);
					console.log(jqXHR);
				}
			});
        }
    });
	$('#prayer').on('change', function(event) {
        if (this.value!=='') {
        	files = event.target.files
			data1 = new FormData();
			$.each(files, function(key, value)
			{
				data1.append(key, value);
			});
			$.ajax({
				url: './scripts/upload.php?mode=prayer&files',
				type: 'POST',
				data: data1,
				processData: false,
				contentType: false,
				cache:false,
				success: function(e, textStatus, jqXHR) {
					console.log(e);
					console.log(textStatus);
					console.log(jqXHR);
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.log(errorThrown);
					console.log(textStatus);
					console.log(jqXHR);
				}
			});
        }
    });
	$('#up').on('keyup', function(event) {
        if(event.keyCode == 13){
			$.ajax({
				url: './scripts/upload.php?mode=up&pass='+this.value,
				type: 'POST',
				data: {},
				processData: false,
				contentType: false,
				cache:false,
				success: function(e, textStatus, jqXHR) {
					console.log(e);
					console.log(textStatus);
					console.log(jqXHR);
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.log(errorThrown);
					console.log(textStatus);
					console.log(jqXHR);
				}
			});
        }
    });
	$('#ap').on('keyup', function(event) {
        if(event.keyCode == 13){
			$.ajax({
				url: './scripts/upload.php?mode=ap&pass='+this.value,
				type: 'POST',
				data: {},
				processData: false,
				contentType: false,
				cache:false,
				success: function(e, textStatus, jqXHR) {
					console.log(e);
					console.log(textStatus);
					console.log(jqXHR);
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.log(errorThrown);
					console.log(textStatus);
					console.log(jqXHR);
				}
			});
        }
    });
});