angular.module('myApp', [])
.controller('myCtrl', [ '$scope', function($scope) {

  $scope.rows = [];

  $scope.add_to_list = function() {

    $scope.rows.push($scope.item_quantity + " x " + $scope.item_name + ", " + "$" +
        $scope.item_cost + " each --- $" + ($scope.item_quantity * $scope.item_cost) + " total");

        $scope.running_total = $scope.running_total + ($scope.item_quantity * $scope.item_cost);

        if ($scope.running_total <= $scope.budget) {
          $scope.budget_statement = "You are at or under budget";
          $scope.budget_color = "green";
        } else {
          $scope.budget_statement = "You are over budget";
          $scope.budget_color = "red";
        }
  }


}]);
