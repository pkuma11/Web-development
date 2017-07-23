(function() {
  angular.module('MsgApp',[])
  .controller('MsgController',MsgController);
  MsgController.$inject=['$scope'];
  function MsgController($scope){
    $scope.name='Hello';
    $scope.sayMessage=function () {
        return "Expression demo";
    };
  }
})();
