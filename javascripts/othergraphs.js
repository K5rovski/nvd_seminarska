makeDoughnut=function(Data){
	 var start = new Date().getTime(); //Time Start

	for (var i=0;i<Data.length;i++){
		Data[i]["indexLabel"]=Data[i]["printmonth"];
		Data[i]["y"]=+(Data[i]["averageval"]).toFixed(2);
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