phonecatControllers.controller('HackCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {

    $http.get('resources/batch-failed-data.json').success(function(data) {
        $scope.batchFailedData = data;

        var arrayToDisplay = [];
        arrayToDisplay.push(["Date", "Failed"]);
        var length = $scope.batchFailedData.length;
        for (var i=0; i<length; i++) {
            var batch = $scope.batchFailedData[i];
            var arrayEntry = [batch.Batch.date, parseInt(batch.Batch.numFailed)];
            arrayToDisplay.push(arrayEntry);
        }

        var options = {
          title: 'Batch Failed'
        };
        
        var dataToDisplay = google.visualization.arrayToDataTable(arrayToDisplay);
        var chart = new google.visualization.ColumnChart(document.getElementById('chartdiv'));
        chart.draw(dataToDisplay, options);

    });

  }]);