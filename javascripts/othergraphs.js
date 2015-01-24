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
		toolTipContent: "{indexLabel} <br> {y} ug/m3",  
       indexLabelFontSize: 20,
       indexLabelFontFamily: "Garamond",
       indexLabelFontColor: "darkgrey",
       indexLabelLineColor: "darkgrey",
       indexLabelPlacement: "outside",
       type: "doughnut",
    //   showInLegend: true,
       dataPoints: Data
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
     //  title: "axisX Title",
       gridThickness: 1,
       tickLength: 10
      },
      data: [
      {
        //startAngle: 45,
       		toolTipContent: "{y} ug/m3",  
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
makeColumn=function(Data,Mpref,chartdiv,timediv){
	 var start = new Date().getTime();  //Time Start
	var newD=[];
	for (var i=0;i<Data.length;i++){
		newD.push({})
		newD[i]["label"]=Data[i]["city"];
		newD[i]["y"]=+(Data[i][Mpref]).toFixed(2);
		var dstr=Data[i][Mpref+"Day"].split('_');
		var ddate=new Date(dstr);
		newD[i]["printday"]=ddate.toDateString();
	//	Data[i]["x"]=(i+1)*10;
		}

var middle=new Date().getTime();
         console.log(Data);
		 var chart = new CanvasJS.Chart(chartdiv, 
		  {
      title:{
        text: "Daily "+Mpref+" Value",
        fontFamily: "Impact",
        fontWeight: "normal"
      },
	
	   axisY:{
				  suffix: "ug/m3",
				  title:'PM10 Pollution'
					} ,
     axisX:{
       //title: "axisX Title",
       gridThickness: 1,
       tickLength: 10
      },
      data: [
      {
        //startAngle: 45,
       		toolTipContent: "{printday}<br>{y} ug/m3 ",  
       type: "column",
    //   showInLegend: true,
       dataPoints: newD      
     }
     ]
   });

    chart.render();
	
		// Time end
		var end = new Date().getTime();
		
		$(timediv).text('Time loading data='+(middle-start)+
		' mills. Time showing graph='+(end-middle)+' mils.');
}

makeBubble=function(Data,chartdiv,timediv){
	 var start = new Date().getTime(); //Time Start
	var newD=[];
	for (var i=0;i<Data.length;i++){
		newD.push({})
		newD[i]["city"]=Data[i]["city"];
		newD[i]["z"]=+(Data[i]["Average"]).toFixed(2);
		newD[i]["x"]=Data[i]["GDP"];
		newD[i]["y"]=Data[i]["Pop_Density"];
	//	var dstr=Data[i][Mpref+"Day"].split('_');
	//	var ddate=new Date(dstr);
	//	newD[i]["printday"]=ddate.toDateString();
	//	Data[i]["x"]=(i+1)*10;
		}

var middle=new Date().getTime();
      //   console.log(Data);
		 var chart = new CanvasJS.Chart(chartdiv, 
		  {
      title:{
        text: "Comparing Pollution with Population and GDP",
        fontFamily: "Impact",
        fontWeight: "normal"
      },
		legend:{
        verticalAlign: "bottom",
        horizontalAlign: "left"

      },
	   axisY:{
		title:'GDP/capita of home country'
	} ,
     axisX:{
       title: "Population Density",
  //     gridThickness: 1,
    //   tickLength: 10
      },
      data: [
      {
      legendText: "Size of Bubble Represents Average Daily PM10 Pollution",
      toolTipContent: "<strong>{city}</strong> <hr/>"+
	  "GDP: {y}<br/> Population Density: {x} /km2<br/> Avg. Daily PM10: {z} ug/m3",
	  type: "bubble",
       showInLegend: true,
       legendMarkerType:"circle",
	   dataPoints: newD      
     }
     ]
   });

    chart.render();
	
		// Time end
		var end = new Date().getTime();
		
		$(timediv).text('Time loading data='+(middle-start)+
		' mills. Time showing graph='+(end-middle)+' mils.');
}