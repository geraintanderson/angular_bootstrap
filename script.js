var app = angular.module("techSol", ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/main', {
    templateUrl: 'main.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'about.html'
  })
  .when('/contact', {
    templateUrl: 'contact.html',
    controller: 'ContactCtrl'
  })
  .otherwise({
    redirectTo: '/main'
  });
}])

.controller('MainCtrl', [function(){
  console.log('MainCtrl loaded in!!!');
}])

.controller('carouselCtrl', ['$scope', '$http', function($scope, $http){
  console.log('carouselCtrl loaded in!!!');
  $http.get('carousel.json').then(function(res){
    $scope.carousel = res.data;
  });
}])

.controller('ContactCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('contact.json').then(function(res){
    $scope.contacts = res.data;
  });
}])
