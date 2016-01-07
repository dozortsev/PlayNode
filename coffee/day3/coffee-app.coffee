CoffeeCtrl = ($scope) ->
  $scope.status = 'Great day'

  $scope.tasks = [
    id: 1
    name: 'hobby'
    desc: 'skateboarding with friend in LA under sunny weather'
  ,
    id: 2
    name: 'life'
    desc: 'work on yourself and be enough rich for traveling and by stuff what I want'
  ]

app = angular.module('CoffeeApp', [])

app.controller('CoffeeCtrl', CoffeeCtrl)

# init application; load compiled CoffeeScript
angular.bootstrap document, ['CoffeeApp']