// PHONES ARRAY OBJECTS
var phones = [
{
	name : "iPhone SE",
	brand: "Apple",
	colors: ["space grey", "silver", "gold", "rose gold"],
	screen: 4,
	headphone: true,
},
{
	name : "iPhone 7",
	brand: "Apple",
	colors: ["black", "silver", "gold", "rose gold","jet black"],
	screen: 4.7,
	headphone: false,
},
{
	name : "iPhone 8",
	brand: "Apple",
	colors: ["space grey", "silver", "gold"],
	screen: 4.7,
	headphone: false,
},
{
	name : "iPhone X",
	brand: "Apple",
	colors: ["space grey", "silver"],
	screen: 5.8,
	headphone: false,
},
{
	name : "iPhone XS",
	brand: "Apple",
	colors: ["space grey", "silver", "gold"],
	screen: 5.8,
	headphone: false,
},
{
	name : "iPhone XR",
	brand: "Apple",
	colors: ["black", "red", "blue", "white","yellow","coral"],
	screen: 6.1,
	headphone: false,
},
{
	name : "iPhone 11",
	brand: "Apple",
	colors: ["red", "black", "white", "yellow","green","purple"],
	screen: 6.1,
	headphone: false,
},
{
	name : "Galaxy S7",
	brand: "Samsung",
	colors: ["black", "white", "gold"],
	screen: 5.5,
	headphone: true,
},
{
	name : "Galaxy S8",
	brand: "Samsung",
	colors: ["black", "silver", "gold", "blue","grey"],
	screen: 5.8,
	headphone: true,
},
{
	name : "Galaxy S9",
	brand: "Samsung",
	colors: ["black", "blue", "purple", "grey"],
	screen: 6.2,
	headphone: true,
},
{
	name : "Galaxy S10",
	brand: "Samsung",
	colors: ["black", "silver", "gold"],
	screen: 6.1,
	headphone: true,
},
{
	name : "P30",
	brand: "Huawei",
	colors: ["black", "blue", "red", "multi"],
	screen: 6.1,
	headphone: true,
},
{
	name : "P20",
	brand: "Huawei",
	colors: ["black", "blue", "gold", "twilight"],
	screen: 5.8,
	headphone: false,
},
{
	name : "Pixel 4",
	brand: "Google",
	colors: ["black", "white", "orange"],
	screen: 5.7,
	headphone: false,
},{
	name : "Pixel 3",
	brand: "Google",
	colors: ["black", "white", "pink"],
	screen: 5.5,
	headphone: false,
}
];

function printInfo(phone, i){
	var card = "";
	card += "<div class='card'><h2 class='card-title card-header'>"+phones[i].name+"</h1>";
	card += "<p><div class='card-body'>Brand: "+phones[i].brand+"</p>";
	card += "<p>Colours:</p>";
	for(let j= 0; j<phones[i].colors.length; j++){
		card += "<li>"+phones[i].colors[j]+"</li>";
	}
	card += "<p>Screen Size: "+phones[i].screen+"in</p>";
	if(phone[i].headphone === true){
		card += "<p>Has Headphone Jack: <i class='fas fa-check-circle'></i></p>";
	}
	else if(phone[i].headphone === false){
		card += "<p>Has Headphone Jack: <i class='fas fa-times-circle'></i></p>";
	}
	card += '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#phoneModal">View Phone</button></div></div>';
	document.getElementById("output").innerHTML += card;
}

document.getElementById("printPhones").addEventListener("click", function(){
	document.getElementById("output").innerHTML = "";

	for(let i = 0; i<phones.length; i++){
		printInfo(phones, i);
	}
});

// print a chosen brands phones
document.getElementById("filterPhoneBrand").addEventListener("click", function(){
	var brand = document.getElementById("brands").value;
	document.getElementById("outputTop").innerHTML = "";
	document.getElementById("output").innerHTML = "";

	for(let i = 0; i<phones.length; i++){
		if(phones[i].brand === brand){
			printInfo(phones, i);
		}
	}
});

// print an inputted phone info
document.getElementById("thisPhone").addEventListener("click", function(){
	var phone = document.getElementById("phoneInput").value;
	document.getElementById("outputTop").innerHTML = "";
	document.getElementById("output").innerHTML = "";
	if(phone != ""){
		for(let i = 0; i<phones.length; i++){
			if(phones[i].name.toLowerCase() === phone.toLowerCase()){
				printInfo(phones, i);
			}
		}
	}
	else{
		document.getElementById("output").innerHTML += "Please enter a phone";
	}
});

// print a phone with a chosen colour
document.getElementById("filterPhoneColours").addEventListener("click", function(){
	var colour = document.getElementById("phoneInput").value;
	var count = 0;
	document.getElementById("outputTop").innerHTML = "";
	document.getElementById("output").innerHTML = "";
	if(colour != "" && isNaN(colour)){
		for(var i = 0; i<phones.length; i++){
			if(phones[i].colors.includes(colour)){
				printInfo(phones, i);
				count++;
			}
		}
		document.getElementById("outputTop").innerHTML = "<br>There are "+count+" phones that have a "+colour+" colour option";
	}
	else{
		document.getElementById("output").innerHTML += "Please enter a colour";
	}
});

// print a phone greater than a chosen size
document.getElementById("filterPhoneSize").addEventListener("click", function(){
	var size = parseFloat(document.getElementById("phoneInput").value);
	var count = 0;
	document.getElementById("outputTop").innerHTML = "";
	document.getElementById("output").innerHTML = "";

	if(size != "" && !isNaN(size)){
		for(var i = 0; i<phones.length; i++){
			if(phones[i].screen >= size){
				printInfo(phones, i);
				count++;
			}
		}
		document.getElementById("outputTop").innerHTML = "<br>There are "+count+" phones that are bigger than "+size+"in";
	}
	else{
		document.getElementById("output").innerHTML += "Please enter a size";
	}
});

// print a phone that has a headphone jack
document.getElementById("filterJack").addEventListener("click", function(){
	var count = 0;
	document.getElementById("outputTop").innerHTML = "";
	document.getElementById("output").innerHTML = "";
	if(document.getElementById('true').checked){
		for(var i = 0; i<phones.length; i++){
			if(phones[i].headphone === true){
				printInfo(phones, i);
				count++;
			}
			document.getElementById("outputTop").innerHTML = "<br>There are "+count+" phones that have a headphone jack";
		}
	}
	if(document.getElementById('false').checked){
		for(var i = 0; i<phones.length; i++){
			if(phones[i].headphone === false){
				printInfo(phones, i);
				count++;
			}
			document.getElementById("outputTop").innerHTML = "<br>There are "+count+" phones that don't have a headphone jack";
		}	
	}
});


// sort phones
document.getElementById("filterJack").addEventListener("click", function(){
	var count = 0;
	document.getElementById("outputTop").innerHTML = "";
	document.getElementById("output").innerHTML = "";
	if(document.getElementById('true').checked){
		for(var i = 0; i<phones.length; i++){
			if(phones[i].headphone === true){
				printInfo(phones, i);
				count++;
			}
			document.getElementById("outputTop").innerHTML = "<br>There are "+count+" phones that have a headphone jack";
		}
	}
	if(document.getElementById('false').checked){
		for(var i = 0; i<phones.length; i++){
			if(phones[i].headphone === false){
				printInfo(phones, i);
				count++;
			}
			document.getElementById("outputTop").innerHTML = "<br>There are "+count+" phones that don't have a headphone jack";
		}	
	}
});
