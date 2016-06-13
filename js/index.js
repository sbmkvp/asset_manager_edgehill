$(document).ready(function(){
	$('#cbox').fadeIn('slow');
	$('#password').focus();
	$('#goButton').on('click touchstart',function(){
		$('#password').addClass('wait');
		$('#goButton').hide();

		$.post('./scripts/login.php',{pass:$('#password').val()},function(response){
			if(response=='success') {
				window.location.reload();
			} else {
				$('#password').parent().addClass('has-error');
				$('#inf-wrap').removeClass('alert-info');
				$('#inf-wrap').removeClass('alert-success');
				$('#inf-wrap').addClass('alert-warning');
				$('#inf-text').html('The password seems to be wrong. Please try again. If you have forgotten your password or do not have one contact admin at <a href="mailto:email@gmail.com">email@gmail.com</a> or <a href="tel:+447547979373">+44 75479 79373</a>');
				$('#password').removeClass('wait');
				$('#goButton').show();				
			}
		});
	});
});