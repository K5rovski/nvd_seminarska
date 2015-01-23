var JFiles={};
var CityNames=['Skopje','Paris','London','Hongkong','Amsterdam','Zagreb'];//'Temp'];
var OtherNames=['SkopjeByMonths.json','ByDays.json']
var Particle='PM10';
	var JDataList=[];
loadData=function(){
		 var funcs=[];
		for(var i=0;i<CityNames.length;i++){
		funcs.push($.getJSON(CityNames[i]+Particle+'.json'));
		}
		for(var i=0;i<OtherNames.length;i++){
		funcs.push($.getJSON(OtherNames[i]));
		}
	$.when.apply($, funcs).done(function(){
    // This callback will be called with multiple arguments,
    // one for each AJAX call
    // Each argument is an array with the following structure: [data, statusText, jqXHR]

    // Let's map the arguments into an object, for ease of use
    
    for(var i = 0, len = arguments.length; i < len; i++){
		var datai=arguments[i][0];
		if (!datai.hasOwnProperty("type")){
		var name=datai['2013_1_22_1'].Station;
	JFiles[name.slice(0,name.search('_'))]=datai;
	  }
	  else if (datai["type"]=="Doughnut"){
	  makeDoughnut(datai["data"]);
	  }
	  else if (datai["type"]=="average"){
	  makeAverage(datai.data)
	  makeColumn(datai.data,"Max","MaxChart","#MaxTime")
	   makeColumn(datai.data,"Min","MinChart","#MinTime")
	  }
	
    }
	
	makeGraph();
	});
		

}
makeGraph=function(){

	
	 var start = new Date().getTime(); //Time Start
	
	
	$.each(JFiles,function(cityname,city){
	// By JFile
	// for (var i=0;i<city.length;i++){
		// t=city[i];
		// t['x']=new Date(t['Year'],t['Month']-1,t['Day'],t['Time']-1);
	//	if (t['Year'])   // Dont know about this
		// t['y']=t['Reading'];
		// }
		var cityReadings=[];
	var d=new Date(2013,0,1,0);	
	for (var i=0;i<365*24;i++){
	
	var citykey=[d.getFullYear(),d.getMonth()+1,
	d.getDate(),d.getHours()+1
	].join('_');
	var t;
	t=city[citykey];
	//console.log(citykey);
	var itemKey=new Date(d.getTime());
	if (t!=null){
	t['x']=itemKey
	t['y']=+(t['Reading']).toFixed(2);}
	else {
	t={'x':itemKey,'y':null};
	}
	cityReadings.push(t);
	
	d.setHours(d.getHours()+1);
	}	
	console.log(cityReadings);
		JDataList.push({type: "line",
				  markerType:"none",
				   showInLegend: true, 
					name: cityname+'\t',
					visible: (cityname==='Skopje' || cityname==='Paris')? true : false,
                  dataPoints: cityReadings});
		});
		
		var middle=new Date().getTime();
         
		 var chart = new CanvasJS.Chart("chartContainer", {
              theme: "theme2",//theme1
			   zoomEnabled: true,
			panEnabled: true,
              title:{
                  text: "Several Cities"              
             },
		legend: {
					cursor: "pointer",
					itemclick: function (e) {
						//console.log("legend click: " + e.dataPointIndex);
						//console.log(e);
						if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
							e.dataSeries.visible = false;
						} else {
							e.dataSeries.visible = true;
						}

						chart.render();
					}
				},
              data: JDataList,
			  axisY:{
				  suffix: "ug/m3",
				  title:'PM10 Pollution'
					}    
          });

          chart.render();
	
		// Time end
		var end = new Date().getTime();
		
		$('#TimeSpent').text('Time loading data='+(middle-start)+
		' mills. Time showing graph='+(end-middle)+' mils.');
		
	//	alert('Execution time: ' + time);


}
 window.onload = function () {
		loadData();
		
		
		
      }