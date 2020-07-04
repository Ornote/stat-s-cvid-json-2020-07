/*****Angular*****/
function CvidController($scope, $http) {
  $http.get('data/data-cvid.json').success(function (data) {
    $scope.rows = data;
  });
  $scope.temp = false;

  // Tabs
  $scope.tab = 0;

  $scope.setTab = function(newTab){
    $scope.tab = newTab;
  };

  $scope.isSet = function(tabNum){
    return $scope.tab === tabNum;
  };
}