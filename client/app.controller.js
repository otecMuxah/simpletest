export default class AppController {
  
  static UID() {
    return 'AppController';
  }

  /* ngIngect*/
  constructor($scope, $http) {
    let path = location.pathname.split('/'),
      testID = path && path[path.length - 1];

    this.test = 'START';

    if (testID) {
      $http
        .get(testID)
        .then(function (response) {
          $scope.form = response.data;
        });
    }
  }
} 
