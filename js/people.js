$(document).ready(function(){
	a = new contactList();
	a.getContacts();

	$('#search').on('keyup paste propertychange',function(){
		var term = $(this).val().toLowerCase();
		for ( i in a.contacts) {
			var name = a.contacts[i].details.firstname.toLowerCase()+' '+a.contacts[i].details.lastname.toLowerCase();
			name = name==undefined ? '' : name;
			var title = a.contacts[i].details.title==undefined ? '' : a.contacts[i].details.title.toLowerCase();
			var org = a.contacts[i].details.organisation==undefined ? '' : a.contacts[i].details.organisation.toLowerCase();
			if(name.indexOf(term)>-1 || title===term || org===term ) {
				a.contacts[i].listView.show();
				selectContact(a.contacts[i].email);
			} else {
				a.contacts[i].listView.hide();
			}
		}
	});

	if(a.contacts!=undefined) { selectContact(a.contacts[0].email) };
});

// other colors, rgb(166, 206, 227), rgb(178, 223, 138), rgb(227, 26, 28), rgb(253, 191, 111), rgb(255, 127, 0), rgb(152, 78, 163), rgb(179, 179, 179), rgb(251, 154, 153), rgb(202, 178, 214), rgb(247, 129, 191)

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
		'email' : details.email,
		'details' : details,
		'listView' : listView,
		getDetail : function (key) {
			return this.details[key];
		},
		addDetail : function (object) {
			var keys = Object.keys(object);
			for (i in keys) {
				this.details[keys[i]] = object[keys[i]];
			}
		},
		draw : function () {
			this.listView.empty();
			this.listView.append(details.firstname+' '+details.lastname);
			var orgLabel = $('<span>');
			orgLabel.addClass('badge');
			orgLabel.addClass('pull-right');
			orgLabel.css('font-size','smaller');
			orgLabel.css('font-weight','400');
			if(colorScheme[details.title]!=undefined) {
				orgLabel.css('background-color',colorScheme[details.title]);
			}
			orgLabel.append(details.title.slice(0,20));
			this.listView.append(orgLabel);
			this.listView.attr('email',this.email);
			this.listView.attr('idd',this.id);
			this.listView.on('click',function(){
				selectContact($(this).attr('idd'));
				if($('#detailedView').css('display')=='none') {
					$('#detailedModal').modal('show');
				}
			});
		},
		setDetail: function(key,value) {
			this.details[key] = value;
			this.draw();
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
			    url: './data/people.json',
			    dataType: 'json',
			    cache: false,
			    beforeSend: function () { },
			    error: function (jqXHR, textStatus, errorThrown) { },
			    success: function (data) {
					for (i in data) {
						var c = new contact (data[i].id,data[i]);
						list.addContact(c);
					}
					selectContact(list.contacts[0].id);
					$('#contactList').append('<div style="width:80%;font-size:x-small;color:#888;margin:auto;margin-top:25px;text-align:center">If there are any inaccurate or outdated information in this database please contact Ed Watson at <a href="mailto:email@org.com">email@org.com</a><br><button type="button" id="logout" class="btn btn-warning" style="margin-top:20px">Logout</button></div>');
					$('#logout').on('click touch',function(){
						$.post('./scripts/logout.php',function(){
							window.location.reload();
						});
					})
			    },
			    complete: function () { }
			});
		}
	}
}

function selectContact(id) {
	console.log(id);
	for(i in a.contacts){
		if(a.contacts[i].id==id) {
			d = a.contacts[i].details;
			d.email = a.contacts[i].email;
		}
	}

	$('#photo').css('background-image','url(./photos/'+id+'.jpg)');
	$('#fname').text(d.firstname);
	$('#lname').text(d.lastname);
	$('#title').text(d.title!=undefined?d.title:"not-available");
	$('#org').text(d.organisation!=undefined?d.organisation:"not-available");
	$('#email').html('<a href="mailto:'+d.email+'">'+d.email+'</a>');
	$('#work').html(d.work!=undefined?'<a href="tel:'+d.work+'">'+d.work+'</a>':"not-available");
	$('#mobile').html(d.mobile!=undefined?'<a href="tel:'+d.mobile+'">'+d.mobile+'</a>':"not-available")

	$('#photom').css('background-image','url(./photos/'+id+'.jpg)');
	$('#fnamem').text(d.firstname);
	$('#lnamem').text(d.lastname);
	$('#titlem').text(d.title!=undefined?d.title:"not-available");
	$('#orgm').text(d.organisation!=undefined?d.organisation:"not-available");
	$('#emailm').html('<a href="mailto:'+d.email+'">'+d.email+'</a>');
	$('#workm').html(d.work!=undefined?'<a href="tel:'+d.work+'">'+d.work+'</a>':"not-available");
	$('#mobilem').html(d.mobile!=undefined?'<a href="tel:'+d.mobile+'">'+d.mobile+'</a>':"not-available")

}

























