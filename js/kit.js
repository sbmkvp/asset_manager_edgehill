$(document).ready(function(){
	a = new contactList();
	a.getContacts();

	$('#search').on('change keyup paste propertychange',function(e){
		if(e.keyCode==13) {
			$('.navbar-toggle').click()
		}
		var term = $(this).val().toLowerCase();
		for ( i in a.contacts) {
			var name = a.contacts[i].details[1]==undefined ? '' : a.contacts[i].details[1].toLowerCase();
			var category = a.contacts[i].details[2]==undefined ? '' : a.contacts[i].details[2].toLowerCase();
			if(name.indexOf(term)>-1 || category===term ) {
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
	"Sports and Games"	: "rgb(031, 120, 180)",
	"Crafts"			: "rgb(051, 160, 044)",
	"Teaching"			: "rgb(177, 089, 040)",
	"Admin"				: "rgb(106, 061, 154)",
	"Music"				: "rgb(166, 206, 227)",
	"Medical"			: "rgb(178, 223, 138)",
	"Bookshop"			: "rgb(227, 026, 028)",
	"Other"				: "rgb(253, 191, 111)",
	"Cleaning"			: "rgb(255, 127, 000)",
	"Catering "			: "rgb(152, 078, 163)",
	"General"			: "rgb(251, 154, 153)",
	"Maintenance"		: "rgb(202, 178, 214)",
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
			this.listView.append(details[1]);
			var orgLabel = $('<span>');
			orgLabel.addClass('badge');
			orgLabel.addClass('pull-right');
			orgLabel.css('font-size','smaller');
			orgLabel.css('font-weight','400');
			if(colorScheme[details[2]]!=undefined) {
				orgLabel.css('background-color',colorScheme[details[2]]);
			}
			orgLabel.append(details[2]);
			this.listView.append(orgLabel);
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
			    url: './data/kit.csv',
			    dataType: 'text',
			    cache: false,
			    success: function (data) {
			    	data = CSVToArray(data);
					for (i in data) {
						if( i!=0 ) {
							var c = new contact (data[i][0],data[i]);
							list.addContact(c);
						}
					}
					selectContact(list.contacts[0].id);
					$('#contactList').append('<div style="width:80%;font-size:x-small;color:#888;margin:auto;margin-top:25px;text-align:center">If there are any inaccurate or outdated information in this database please contact <a href="mailto:edgehillventure@gmail.com">edgehillventure@gmail.com</a><br><button type="button" id="logout" class="btn btn-warning" style="margin-top:20px">Logout</button></div>');
					$('#logout').on('click touch',function(){
						$.post('./scripts/logout.php',function(){
							window.location.reload();
						});
					})
					datalist = [];
					for(i in list.contacts) { 
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

	$('#photo').css('background-image','url(./photos/kit/'+id+'.jpg)');
	$('#fname').text(d[1]);
	$('#lname').text('');
	$('#title').text(d[2]);
	$('#org').text(d[3]);
	$('#email').html(d[4]+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
	$('#work').html(d[5]);
	$('#mobile').html(d[6])

	$('#photom').css('background-image','url(./photos/kit/'+id+'.jpg)');
	$('#fnamem').text(d[1]);
	$('#lnamem').text('');
	$('#titlem').text(d[2]);
	$('#orgm').text(d[3]);
	$('#emailm').html(d[4]+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
	$('#workm').html(d[5]);
	$('#mobilem').html(d[6]);
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

