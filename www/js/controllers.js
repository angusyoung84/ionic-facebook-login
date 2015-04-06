
starter.controller('HomeCtrl',['$scope',
  function ($scope) {
    console.log("YOU'RE IN");

}]);

starter.controller('LoginCtrl', ["$rootScope", "$scope", "Auth", '$location',function($rootScope, $scope, Auth, $location) {
    $rootScope.auth = Auth;

    // any time auth status updates, add the user data to scope
    $rootScope.auth.$onAuth(function(authData, path) {
      $rootScope.authData = authData;
      console.log(authData);
    });

    $rootScope.accept = function(path) {
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