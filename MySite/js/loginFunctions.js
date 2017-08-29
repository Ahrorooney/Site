// JavaScript Document
$(document).ready(function()
{
	"use strict";
	
	google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLineColors);

function drawLineColors() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Users');
      data.addColumn('number', 'Tasks');

      data.addRows([
        [9, 0, 0],    [10, 10, 5],   [11, 23, 15],  [12, 35, 25]
      ]);

      var options = {
        hAxis: {
          title: 'Time',
		  format: "09.01.2017"
        },
        vAxis: {
          title: 'Popularity'
        },
        colors: ['blue', 'red'],
		animation: {
			"startup": true,
			"duration": 1500
		}
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

	$("#login_form").submit(function()
	{
		location.href = "Task_Board.html";
	});
	$("#registration").click(function()
	{
		
	});
});