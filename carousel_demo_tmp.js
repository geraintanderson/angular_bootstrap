angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 2000;
  var currIndex = 0;

  $scope.slides = [
    {
        "image": "http://lorempixel.com/601/300",
        "text": "Nice image",
        "id": 0
    },
    {
        "image": "http://lorempixel.com/602/300",
        "text": "Awesome photograph",
        "id": 1
    },
    {
        "image": "http://lorempixel.com/603/300",
        "text": "That is so cool",
        "id": 2
    },
    {
        "image": "http://lorempixel.com/604/300",
        "text": "I love that",
        "id": 3
    }
  ]

});
