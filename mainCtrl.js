angular.module('myApp')
.controller('mainCtrl', function($scope, mainService) {

  $scope.people = [];
  mainService.getPeople().then(function(_response) {
    $scope.people = _response.data.results.concat($scope.people);
  })

  mainService.getMorePeople().then(function(res) {
    $scope.people = res.data.results.concat($scope.people);
  })

})