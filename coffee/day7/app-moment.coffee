MomentCtrl = ($scope) ->
  $scope.todayMessage = "Today is #{moment().format('dddd')}"


# Define Angular module
app = angular.module 'MomentApp', []

app.controller 'MomentCtrl', ['$scope', MomentCtrl]

# init application; load compiled MomentScript
angular.bootstrap document, ['MomentApp']