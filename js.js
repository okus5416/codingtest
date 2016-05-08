
    var labels =[], data=[];
    $.getJSON("chart.json", function(json){
              labels.push(json[i].month);
              });
$.getJSON("chart.json", function(json){
          data.push(json[i].money);
          });

    var tempdata ={
    labels: labels,
    datasets: [
        {
                labes: "Earnings",
               lineTension: 0,
               fillColor: "rgba(128,128,128,0.3)",
               strokeColor: "rgba(128,128,128,1)",
               pointColor: "rgba(128,128,128,1)",
               pointStrokeColor: "#fff",
               pointHighlightFill: "#fff",
               pointHighlightStroke: "rgba(128,128,128,1)",
               data: data
               
               
        }
        
        
        ]
    };
    var ctx = document.getElementById("myChart").getContext("2d");

    ctx.canvas.width = 1497;
    ctx.canvas.height = 321;
    var myLineChart = new Chart(ctx).Line(tempdata, options);
    
