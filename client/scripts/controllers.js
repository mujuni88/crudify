angular.module('buzaApp.controllers', [])
    .controller('AppCtrl', function($scope) {

    })
    .controller('HeroCtrl', function($scope, Hero) {
        $scope.hero = Hero;
    })
    .controller('EducationCtrl', function($scope, Education) {
        $scope.schools = Education;

    })
    .controller('SkillsCtrl', function($scope, Skills) {
        $scope.skills = Skills;

        $scope.skillsString = function(inputs) {
            var out = "",
                length = inputs.length;

            for (var i = 0; i < length; i++) {
                if (i === length - 1) {
                    var lio = out.lastIndexOf(',');
                    out = out.slice(0, lio) + " and " + inputs[i];
                } else {
                    out += inputs[i] + ", ";
                }
            }

            return out;
        }


    })
    .controller('EmploymentCtrl', function($scope, Employment) {
        $scope.jobs = Employment;

    })
    .controller('FooterCtrl', function($scope) {

    });
