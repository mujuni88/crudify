angular.module('buzaApp.directives', [])
    .directive('appendAndOnLastItem', function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                skills: "="
            },
            link: function($scope) {

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

                    console.log(out);
                    return out;
                }

            },
            template: '<li>{{skillsString(skills)}}</li>'
        }

    })
    .directive('education', function() {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {},
            template: '<div ng-transclude></div>'
        }
    })
    .directive('school', function() {
        return {
            restrict: 'E',
            requires: 'education',
            transclude: true,
            scope: {
                name: "=",
                city: "=",
                state: "=",
                gradyear: "=",
                education: "="
            },
            template: '<h4>{{name}} - {{city}}, {{state}}' + '<span class="label label-info pull-right">Graduated {{gradyear}}</span>' + '</h4>' + '<p ng-transclude>{{education}}</p>'
        }
    })
    .directive('employment', function(Employment) {
        return {
            restrict: 'E',
            replace: false,
            scope: {},
            link: function($scope) {
                $scope.jobs = Employment;

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

                    console.log(out);
                    return out;
                }

            },
            templateUrl: "partials/employment.html"
        }

    })
    .directive('hero', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                title: "=",
                brand: "="
            },
            templateUrl: "partials/hero.html"
        }
    });
