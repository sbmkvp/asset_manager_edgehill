$(document).ready(function(){
	$('#cbox').fadeIn('slow');	
	$.ajax({
		url: './data/prayer.csv',
		dataType: 'text',
		cache: false,
		success: function (data) {
			data = CSVToArray(data);
			var rand = data[Math.floor(Math.random() * data.length)]
			$('#prayer').text(rand[0]);
			$('#source').text("refresh page for next prayer point");	
		}
	});
	$('#logo1').append('<img src="./images/pm.jpg" style="margin-top:20%;width:90%;">');
	$('#logo2').append('<a href="http://www.geero.net/prayermate/" >edgehill also has a PrayerMate feed. Sign up here</a>').css('padding','10px');
});


function CSVToArray( strData, strDelimiter ){
	strDelimiter = (strDelimiter || ",");
	var objPattern = new RegExp( ( "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" + "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" + "([^\\" + strDelimiter + "\\r\\n]*))" ), "gi" );
	var arrData = [[]];
	var arrMatches = null;
	while ( arrMatches = objPattern.exec( strData ) ){
		var strMatchedDelimiter = arrMatches[ 1 ];
		if ( strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter ) {
			arrData.push( [] );
		}
		var strMatchedValue;
		if (arrMatches[ 2 ]){
			strMatchedValue = arrMatches[ 2 ].replace( new RegExp( "\"\"", "g" ), "\"" );
		} else {
			strMatchedValue = arrMatches[ 3 ];
		}
		arrData[ arrData.length - 1 ].push( strMatchedValue );
	}
	return( arrData );
}
