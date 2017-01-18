angular.module('myApp')
.service('mainService', function($http) {

  var url = 'http://swapi.co/api/people'
  this.getPeople = function() {
    return $http({
      method: 'GET',
      url: url
    })
  }

  this.getMorePeople = function() {
    return $http({
      method: 'GET',
      url: url + '?page=2'
    })
  }
});