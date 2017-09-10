/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
	"name": "Yukun Chen",
	"role": "Software Developer",
	"contacts": {
		"email": "ychen152@ucr.edu",
		"github": "yukun1992",
		"location": "Riverside, CA, USA"
	},
	"picture": "images/fry.jpg",
	"skills": ["Java", "C", "Python", "HTML/CSS", "JavaSprict", "Android Development", "Web Development"]
};




var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);


var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);


if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}





var work = {
	"jobs" : [{
		"employer" : "Shanghai INESA Scientific Instrument Co",
		"title" : "Intership",
		"location" : "Shanghai, China",
		"datesWorked": "September 2014 - Dec 2014",
		"description" : " Tested electrical chemistry devices, recorded bugs for devices and wrote instructions for customers"
	}]
};




function display() {
	if(work.jobs.length > 0) {
	$("#workExperience").append(HTMLworkStart);

	for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}

}

display();


var projects = {
	"projects": [
		{
			"title": "Memory Game",
			"datesWorked": "2/2017 - 3/2017",
			"description": "The Memory Game Project is a browser-based card matching game (also known as Concentration)",
			"images": ["images/game.jpg"],
			"url" : "https://yukun1992.github.io/fend-project-memory-game/"
		},
		{
			"title": "Neighborhood Map",
			"datesWorked": "2/2017 - 3/2017",
			"description": "Single-page, responsive application built with Knockout.js framework and hosted on GitHub Pages",
			"images": ["images/neighbor.png"],
			"url" : "https://yukun1992.github.io/Neighborhood-Map/"
		},
		{
			"title": "Item Catalog",
			"datesWorked": "2/2017 - 3/2017",
			"description": "Developed a web application with log in post and delete news functions using the Python framework Flask",
			"url" : "https://github.com/yukun1992/Item-Catalog"
		},
		{
			"title": "Mini News App",
			"datesWorked": "1/2017 - 2/2017",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer ",
			"images": ["images/demo.gif"],
			"url" : "https://github.com/yukun1992/SimpleGuardian"
		}
	]
};




projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();



var education = {
	"schools" : [
		{
			"name" : "University of California, Riverside",
			"date" : "9/2015 - 6/2017",
			"location" : "Riverside, CA",
			"degree" : "M.S",
			"major" : "Electrical Engineering",
			"url" : "http://www.ucr.edu/"
		},
		{
			"name" : "University of Shanghai Science and Technology",
			"date" : "9/2011 - 6/2015",
			"location" : "Shanghai, China",
			"degree" : "B.S",
			"major" : "Electrical Engineering",
			"url" : "http://www.usst.edu.cn/"
		}
	],
	"onlineCourses": [
		{
			"schools" : "Udacity",
			"title" : "Full Stack NanoDegree",
			"date" : "4/2017",
			"url" : "https://github.com/yukun1992/Item-Catalog/blob/master/certificate%20(2).pdf"
		},
		{
			"schools" : "Udacity",
			"title" : "Android Developper Nanodegree",
			"date" :  "2/2017",
			"url" : "https://github.com/yukun1992/SimpleGuardian/blob/master/certificate%20(1).pdf"
		}
	]
};

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].date);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			// var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			// $(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].schools);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].schools).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle );
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();


$("#mapDiv").append(googleMap);