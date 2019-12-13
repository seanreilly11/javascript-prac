const shops = [
{
	id: 1,
	name: "Karori Park Fish and Chips",
	coords: {lat: -41.286581, lng: 174.728277},
	location: "Karori",
		distance: 6.2, // distance from yoobee
		open: {mon:"4–8:30pm", tues:"11am–8:30pm", wed:"11am–8:30pm",thur:"11am–8:30pm",fri:"11am–9pm", sat:"11am–8:30pm", sun:"4–8pm"},
		rating: 4.4
	},
	{
		id: 2,
		name: "Corfu Seafoods",
		coords: {lat: -41.285042, lng: 174.736143},
		location: "Karori",
		distance: 5.6, // distance from yoobee
		open: {mon:"Closed", tues:"11am–8pm", wed:"11am–8pm",thur:"11am–9pm",fri:"11am–9pm", sat:"11am–8pm", sun:"12–8pm"},
		rating: 4.3
	},
	{
		id: 3,
		name: "Paradise Seafoods",
		coords: {lat: -41.289008, lng: 174.761983},
		location: "Kelburn",
		distance: 3.0, // distance from yoobee
		open: {mon:"Closed", tues:"10:30am–8pm", wed:"10:30am–8pm",thur:"10:30am–8:30pm",fri:"10:30am–9pm", sat:"10:30am–8:30pm", sun:"11am–8pm"},
		rating: 4.0
	},
	{
		id: 4,
		name: "Te Aro Fish Supplies Ltd.",
		coords: {lat: -41.295425, lng: 174.767063},
		location: "Aro Valley",
		distance: 3.2, // distance from yoobee
		open: {mon:"4:30–9:30pm", tues:"2–9:30pm", wed:"2–9:30pm",thur:"2–9:30pm",fri:"2–10pm", sat:"2–9:30pm", sun:"4:30–9:30pm"},
		rating: 4.2
	},
	{
		id: 5,
		name: "Wellington Trawling - Fish and Chips",
		coords: {lat: -41.295596, lng: 174.774346},
		location: "Te Aro",
		distance: 2.4, // distance from yoobee
		open: {mon:"9am–8pm", tues:"9am–8pm", wed:"9am–8pm",thur:"9am–8pm",fri:"9am–8pm", sat:"9am–9pm", sun:"9am–8pm"},
		rating: 4.3
	},
	{
		id: 6,
		name: "Fish N Chips on Tory",
		coords: {lat: -41.295498, lng: 174.779818},
		location: "Te Aro",
		distance: 2.1, // distance from yoobee
		open: {mon:"11am–9pm", tues:"11am–9pm", wed:"11am–9pm",thur:"11am–9pm",fri:"11am–9pm", sat:"11am–9pm", sun:"11am–9pm"},
		rating: 4.5
	},
	{
		id: 7,
		name: "Mt Vic Chippery",
		coords: {lat: -41.294070, lng: 174.784465},
		location: "Mount Victoria",
		distance: 2.1, // distance from yoobee
		open: {mon:"4–8:30pm", tues:"11am–8:30pm", wed:"11am–8:30pm",thur:"11am–8:30pm",fri:"11am–9pm", sat:"11am–8:30pm", sun:"4–8pm"},
		rating: 4.3
	},
	{
		id: 8,
		name: "Miramar Fish N Chips",
		coords: {lat: -41.316079, lng: 174.816838},
		location: "Miramar",
		distance: 7.3, // distance from yoobee
		open: {mon:"12-9pm", tues:"12-9pm", wed:"12-9pm",thur:"12-9pm",fri:"12-9pm", sat:"12-9pm", sun:"12-9pm"},
		rating: 4.1
	}
	];

	$("#map").hide();

	$("#submit").click(function(){
		$("#map").show();
		var d = $("#distance-select").val();
		var r = $("#rating-select").val();
		d = parseFloat(d);
		r = parseFloat(r);
		initMap(d,r);
	});

// access api key from config.json
var myKey = JSON.parse(apiKey);
var script = document.createElement('script');
script.src='https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key + '&callback=initMap';
document.getElementsByTagName('body')[0].appendChild(script);
var script1 = document.createElement('script');
script1.src='https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key='+myKey[0].key;
document.getElementsByTagName('body')[0].appendChild(script1);

// function printOptions(){
// 	var options = "";
// 	for(var i = 0; i<shops.length; i++){
// 		if(!options.includes(shops[i].distance)){
// 			options += "<option value='"+shops[i].distance+"'>"+shops[i].distance+"</option>";
// 		}
// 		console.log(shops[i].distance)

// 	}
// 	document.getElementById("distance-select").innerHTML += options;
// }

var windowContent = "";
function printShops(i){
	windowContent = "<br><h4>"+shops[i].name
	+ "</h4><br>Location: "+shops[i].location
	+ "<br>Distance from Yoobee: "+shops[i].distance+"km"
	+ "<br>Opening Hours: <ul>";
	for (var key in shops[i].open) {
		if (shops[i].open.hasOwnProperty(key)) {
			windowContent += "<li>"+key + ": " + shops[i].open[key]+"</li>";
		}
	}
	windowContent += "</ul>Rating out of 5: " + shops[i].rating;
	return windowContent;
}

var map;
function initMap(d,r) {
	var center = {lat: -41.2867, lng: 174.7730}
	map = new google.maps.Map(document.getElementById('map'), {
		center: center,
		zoom: 13
	});
	for(var i = 0; i<shops.length; i++){
		if(typeof(d) == "number"){
			if(d >= shops[i].distance && r <= shops[i].rating){
				var infowindow = new google.maps.InfoWindow({
					content: printShops(i)
				});
				var marker = new google.maps.Marker({
					position: shops[i].coords,
					map: map,
					icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png'
				});
				marker.addListener('click', function() {
					infowindow.open(map, marker);
				});
				// map.panTo(shops[i].coords);
				// map.setZoom(15)
				infowindow.open(map, marker);
			}
		}
		else if(typeof(d) == "string"){
			console.log("string");
		}
	}
}


// date picker
$("#from").datepicker({
	dateFormat: 'yy-mm-dd',
	changeMonth: true,
	minDate: new Date(),
	maxDate: '+1y',
	onSelect: function(date){

		var selectedDate = new Date(date);
		var oneDay = 86400000;
		var stDate = new Date(selectedDate.getTime() + oneDay);

     //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
     $("#to").datepicker( "option", "minDate", stDate );
     var enDate = new Date(selectedDate.getTime() + 15 * oneDay);

     $("#to").datepicker( "option", "maxDate", enDate );

 }
});

$("#to").datepicker({
	dateFormat: 'yy-mm-dd',
	changeMonth: true
});

//Find the number of days between dates
function dateDiff() {
	var start = $('#from').datepicker('getDate');
	var end = $('#to').datepicker('getDate');
	var days   = (end - start)/1000/60/60/24;

	document.getElementById("diff").value = days ;
}

$('#submitDate').click(function(){
	dateDiff();
});








