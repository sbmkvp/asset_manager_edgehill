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
				success: function(e, textStatus, jqXHR) { $('#cbox').append('<div class="alert alert-success" style="margin-top:10px;display:none" role="alert">Done!</div>'); $('.alert').fadeIn(500) ;setTimeout(function(){$('.alert').fadeOut(500,function(){$('.alert').remove()});},2000); },
				error: function(jqXHR, textStatus, errorThrown){  }
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
				success: function(e, textStatus, jqXHR) { $('#cbox').append('<div class="alert alert-success" style="margin-top:10px;display:none" role="alert">Done!</div>'); $('.alert').fadeIn(500) ;setTimeout(function(){$('.alert').fadeOut(500,function(){$('.alert').remove()});},2000); },
				error: function(jqXHR, textStatus, errorThrown){  }
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
				success: function(e, textStatus, jqXHR) { $('#cbox').append('<div class="alert alert-success" style="margin-top:10px;display:none" role="alert">Done!</div>'); $('.alert').fadeIn(500) ;setTimeout(function(){$('.alert').fadeOut(500,function(){$('.alert').remove()});},2000); },
				error: function(jqXHR, textStatus, errorThrown){  }
			});
        }
    });
	$('#photospeo').on('change', function(event) {
        if (this.value!=='') {
        	files = event.target.files
			data1 = new FormData();
			$.each(files, function(key, value)
			{
				data1.append(key, value);
			});
			$.ajax({
				url: './scripts/upload.php?mode=photospeople&files',
				type: 'POST',
				data: data1,
				processData: false,
				contentType: false,
				cache:false,
				success: function(e, textStatus, jqXHR) { $('#cbox').append('<div class="alert alert-success" style="margin-top:10px;display:none" role="alert">Done!</div>'); $('.alert').fadeIn(500) ;setTimeout(function(){$('.alert').fadeOut(500,function(){$('.alert').remove()});},2000); },
				error: function(jqXHR, textStatus, errorThrown){  }
			});
        }
    });
	$('#photoskit').on('change', function(event) {
        if (this.value!=='') {
        	files = event.target.files
			data1 = new FormData();
			$.each(files, function(key, value)
			{
				data1.append(key, value);
			});
			$.ajax({
				url: './scripts/upload.php?mode=photoskit&files',
				type: 'POST',
				data: data1,
				processData: false,
				contentType: false,
				cache:false,
				success: function(e, textStatus, jqXHR) { $('#cbox').append('<div class="alert alert-success" style="margin-top:10px;display:none" role="alert">Done!</div>'); $('.alert').fadeIn(500) ;setTimeout(function(){$('.alert').fadeOut(500,function(){$('.alert').remove()});},2000); },
				error: function(jqXHR, textStatus, errorThrown){  }
			});
        }
    });
	$('#feed').on('keyup', function(event) {
		var feed = this;
        if(event.keyCode == 13 && $(feed).val()!=''){
			$.ajax({
				url: './scripts/upload.php?mode=feed&pass='+this.value,
				type: 'POST',
				data: {},
				processData: false,
				contentType: false,
				cache:false,
				success: function(e, textStatus, jqXHR) { $(feed).attr('placeholder','Changed!').val(''); },
				error: function(jqXHR, textStatus, errorThrown){ console.log(errorThrown); }
			});
        }
    });
	$('#fa').on('keyup', function(event) {
		var feed = this;
        if(event.keyCode == 13 && $(fa).val()!=''){
			$.ajax({
				url: './scripts/upload.php?mode=fa&pass='+this.value,
				type: 'POST',
				data: {},
				processData: false,
				contentType: false,
				cache:false,
				success: function(e, textStatus, jqXHR) { $(fa).attr('placeholder','Changed!').val(''); },
				error: function(jqXHR, textStatus, errorThrown){ console.log(errorThrown); }
			});
        }
    });
	$('#up').on('keyup', function(event) {
		var up = this;
        if(event.keyCode == 13 && $(up).val()!=''){
			$.ajax({
				url: './scripts/upload.php?mode=up&pass='+this.value,
				type: 'POST',
				data: {},
				processData: false,
				contentType: false,
				cache:false,
				success: function(e, textStatus, jqXHR) { $(up).attr('placeholder','Changed!').val(''); },
				error: function(jqXHR, textStatus, errorThrown){ }
			});
        }
    });
	$('#ap').on('keyup', function(event) {
		var ap = this;
        if(event.keyCode == 13 && $(ap).val()!=''){
			$.ajax({
				url: './scripts/upload.php?mode=ap&pass='+this.value,
				type: 'POST',
				data: {},
				processData: false,
				contentType: false,
				cache:false,
				success: function(e, textStatus, jqXHR) { $(ap).attr('placeholder','Changed!').val(''); },
				error: function(jqXHR, textStatus, errorThrown){ }
			});
        }
    });
	$('#feedgo').on('click touchend', function(event) {
		var feed = this;
        if($('#feed').val()!=''){
			$.ajax({
				url: './scripts/upload.php?mode=feed&pass='+$('#feed').val(),
				type: 'POST',
				data: {},
				processData: false,
				contentType: false,
				cache:false,
				success: function(e, textStatus, jqXHR) { $("#feed").attr('placeholder','Changed!').val(''); },
				error: function(jqXHR, textStatus, errorThrown){ console.log(errorThrown); }
			});
        }
    });  
	$('#fago').on('click touchend', function(event) {
		var feed = this;
        if($('#fa').val()!=''){
			$.ajax({
				url: './scripts/upload.php?mode=fa&pass='+$('#fa').val(),
				type: 'POST',
				data: {},
				processData: false,
				contentType: false,
				cache:false,
				success: function(e, textStatus, jqXHR) { $("#fa").attr('placeholder','Changed!').val(''); },
				error: function(jqXHR, textStatus, errorThrown){ console.log(errorThrown); }
			});
        }
    });    
	$('#upgo').on('click touchend', function(event) {
		var up = $('#up');
		$.ajax({
			url: './scripts/upload.php?mode=up&pass='+up.val(),
			type: 'POST',
			data: {},
			processData: false,
			contentType: false,
			cache:false,
			success: function(e, textStatus, jqXHR) { up.attr('placeholder','Changed!').val(''); },
			error: function(jqXHR, textStatus, errorThrown){ }
		});
    });
	$('#apgo').on('click touchend', function(event) {
		var ap = $('#ap');
		$.ajax({
			url: './scripts/upload.php?mode=ap&pass='+ap.val(),
			type: 'POST',
			data: {},
			processData: false,
			contentType: false,
			cache:false,
			success: function(e, textStatus, jqXHR) { ap.attr('placeholder','Changed!').val(''); },
			error: function(jqXHR, textStatus, errorThrown){ }
		});
    });
});