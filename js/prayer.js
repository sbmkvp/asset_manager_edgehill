$(document).ready(function(){
	$('#cbox').fadeIn('slow');
	
	$.ajax({
	    url: './data/prayer.json',
	    dataType: 'json',
	    cache: false,

	    beforeSend: function () { },

	    error: function (jqXHR, textStatus, errorThrown) {},

	    success: function (data) {
	    	var rand = data[Math.floor(Math.random() * data.length)]
	    	$('#prayer').text(rand.prayer);
	    	$('#source').text(rand.source);
	    },

	    complete: function () {
	    }
	});

	
});