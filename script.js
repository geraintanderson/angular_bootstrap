var app = angular.module("carouselExample", ['ngRoute', 'ngAnimate', 'ui.bootstrap'])

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

// NEXT TO DO - Why is the next section overlapping the carousel??  Also need to put all the content from carousel.json into carousel2.json and wire it up! cv

/*.controller('carouselCtrl', ['$scope', '$http', function($scope, $http){
  console.log('carouselCtrl loaded in!!!');
  $http.get('carousel.json').then(function(res){
    $scope.carousel = res.data;
  });
}])*/

.controller('ContactCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('contact.json').then(function(res){
    $scope.contacts = res.data;
  });
}])

.controller('CarouselDemoCtrl', function ($scope, $http) {

  $http.get('carousel2.json').then(function(res){
    console.log(res.data);
    $scope.slides = res.data;
  });

  //var currIndex = 0;

});
