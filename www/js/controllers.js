
starter.controller('HomeCtrl',['$scope', "Auth", '$location',
  function ($scope, Auth, $location) {
    console.log("YOU'RE IN");
    $scope.auth = Auth;

    // any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData, path) {
      $scope.authData = authData;
      $location.path(path);
      console.log(authData);
    });

    $scope.accept = function(path) {
      $location.path(path);
    };

}]);

starter.controller('LoginCtrl', ["$scope", "Auth", '$location',function($scope, Auth, $location) {
    $scope.auth = Auth;

    // any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData, path) {
      $scope.authData = authData;
      console.log(authData);
    });

    $scope.accept = function(path) {
      $location.path(path);
    };
  }
])

starter.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://sweltering-fire-6267.firebaseio.com", "example3");
    return $firebaseAuth(ref);
    console.log(ref);
  }
]);