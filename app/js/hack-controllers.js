phonecatControllers.controller('HackCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {


    $http.get('resources/impact-data.json').success(function(data) {
        console.log("Was able to load");
        $scope.impactData = data;


        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
          ]);

        var options = {
          title: 'My Daily Activities'
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));

      chart.draw(data, options);



      var barData = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250],
          ['2016', 660, 1120, 300],
          ['2017', 1030, 540, 350]
          ]);

      var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
          bars: 'horizontal' // Required for Material Bar Charts.
      };

      var barchart = new google.visualization.BarChart(document.getElementById('barchart'));

      barchart.draw(barData, options);





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