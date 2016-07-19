$(document).ready(function(){
	a = new contactList();
	a.getContacts();

	$('#search').on('change keyup paste propertychange',function(e){
		if(e.keyCode==13) {
			$('.navbar-toggle').click()
		}
		var term = $(this).val().toLowerCase();
		for ( i in a.contacts) {
			var name = a.contacts[i].details[1]==undefined ? '':a.contacts[i].details[1].toLowerCase()+' '+a.contacts[i].details[2].toLowerCase();
			var role = a.contacts[i].details[3]==undefined ? '' : CSVToArray(a.contacts[i].details[3].toLowerCase(),":")[0];
			var room = a.contacts[i].details[4]==undefined ? '' : a.contacts[i].details[4].toLowerCase();
			if(name.indexOf(term)>-1 || role.indexOf(term)>-1 || room===term ) {
				a.contacts[i].listView.show();
				selectContact(a.contacts[i].id);
			} else {
				a.contacts[i].listView.hide();
			}
		}
	});
	if(a.contacts[0]!=undefined) { selectContact(a.contacts[0].id) };
	$(".collapse").append($('<datalist id="dlist"></datalist>'));
});

var colorScheme = {
	"Room Group Leader" : "rgb(31, 120, 180)",
	"TaskForce" : "rgb(51, 160, 44)",
	"Leader" : "rgb(177, 89, 40)",
	"Cook" : "rgb(106, 61, 154)",
}

function contact (id,details) {
	var listView = $('<div>');
	listView.addClass('contact');
	return {
		'id' : id,
		'details' : details,
		'listView' : listView,
		draw : function () {
			this.listView.empty();
			this.listView.append(details[1]+' '+details[2]);
			var roles = CSVToArray(details[3],":")[0];
			if(roles.length>1) {
					  this.listView.css("display","table");
					  this.listView.css("width","100%");
			}
			for(i in roles) {
				var orgLabel = $('<span>');
				orgLabel.addClass('badge');
				orgLabel.addClass('pull-right');
				orgLabel.css('font-size','smaller');
				orgLabel.css('font-weight','400');
				if(colorScheme[roles[i]]!=undefined) {
					orgLabel.css('background-color',colorScheme[roles[i]]);
				}
				orgLabel.append(roles[i]);
				this.listView.append(orgLabel);
			}
			this.listView.attr('id',this.id);
			this.listView.on('click touch',function(){
				selectContact($(this).attr('id'));
				if($('#detailedView').css('display')=='none') {
					$('#detailedModal').modal('show');
				}
			});
		}
	}
}

function contactList () {
	var contacts = [];
	return {
		'contacts' : contacts,
		'view' : $('#contactList'),
		addContact : function (contact) {
			this.contacts.push(contact);
			contact.draw();
			this.view.append(contact.listView);
		},
		getContacts : function () {
			var list = this;
			$.ajax({
			    url: './data/people.csv',
			    dataType: 'text',
			    cache: false,
			    beforeSend: function () { },
			    error: function (jqXHR, textStatus, errorThrown) { console.log(errorThrown); },
			    success: function (data) {
			    	data = CSVToArray(data);
					for (i in data) {
						if(i>0) {
							for(j in data[i]) { if(data[i][j]!=undefined){ data[i][j] = data[i][j].trim(); } }
							var c = new contact (data[i][0],data[i]);
							list.addContact(c);
						}
					}
					selectContact(list.contacts[0].id);
					$('#contactList').append('<div style="width:80%;font-size:x-small;color:#888;margin:auto;margin-top:25px;text-align:center"> We keep this info as up to date as possible, but we’re only human… drop a note to <a href="mailto:edgehillventure@gmail.com">edgehillventure@gmail.com</a> if you spot anything wrong.<br><button type="button" id="logout" class="btn btn-warning" style="margin-top:20px">Logout</button></div>');
					$('#logout').on('click touch',function(){
						$.post('./scripts/logout.php',function(){
							window.location.reload();
						});
					})
					datalist = [];
					for(i in list.contacts) { 
						var temp = CSVToArray(list.contacts[i].details[3],":")[0];
						for (j in temp) {
							if (datalist.indexOf(temp[j])<0) { datalist.push(temp[j]); } 
						}
						if (datalist.indexOf(list.contacts[i].details[2])<0) { datalist.push(list.contacts[i].details[2]); } 
						if (datalist.indexOf(list.contacts[i].details[1])<0) { datalist.push(list.contacts[i].details[1]); }
					}
					for(i in datalist) { $('datalist').append($('<option value="'+datalist[i]+'">')); }
			    }
			});
		}
	}
}

function selectContact(id) {
	for(i in a.contacts){
		if(a.contacts[i].id==id) {
			d = a.contacts[i].details;
		}
	}

	$('#photo').css('background-image','url(./photos/people/'+id+'.jpg)');
	$('#fname').text(d[1]);
	$('#lname').text(d[2]);
	$('#title').text(d[3]);
	$('#org').text(d[4]);
	$('#email').html('<a href="mailto:'+d[7]+'">'+d[7]+'</a>');
	$('#work').html('<a href="tel:'+d[5]+'">'+d[5]+'</a>');
	$('#mobile').html('<a href="intent://send/'+d[6]+'#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end">'+d[6]+'</a>');

	$('#photom').css('background-image','url(./photos/people/'+id+'.jpg)');
	$('#fnamem').text(d[1]);
	$('#lnamem').text(d[2]);
	$('#titlem').text(d[3]);
	$('#orgm').text(d[4]);
	console.log(d[7]);
	$('#emailm').html('<a href="mailto:'+d[7]+'">'+d[7].substring(0,12)+(d[7].length>12?'...':'')+'</a>');
	$('#workm').html('<a href="tel:'+d[5]+'">'+d[5]+'</a>');
	$('#mobilem').html('<a href="intent://send/'+d[6]+'#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end">'+d[6]+'</a>')

}

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






















