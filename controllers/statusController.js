studentSignIn.controller('StatusCtrl', function StatusCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;
    $scope.signStudentIn = function(student) {
        student.signedIn = true;
    };
});







// studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope, StudentsFactory) {
//   $scope.students = StudentsFactory.students;
//   $scope.addStudentWithPermissionSlip = function(student) {
//     student.permissionSlip = true;
//   };
// });
