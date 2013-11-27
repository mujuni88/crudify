angular.module('buzaApp.services', ['ngResource'])
    .factory('Skills', function() {
        return [{
            category: "Programming Languages",
            skills: ["Java", "Javascript", "C++"]
        }, {
            category: "Database",
            skills: ["MySQL", "PostgreSQL", "MongoDb"]
        }, {
            category: "Operating Systems",
            skills: ["Mac OS X", "Linux", "Windows"]
        }];
        

        // return $resource('http://localhost:3000/skill/', {}, {
        //     query: {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         isArray:true
        //     }
        // });

    })
    .factory('Education', function() {
        return [{
                name: "Mississippi State University",
                city: "Starkville",
                state: "MS",
                gradYear: "2012",
                education: "Bachelor of Science in Computer Science",
                location: {
                    lat: "",
                    lng: ""
                }

            }, {
                name: "Mississippi School for Mathematics and Science",
                city: "Columbus",
                state: "MS",
                gradYear: "2007",
                education: "High School Diploma",
                location: {
                    lat: "",
                    lng: ""
                }
            }

        ];

    })
    .factory('Employment', function() {
        return [{
            "city": "Jackson",
            "employer": "Navagis LLC, Google Enterprise Partner",
            "end": "2013",
            "jobs": [{
                "highlight": "Developed android",
                "description": "Developed android application",
                "hasProject": false,
                "projectTitle": "",
                "projectUrl": ""
            }, {
                "highlight": "Ate so much sushi, it's funny",
                "description": "Ate so much sushi, it's funny you heard",
                "hasProject": true,
                "projectTitle": "Mobile Recon",
                "projectUrl": "http://mobilerecon.com"
            }],
            "location": {
                "lat": "",
                "lng": ""
            },
            "position": "Jr. Mobile Developer",
            "start": "2012",
            "state": "MS"
        }, {
            "city": "Jackson",
            "employer": "Navagis LLC, Google Enterprise Partner",
            "end": "2013",
            "jobs": [{
                "highlight": "Developed android",
                "description": "Developed android application",
                "hasProject": false,
                "projectTitle": "",
                "projectUrl": ""
            }, {
                "highlight": "Ate so much sushi, it's funny",
                "description": "Ate so much sushi, it's funny you heard",
                "hasProject": true,
                "projectTitle": "Mobile Recon",
                "projectUrl": "http://mobilerecon.com"
            }],
            "location": {
                "lat": "",
                "lng": ""
            },
            "position": "Jr. Mobile Developer",
            "start": "2012",
            "state": "MS"
        }];
    })
    .factory('Hero', function() {
        return {
            title: "Joe Buza",
            brand: "A dynamic and passionate Software Developer with experience in both web and mobile applications, up to date with the current technologies, embraces agile methodologies to deliver quality products and huge proponent of code reviews and test driven development."
        }
    })


;
