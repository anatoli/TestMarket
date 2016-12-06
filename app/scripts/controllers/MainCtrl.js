'use strict';

angular.module('testMarketApp')
  .controller('MainCtrl',[ '$scope', '$http',  function ($scope, $http) {

    $scope.arr = [];
    $scope.men = false;
    $scope.women = false;
    $scope.child = false;


      function update(men, women, child){
        $scope.arr = [];
        if ($scope.men){
          men();
        }
        if($scope.women){
          women()
        };
        if($scope.child){
          child()
        };
        if(!$scope.child && !$scope.men && !$scope.women){
          $scope.arr =[];
          men();
          women();
          child();
        }

        function men() {
          $http.get('men.json').then(function (data) {
            var item = data.data;
            for (var i = 0; i < item.length; i++) {
              $scope.arr.push(item[i]);
            }
          });
        }
        function women() {
          $http.get('women.json').then(function (data) {
            var item = data.data;
            for (var i = 0; i < item.length; i++) {
              $scope.arr.push(item[i]);
            }
          });
        };
        function child() {
          $http.get('child.json').then(function (data) {
            var item = data.data;
            for (var i = 0; i < item.length; i++) {
              $scope.arr.push(item[i]);
            }
          });
        };
      }

    $scope.filterReset = function () {
        $scope.men = false;
        $scope.women = false;
        $scope.child = false;
        $scope.arr =[];
    };

    $scope.$watch('men', function () {
        update($scope.men,$scope.women,$scope.child);
    });
    $scope.$watch('women', function () {
        update($scope.men,$scope.women,$scope.child);
    });
    $scope.$watch('child', function () {
        update($scope.men,$scope.women,$scope.child);
    });
    // $scope.$watch('arr', function () {
    //     console.log($scope.arr);
    // });

  }]);
