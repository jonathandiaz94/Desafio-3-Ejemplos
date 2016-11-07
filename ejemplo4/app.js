(function() {

  angular.module('tnt.ui.components', [])

  .directive('userInfo', [function() {
    return {
      restrict: 'E',
      scope:{
        name: '@',
        email: '@',
        rate: '=',
        click: '&'
      },
      template:'<label>Nombre: {{name}}, email: <a href="mailto:{{email}}">{{email}}</a></label><input type="text" size="2" ng-model="rate" /><button ng-click="click({name: name, rate: rate})" >Votar</button><br />'
    };
  }]);
  
  angular.module('tnt.ui.components').controller('DemoDirectivesCtrl', function($scope){
  $scope.users = [{
    name: 'Jose',
    email: 'jmsanchez@autentia.com',
    rate: '1'
  },
  {
    name: 'Gustavo',
    email: 'gmartin@autentia.com',
    rate: '2'
  }
  ];
  
  $scope.modify = function(user){
    console.log(user);
  };
});

}());