CoffeeCtrl = ($scope) ->
  $scope.countries = [
    id: 1
    name: 'Ukraine'
  ,
    id: 2
    name: 'USA'
  ,
    id: 3
    name: 'France'
  ]

  $scope.selected = []

  $scope.callback = (el) ->
    if el? and $scope.selected.indexOf(el.title) is -1
      $scope.selected.push el.title

  $scope.remove = (el) -> $scope.selected.rm el

# Define Angular module
app = angular.module 'CoffeeApp', ['angucomplete-ie8']

app.controller 'CoffeeCtrl', ['$scope', CoffeeCtrl]

# init application; load compiled CoffeeScript
angular.bootstrap document, ['CoffeeApp']