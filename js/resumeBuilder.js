

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
		console.log("printing bio");

		var name = HTMLheaderName.replace("%data%", this.name),
			role = HTMLheaderRole.replace("%data%", this.role);

		$("#header").prepend([name, role, internationalizeButton]);

		for(contact in this.contacts) {
			var HTMLcontact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", this.contacts[contact]);
			$("#topContacts").append(HTMLcontact);
			$("#footerContacts").append(HTMLcontact);
		}

		var biopic = HTMLbioPic.replace("%data%", this.biopic),
			welcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append([biopic, welcomeMsg]);

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
		"degree": "BC",
		"majors": ["Electronic and Computing Engineering"],
		"dates": 2012,
		"url": "http://www.poli.ufrj.br/graduacao_cursos_engenharia_eletronica_computacao.php"
	}
	],
	"onlineCourses": [
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/ud804"
	}
	],
	"display": function () {
		console.log("printing education");

		for(school in this.schools) {
			$("#education").append(HTMLschoolStart);

			var name = HTMLschoolName.replace("%data%", this.schools[school].name),
				degree = HTMLschoolDegree.replace("%data%", this.schools[school].degree),
				dates = HTMLschoolDates.replace("%data%", this.schools[school].dates),
				_location = HTMLschoolLocation.replace("%data%", this.schools[school].location),
				major = HTMLschoolMajor.replace("%data%", this.schools[school].majors.join(" - "));

			$(".education-entry:last").append([name + degree, dates, _location, major]);
		}

		$("#education").append(HTMLonlineClasses);

		for(onlineCourse in this.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var title = HTMLonlineTitle.replace("%data%", this.onlineCourses[onlineCourse].title),
				school = HTMLonlineSchool.replace("%data%", this.onlineCourses[onlineCourse].school),
				dates = HTMLonlineDates.replace("%data%", this.onlineCourses[onlineCourse].date),
				url = HTMLonlineURL.replace("%data%", this.onlineCourses[onlineCourse].url);

			$(".education-entry:last").append([title + school, dates, url]);
		}

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
	"display": function () {
		console.log("printing work");

		for(job in this.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var employer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer),
				title = HTMLworkTitle.replace("%data%", this.jobs[job].title),
				dates = HTMLworkDates.replace("%data%", this.jobs[job].dates),
				description = HTMLworkDescription.replace("%data%", this.jobs[job].description);

			$(".work-entry:last").append([employer + title, dates, description]);
		}
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
	"display": function () {
		console.log("printing projects");

		for(project in this.projects) {
			$("#projects").append(HTMLprojectStart);
			var title = HTMLprojectTitle.replace("%data%", this.projects[project].title),
				dates = HTMLprojectDates.replace("%data%", this.projects[project].dates),
				description = HTMLprojectDescription.replace("%data%", this.projects[project].description),
				images = this.projects[project].images;

			$(".project-entry:last").append([title, dates, description]);

			for(img in images) {
				var image = HTMLprojectImage.replace("%data%", images[img]);
				$(".project-entry:last").append(image);
			}
		}
	}
};

var inName = function () {
	var names = bio.name.split(" ");
	names[0] = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
	names[1] = names[1].toUpperCase();

	return names.join(" ");
};

$.each([bio, education, work, projects], function (index, obj) {
	obj.display();
});

$("#mapDiv").append(googleMap);
