(function(){
  'use strict';

  angular.module('CounterApp', [])
  .controller('CounterController', CounterController);
  CounterController.$inject = ['$scope', '$timeout'];

  function CounterController($scope, $timeout) {
    $scope.counter = 0;

    $scope.upCounter = function () {
      // Angular provides outofbox $timeout service for timeout
      $timeout(function () {
        $scope.counter++;
        console.log("Counter incremented .!");
      }, 2000);
      // // manual timeout funtion
      // setTimeout(function (){
      //   $scope.$apply(function(){
      //     $scope.counter++;
      //     console.log("Counter incremented .!");
      //   })
      // }, 2000); //2000 miliecond means 2 seconds
    }

    // javascript timeout function
    // $scope.upCounter = function () {
    //   setTimeout(function (){
    //     $scope.counter++;
    //     console.log("Counter incremented .!");
    //     $scope.$digest();
    //   }, 2000); //2000 miliecond means 2 seconds
    // }
  };

})();

// digest cycle does not get triggered automatically if evenets are unware of angular i.e. non-angular context / javascript native functions
// Solution:
// 1. Call $digest after your custom code
// 2. Wrap your cutosm code inside of $apply
// 3. find Angular specific service that handles the same functionality e.g. $timeout
