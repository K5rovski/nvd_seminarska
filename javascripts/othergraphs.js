makeDoughnut=function(Data){
	 var start = new Date().getTime(); //Time Start

	for (var i=0;i<Data.length;i++){
		Data[i]["indexLabel"]=Data[i]["printmonth"];
		Data[i]["y"]=+(Data[i]["averageval"]).toFixed(2);
		if (i==11){
		Data[i]["color"]="Indigo";
		}
		}

var middle=new Date().getTime();
         
		 var chart = new CanvasJS.Chart("chartContainer2", 
		  {
      title:{
        text: "Skopje",
        fontFamily: "Impact",
        fontWeight: "normal"
      },

      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center"
      },
      data: [
      {
        //startAngle: 45,
       indexLabelFontSize: 20,
       indexLabelFontFamily: "Garamond",
       indexLabelFontColor: "darkgrey",
       indexLabelLineColor: "darkgrey",
       indexLabelPlacement: "outside",
       type: "doughnut",
    //   showInLegend: true,
       dataPoints: Data,
	   axisY:{
				  suffix: "ug/m3"
					}    
     }
     ]
   });

    chart.render();
	
		// Time end
		var end = new Date().getTime();
		
		$('#TimeSpent2').text('Time loading data='+(middle-start)+
		' mills. Time showing graph='+(end-middle)+' mils.');
}

makeAverage=function(Data){
	 var start = new Date().getTime(); //Time Start

	for (var i=0;i<Data.length;i++){
		Data[i]["label"]=Data[i]["city"];
		Data[i]["y"]=+(Data[i]["Average"]).toFixed(2);
	//	Data[i]["x"]=(i+1)*10;
		}

var middle=new Date().getTime();
         console.log(Data);
		 var chart = new CanvasJS.Chart("chartContainer3", 
		  {
      title:{
        text: "Daily Average",
        fontFamily: "Impact",
        fontWeight: "normal"
      },
	
	   axisY:{
				  suffix: "ug/m3",
				  title:'PM10 Pollution'
					} ,
     axisX:{
       title: "axisX Title",
       gridThickness: 1,
       tickLength: 10
      },
      data: [
      {
        //startAngle: 45,
       
       type: "column",
    //   showInLegend: true,
       dataPoints: Data      
     }
     ]
   });

    chart.render();
	
		// Time end
		var end = new Date().getTime();
		
		$('#TimeSpent3').text('Time loading data='+(middle-start)+
		' mills. Time showing graph='+(end-middle)+' mils.');
}