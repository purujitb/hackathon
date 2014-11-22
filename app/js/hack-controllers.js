phonecatControllers.controller('HackCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {


    $http.get('resources/impact-data.json').success(function(data) {
        console.log("Was able to load");
        $scope.impactData = data;

        // var arrayToDisplay = [];
        // arrayToDisplay.push(["Date", "Failed"]);
        // var length = $scope.impactData.length;
        // for (var i=0; i<length; i++) {
        //     var batch = $scope.impactData[i];
        //     var arrayEntry = [batch.Batch.date, parseInt(batch.Batch.numFailed)];
        //     arrayToDisplay.push(arrayEntry);
        // }

        // var options = {
        //   title: 'Batch Failed'
        // };
        
        // var dataToDisplay = google.visualization.arrayToDataTable(arrayToDisplay);
        // var chart = new google.visualization.ColumnChart(document.getElementById('chartdiv'));
        // chart.draw(dataToDisplay, options);

    });

  }]);