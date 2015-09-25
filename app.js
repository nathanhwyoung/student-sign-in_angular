var studentSignIn = angular.module('studentSignIn', ['ui.router']);

studentSignIn.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('students', {
    url: "/students",
    templateUrl: "partials/students.html",
    controller: 'StudentsCtrl'
  });


});
