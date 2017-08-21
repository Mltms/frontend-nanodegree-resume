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
    "welcomeMessage": "Welcome to my JS page.",
    "skills": [
        "Java", "Javascript", "html", "CSS"
    ],
    "biopic": "images/lastme.png"
};

var education = {
    "schools": {
        "name": "King Saud University",
        "location": "Diriyah ,Riyadh , Saudi Arabia",
        "degree": "Bachelors - Data scince",
        "major": ["Data scince,Front End Development"],
        "dates": "2014 - Present",
        "url": "http://ksu.edu.sa",
        "logo": "images/last2.png"
    },
    "onlineCourses": [{
        "title": "Front End Development",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com"
    }, ]
};
// Demo data
var work = {
    "jobs": [{
        "employer": "Google",
        "title": "Front End developer",
        "location": "Mountain View, CA",
        "dates": "2020",
        "description": "Google.",
        "logo": "images/google.png"
    }]
};

var projects = {
    "projects": [{
            "title": "Portfolio Site",
            "dates": "2017",
            "description": "A simple portfolio site",
            "images": ["images/project.png"],
        },
        {
            "title": "A simple Quiz On Android",
            "dates": "2017",
            "description": "A simple Quiz app on android",
            "images": ["images/project2.png"],
        }
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

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

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#header").append(formattedSkills);
    }
};

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var j = 0; j < work.jobs.length; j++) {

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
        formattedEmployer = formattedEmployer.replace("%logo%", work.jobs[j].logo);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var p = 0; p < projects.projects.length; p++) {

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
        formattedTitle = formattedTitle.replace("%logo%", projects.projects[p].images);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
        $(".project-entry:last").append(formattedDescription);
    }
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var s = 0; s < education.schools.length; s++) {

        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[s].school);
        formattedSchool = formattedSchool.replace("%logo%", education.schools[s].logo);
        $(".education-entry:last").append(formattedSchool);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[s].majors);
        $('.education-entry:last').append(formattedSchoolMajor);
    }
        $('.education-entry:last').append(HTMLonlineClasses);
    for (var online = 0; online < education.onlineCourses.length; online++) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var formattedSchoolTitle = formattedOnlineTitle + " " + formattedOnlineSchool;
        formattedSchoolTitle = formattedSchoolTitle.replace("#", education.onlineCourses[online].url);
        $('.education-entry:last').append(formattedSchoolTitle);

        var formattedOnlineSchoolDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        $('.education-entry:last').append(formattedOnlineSchoolDate);

        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
        formattedUrl = formattedUrl.replace("%#%", education.onlineCourses[online].url);
        $('.education-entry:last').append(formattedUrl);

    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);