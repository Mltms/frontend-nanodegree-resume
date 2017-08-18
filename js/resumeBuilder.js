var bio = {
	"name": "Saeed Alzahrani",
	"role": "Front End developer",
	"contacts": {
		"mobile": "+966xxxxxxxxx",
		"email": "mltmssan@gmail.com",
		"github": "Mltms",
		"twitter": "None",
		"location": "Riyadh, Saudi Arabia"
	},
	"welcomeMsg": "Welcome to my JS page.",
	"skills": [
	"Java", "Javascript", "html", "CSS"
	],
	"biopic": "images/lastme.png"
};

var education = {
	"schools": [
	{
		"school": "King Saud University",
		"location": "Diriyah ,Riyadh",
		"degree": "Bachelors - Data scince",
		"major": "Data scince",
		"dates": "2014 - Present",
		"url": "http://ksu.edu.sa",
		"logo": "images/last2.png"
		},
	{
		"school": "Udacity",
		"location": "Riyadh, Riyadh",
		"degree": "Front End Development",
		"major": "Front End Development ",
		"dates": "2017",
		"url": "https://www.udacity.com/",
		"logo": "images/ud2.png"
		}
	]
};

// Demo data
var work = {
	"jobs": [
	{
		"employer": "Google",
		"title": "Front End developer",
		"location": "Mountain View, CA",
		"dates": "2020",
		"description": "Google.",
		"logo": "images/google.png"
    }
	   ]
};

var projects = {
	"projects": [
	{
		"title": "Portfolio Site",
		"dates": "2017",
		"description": "A simple portfolio site",
		"logo": "images/project.png"
	},
	{
		"title": "A simple Quiz On Android",
		"dates": "2017",
		"description": "A simple Quiz app on android",
		"logo": "images/project2.png"
	}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);	
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGitHub);
$("#footerContacts").append(formattedTwitter);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);

function displaySkills() {
	for (var skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#header").append(formattedSkills);
	}
}

function displayWork() {
	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
	
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		formattedEmployer = formattedEmployer.replace("%logo%", work.jobs[job].logo);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
	
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
	
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}



projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	formattedTitle = formattedTitle.replace("%logo%", projects.projects[project].logo);
	$(".project-entry:last").append(formattedTitle);
		
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
				
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);		
	}
};

function displayEducation() {
	for (var sch in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[sch].school);
		formattedSchool = formattedSchool.replace("%logo%", education.schools[sch].logo);
		$(".education-entry:last").append(formattedSchool);
		
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[sch].degree);
		$(".education-entry:last").append(formattedDegree);
		
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[sch].location);
		$(".education-entry:last").append(formattedLocation);
	}
}
displaySkills();
displayWork();
projects.display();
displayEducation();

$("#mapDiv").append(googleMap);