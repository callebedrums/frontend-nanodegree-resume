

var bio = {
	"name": "Callebe Gomes",
	"role": "Full Stack Web Developer",
	"contacts": {
		"mobile": "55-21-981211108",
		"email": "callebedrums@gmail.com",
		"github": "callebedrums",
		"twitter": "callebe_drums",
		"location": "Rio de Janeiro, Brazil" 
	},
	"welcomeMessage": "Welcome to the AWESOME resume.",
	"skills": ["Javascript", "Python", "AngularJS", "Django"],
	"biopic": "images/fry.jpg",
	"display": function () {
		var name = HTMLheaderName.replace("%data%", this.name),
			role = HTMLheaderRole.replace("%data%", this.role);

		$("#header").prepend(role).prepend(name);

		for(contact in this.contacts) {
			var HTMLcontact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", this.contacts[contact]);
			$("#topContacts").append(HTMLcontact);
			$("#footerContacts").append(HTMLcontact);
		}

		var biopic = HTMLbioPic.replace("%data%", this.biopic),
			welcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(biopic).append(welcomeMsg);

		$("#header").append(HTMLskillsStart);

		for(skill in this.skills) {
			var HTMLskill = HTMLskills.replace("%data%", this.skills[skill]);
			$("#skills").append(HTMLskill);
		}
	}
};

var education = {
	"schools": [
	{
		"name": "Federal University of Rio de Janeiro",
		"location": "Rio de Janeiro",
		"degree": "",
		"majors": "Electronic and Computing Engineering",
		"dates": 2012,
		"url": "http://www.poli.ufrj.br/graduacao_cursos_engenharia_eletronica_computacao.php"
	}
	],
	"onlineCouses": [
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"date": "2015",
		"url": "https://www.udacity.com/course/ud804"
	}
	],
	"display": function () {

	}
};

var work = {
	jobs: [
		{
			"employer": "Radix Engineering and Software",
			"title": "Software Engineer",
			"location": "Rio de Janeiro, Brazil",
			"dates": "2011 - current job",
			"description": "Developing web systems for the employer clients, according to their requirements. C# .net, Oracle, HTML, CSS, Javascript, AngularJs, WCF."
		},
		{
			"employer": "GTA - (Automation and Teleinformatic Group)",
			"title": "Network researcher",
			"location": "Rio de Janeiro, Brazil",
			"dates": "2010",
			"description": "Network researching to develop a network virtualization based on OpenFlow. C, C++, Python, HTML, CSS, Javascript, SVG."
		},
		{
			"employer": "America Tecnologia",
			"title": "Web Developer",
			"location": "Rio de Janeiro, Brazil",
			"dates": "2008 - 2009",
			"description": "Developing web systems for the employer internal process, according to their requirements. PHP, MySql, HTML, CSS, Javascript."
		}
	],
	"isplay": function () {
	}
};

var projects = {
	"projects": [
	{
		"title": "Cashbook.me",
		"dates": "2014 - 2015",
		"description": "personal web project to manage my financial life. It can be accessed by http://cashbook.me.",
		"images": []
	},
	{
		"title": "Sea",
		"dates": "2015",
		"description": "AngularJS REST and ORM Javascript framework. It manage Javascript data models, their relationships and the connections with REST resources. It can be accessed by gitHub on https://github.com/callebedrums/sea",
		"images": []
	}
	],
	"display": function () {}
};

bio.display();
