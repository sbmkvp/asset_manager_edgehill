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

// other colors, rgb(179, 179, 179), rgb(247, 129, 191)

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

function contact (email,details) {

	var listView = $('<div>');
	listView.addClass('contact');
	return {
		'email' : email,
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
			this.listView.on('click',function(){
				selectContact($(this).attr('email'));
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
			    url: './data/kit.json',
			    dataType: 'json',
			    cache: false,

			    beforeSend: function () {
			        console.log("Loading");
			    },

			    error: function (jqXHR, textStatus, errorThrown) {
			        console.log(jqXHR);
			        console.log(textStatus);
			        console.log(errorThrown);
			    },

			    success: function (data) {
			        console.log('Success');
			        console.log(data);
					for (i in data) {
						var c = new contact (data[i].email,data[i]);
						list.addContact(c);
					}
					selectContact(list.contacts[0].email);
					$('#contactList').append('<div style="width:80%;font-size:x-small;color:#888;margin:auto;margin-top:25px;text-align:center">If there are any inaccurate or outdated information in this database please contact Ed Watson at <a href="mailto:email@org.com">email@org.com</a><br><button type="button" id="logout" class="btn btn-warning" style="margin-top:20px">Logout</button></div>');
					$('#logout').on('click touch',function(){
						$.post('./scripts/logout.php',function(){
							window.location.reload();
						});
					})
			    },

			    complete: function () {
			        console.log('Finished all tasks');
			    }
			});
		}
	}
}

function selectContact(email) {
	for(i in a.contacts){
		if(a.contacts[i].email==email) {
			d = a.contacts[i].details;
			d.email = a.contacts[i].email;
		}
	}

	// $('#photo').css('background-image','url(../imageserver/people/'+email+'.png)');
	$('#fname').text(d.firstname);
	$('#lname').text(d.lastname);
	$('#title').text(d.title!=undefined?d.title:"not-available");
	$('#org').text(d.organisation!=undefined?d.organisation:"not-available");
	$('#email').html(d.quant+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
	$('#work').html(d.work);
	$('#mobile').html(d.mobile)

	// $('#photom').css('background-image','url(../imageserver/people/'+email+'.png)');
	$('#fnamem').text(d.firstname);
	$('#lnamem').text(d.lastname);
	$('#titlem').text(d.title!=undefined?d.title:"not-available");
	$('#orgm').text(d.organisation!=undefined?d.organisation:"not-available");
	$('#emailm').html(d.quant+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
	$('#workm').html(d.work);
	$('#mobilem').html(d.mobile)
}

























