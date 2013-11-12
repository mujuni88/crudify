angular.module('buzaApp.services', [])
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
        return {
            title:"Title",
            msg:"Hello Kitty"
        };
    })
    .factory('Hero', function() {
        return {
            title: "Joe Buza",
            brand: "A dynamic and passionate Software Developer with experience in both web and mobile applications, up to date with the current technologies, embraces agile methodologies to deliver quality products and huge proponent of code reviews and test driven development."
        }
    })


;