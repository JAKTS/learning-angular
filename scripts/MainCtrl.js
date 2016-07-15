// scripts/MainCrtl.js

angular.module('avengersApp', [])
      .controller('MainCtrl', function($scope, dataService){

      $scope.getHeroes = function getHeroes(){
            $scope.avengers = dataService.avengers;
          };  //javascript Hoisting







    }); //end MainCtrl
