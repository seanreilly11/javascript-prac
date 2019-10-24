// // document.write("It can't be deleted<br>");
// // document.write('"It can\'t be deleted"');
// function printInput(){
// 	// var label = $('label[for="input"]').text();
// 	// document.getElementById("output").innerHTML += document.getElementById("input").value;

// 	var cost = 24.99;
// 	var amount = document.getElementById("input").value;
// 	var total = 24.99 *amount;

// 	// console.log(cost, amount, total);
// 	document.getElementById("output").innerHTML = "It will cost $" +total+" for "+ amount+ " steaks.";

// }

// function printExpenses(){
// 	var food1 = parseInt(document.getElementById("food1").value);
// 	var transport1 = parseInt(document.getElementById("transport1").value);
// 	var bills1 = parseInt(document.getElementById("bills1").value);
// 	var total1 = food1+transport1+bills1;
// 	console.log(food1);
// 	var food2 = parseInt(document.getElementById("food2").value);
// 	var transport2 = parseInt(document.getElementById("transport2").value);
// 	var bills2 = parseInt(document.getElementById("bills2").value);
// 	var total2 = food2+transport2+bills2;

// 	var food3 = parseInt(document.getElementById("food3").value);
// 	var transport3 = parseInt(document.getElementById("transport3").value);
// 	var bills3 = parseInt(document.getElementById("bills3").value);
// 	var total3 = food3+transport3+bills3;

// 	// var food = [120,70,165]; 
// 	// var transport = [45,60,25];
// 	// var bills = [220, 260,212];

// 	// var total1 = food[0]+transport[0]+bills[0];
// 	// var total2 = food[1]+transport[1]+bills[1];
// 	// var total3 = food[2]+transport[2]+bills[2];


// 	var totals = [total1, total2, total3];


// 	document.getElementById("output").innerHTML = "The total expense for person 1 is $" + total1+".<br>";
// 	document.getElementById("output").innerHTML += "The total expense for person 2 is $" + total2+".<br>";
// 	document.getElementById("output").innerHTML += "The total expense for person 3 is $" + total3+".<br>";


// 	if(total1> total2 & total1>total3){
// 		document.getElementById("output").innerHTML += "Person 1 spends the most on expenses.<br>";
// 	}
// 	else if(total2> total1 & total2>total3){
// 		document.getElementById("output").innerHTML += "Person 2 spends the most on expenses.<br>";
// 	}
// 	else if(total3> total2 & total3>total1){
// 		document.getElementById("output").innerHTML += "Person 3 spends the most on expenses.<br>";
// 	}
// 	if(total1< total2 & total1<total3){
// 		document.getElementById("output").innerHTML += "Person 1 spends the least on expenses.<br>";
// 	}
// 	else if(total2< total1 & total2<total3){
// 		document.getElementById("output").innerHTML += "Person 2 spends the least on expenses.<br>";
// 	}
// 	else if(total3< total2 & total3<total1){
// 		document.getElementById("output").innerHTML += "Person 3 spends the least on expenses.<br>";
// 	}

// 	var average = (total1+total2+total3)/3;
// 	document.getElementById("output").innerHTML += "The average expense for living in Wellington is $"+average.toFixed(2)+"<br>";
// }

// const list = ["Soup","Lettuce","Cheese","Milk","Eggs","Beer"] 
// function doForLoop(){
// 	for(let i=0; i<list.length; i++){
// 		document.getElementById("output").innerHTML += list[i]+"<br>";
// 	}
// }

// function doForNestLoop(){
// 	for(let i=0; i<10; i++){
// 		for(let j=0; j<i; j++){
// 			document.getElementById("output").innerHTML += "*";
// 		}
// 		document.getElementById("output").innerHTML += "<br>";
// 	}
// }


// const arr = ["Soup","Lettuce","Cheese","Milk","Eggs","Beer"];
// const numbers = [2,1315351,5,1,1,5,7,2,25,6346,3];
// function doForArrayLoop(){
// 	var sum = 0;
// 	for(let i=0; i<arr.length; i++){
// 		document.getElementById("output").innerHTML += arr[i]+"<br>";
// 	}
// 	document.getElementById("output").innerHTML += arr.sort() + "<br>";
// 	for(let i=0; i<numbers.length; i++){
// 		sum += numbers[i];	
// 	}
// 	document.getElementById("output").innerHTML += sum +"<br>";
// 	var highest = numbers.sort();
// 	document.getElementById("output").innerHTML += highest;
// }


// const name = ["Sam","Liam","Lucy","Felicia"];
// const age = [18,20,16,32];
// function doForSwitch(){
// 	var highest = 0;
// 	for(let i=0; i<age.length; i++){
// 		if(age[i]>highest){
// 			highest = age[i];
// 			var index = i;
// 		}
// 	}
// 	// document.getElementById("output").innerHTML += "<br>"+name[index] +" is the oldest at "+age[index];

// 	switch(index){
// 		case 0:
// 			document.getElementById("output").innerHTML += "<br>"+name[index] +" is the oldest at "+age[index];
// 			break;
// 		case 1:
// 			document.getElementById("output").innerHTML += "<br>"+name[index] +" is the oldest at "+age[index];
// 			break;
// 		case 2:
// 			document.getElementById("output").innerHTML += "<br>"+name[index] +" is the oldest at "+age[index];
// 			break;
// 		case 3:
// 			document.getElementById("output").innerHTML += "<br>"+name[index] +" is the oldest at "+age[index];
// 			break;
// 	}
// }


// // function doJobPrint(){
// // 	var project1Marks = [83,72,81];
// // 	var project2Marks = [93,89,98];
// // 	var project3Marks = [100,76,93];
// // 	var employees = ["Mark", "Shelley", "Peter"];
// // }

// function doJobPrint(){
// 	var project1Marks = []; // will contain each employees marks for each project
// 	var project2Marks = [];
// 	var project3Marks = [];
// 	var averages = []; // contains average marks for each employee calculated later 
// 	var employees = [];  // empty array to push employee names on prompt

// 	var numberOfE = parseInt(prompt("How many employees do you have?"));
// 	if(numberOfE == null || !isNaN(numberOfE)){
// 		for(let i=0; i<numberOfE; i++){ // asks for the employee names as many times as there are employees
// 			let j = i+1;
// 			employees.push(prompt("Please enter employee "+ j + "'s name:"));
// 		}

// 		for(let i=0; i<employees.length; i++){  // get marks for all employees from prompts
// 			project1Marks.push(parseInt(prompt("What is "+employees[i]+"'s mark for project one?")));
// 			project2Marks.push(parseInt(prompt("What is "+employees[i]+"'s mark for project two?")));
// 			project3Marks.push(parseInt(prompt("What is "+employees[i]+"'s mark for project three?")));
// 		}

// 		for(let i=0; i<employees.length; i++){  // find average for all employees 
// 			var average = project1Marks[i] + project2Marks[i] + project3Marks[i];
// 			averages.push(Math.round(average/3));
// 		}

// 		// find highest performing average employee
// 		var highest = 0;
// 		for(let i=0; i<averages.length; i++){
// 			if(averages[i]>highest){
// 				highest = averages[i];
// 				var index = i;
// 			}
// 		}

// 		//print highest performing employee
// 		document.getElementById("output").innerHTML += "<br>"+employees[index] +" is the best with "+averages[index]+"% average performace";

// 		// print what happens to them based on their performance
// 		for(let i=0; i<averages.length; i++){
// 			if(averages[i] >= 90){
// 				document.getElementById("output").innerHTML += "<br>"+employees[i] +" is eligible for increment with an average performace of "+averages[i]+"%";
// 			}
// 			else if(averages[i] >= 70 && averages[i]<90){
// 				document.getElementById("output").innerHTML += "<br>"+employees[i] +" is eligible to continue in project team with an average performace of "+averages[i]+"%";
// 			}
// 			else{
// 				document.getElementById("output").innerHTML += "<br>"+employees[i] +" must change designation with an average performace of "+averages[i]+"%";
// 			}
// 		}
// 	}else{
// 		alert("Number of employees must be a number. Please try again.");
// 	}
// }

// function doJobPrintFun(){
// 	var project1Marks = []; // will contain each employees marks for each project
// 	var project2Marks = [];
// 	var project3Marks = [];
// 	var averages = []; // contains average marks for each employee calculated later 
// 	var employees = [];  // empty array to push employee names on prompt

// 	var numberOfE = parseInt(prompt("How many employees do you have?"));
// 	if(numberOfE == null || !isNaN(numberOfE)){
// 		for(let i=0; i<numberOfE; i++){ // asks for the employee names as many times as there are employees
// 			let j = i+1;
// 			employees.push(prompt("Please enter employee "+ j + "'s name:"));
// 		}

// 		getMarks(employees);

// 		getAverages(employees, project1Marks, project2Marks, project3Marks);

// 		// find highest performing average employee
// 		var highest = 0;
// 		for(let i=0; i<averages.length; i++){
// 			if(averages[i]>highest){
// 				highest = averages[i];
// 				var index = i;
// 			}
// 		}

// 		printInfo(employees, averages);
// 	}else{
// 		alert("Number of employees must be a number. Please try again.");
// 	}
// }

// function getMarks(employees){
// 	for(let i=0; i<employees.length; i++){  // get marks for all employees from prompts
// 			project1Marks.push(parseInt(prompt("What is "+employees[i]+"'s mark for project one?")));
// 			project2Marks.push(parseInt(prompt("What is "+employees[i]+"'s mark for project two?")));
// 			project3Marks.push(parseInt(prompt("What is "+employees[i]+"'s mark for project three?")));
// 		}
// 		return project1Marks, project2Marks, project3Marks;
// }

// function getAverages(employees, p1, p2, p3){
// 	for(let i=0; i<employees.length; i++){  // find average for all employees 
// 			var average = p1[i] + p2[i] + p3[i];
// 			averages.push(Math.round(average/3));
// 		}
// 		return averages;
// }

// function printInfo(employees, averages){
// 		//print highest performing employee
// 		document.getElementById("output").innerHTML += "<br>"+employees[index] +" is the best with "+averages[index]+"% average performace";

// 		// print what happens to them based on their performance
// 		for(let i=0; i<averages.length; i++){
// 			if(averages[i] >= 90){
// 				document.getElementById("output").innerHTML += "<br>"+employees[i] +" is eligible for increment with an average performace of "+averages[i]+"%";
// 			}
// 			else if(averages[i] >= 70 && averages[i]<90){
// 				document.getElementById("output").innerHTML += "<br>"+employees[i] +" is eligible to continue in project team with an average performace of "+averages[i]+"%";
// 			}
// 			else{
// 				document.getElementById("output").innerHTML += "<br>"+employees[i] +" must change designation with an average performace of "+averages[i]+"%";
// 			}
// 		}
// }

// //funcional programming. Call the funtion later
// function doGreetFun(name){
// 	document.getElementById("output").innerHTML += "<br>Hi, "+name;
// }
// // doGreetFun("Sean");


// // function. call it elsewhere with parameters inputted
// function totalExpenses(f,t,b){
// 	var gt = f+t+b;
// 	return gt;
// }

// function getAv(gt){
// 	return gt/3;
// }
// // var gt = totalExpenses(100,200,153);
// // var ave = getAv(gt);

// // document.getElementById("output").innerHTML += "<br>Total expenses is: $"+gt;
// // document.getElementById("output").innerHTML += "<br>Average expenses is: $"+ave;

// function doMulti(){
// 	var number = parseInt(prompt("Enter number: "));
// 	for(let i=0; i<21; i++){
// 		document.getElementById("output").innerHTML += "<br>"+number+" x "+ i +" = " +number*i;
// 	}
// }


// function checkPalindrome(){
// 	var givenString = document.getElementById("palindrome").value;
// 	var reversedString = givenString.split("");
// 	reversedString = reversedString.reverse();
// 	reversedString = reversedString.join("");
// 	if(givenString === reversedString){
// 		document.getElementById("output").innerHTML = givenString + " is a palidrome";
// 	}
// 	else{
// 		document.getElementById("output").innerHTML = givenString + " is not a palidrome";
// 	}
// }

// function checkOddEven(){
// 	var x = parseInt(document.getElementById("oddEven").value);
// 	if(x%2 === 0){
// 		document.getElementById("output").innerHTML = x + " is an even number";
// 	}
// 	else{
// 		document.getElementById("output").innerHTML = x + " is an odd number";
// 	}
// }


// function changeWord(){
// 	var givenSentence = "The good news is that everyone makes mistakes. All of the mistakes you make, have been made by others who started off just like you.";
// 	var replacedSentence = givenSentence.split(" ");
// 	for(let i=0; i<replacedSentence.length; i++){
// 		if(replacedSentence[i] === "mistakes"){
// 			replacedSentence[i] = "bugs";
// 		}
// 		else if(replacedSentence[i] === "mistakes."){
// 			replacedSentence[i] = "bugs.";
// 		}
// 	}
// 	replacedSentence = replacedSentence.join(" ");
// 	document.getElementById("output").innerHTML = "Given sentence: " +givenSentence;
// 	document.getElementById("output").innerHTML += "<br>Replaced sentences: " +replacedSentence;
// }


// var foods = ["Pizza", "Pies", "Burgers"];
// document.getElementById("addItem").addEventListener("click", function(){
// 	var foodItems = document.getElementById("arrayItem").value;
// 	var foodItem = foodItems.charAt(0).toUpperCase() + foodItems.substring(1);
// 	if(foodItem === ""){
// 		document.getElementById("output").innerHTML = "";
// 		document.getElementById("output").innerHTML += "Please enter a food item to add";
// 	}
// 	else if(!foods.includes(foodItem)){
// 		foods.push(foodItem);
// 		document.getElementById("output").innerHTML = "";
// 		document.getElementById("output").innerHTML += "Foods array has been updated by adding "+foodItem;
// 		document.getElementById("output").innerHTML += "<br>Foods array is now: "+foods;
// 	}
// 	else{
// 		document.getElementById("output").innerHTML = "";
// 		document.getElementById("output").innerHTML += "Food item cannot be added as it is already in array";
// 	}
// });

// document.getElementById("sortItem").addEventListener("click", function(){
// 	foods.sort();
// 	document.getElementById("output").innerHTML = "";
// 	document.getElementById("output").innerHTML += "Foods array has been sorted in descending alphabetical order: "+foods;
// });

// document.getElementById("deleteItem").addEventListener("click", function(){
// 	var foodItem = document.getElementById("arrayItem").value.toLowerCase();
// 	// turn all elements to lower case
// 	for(let i=0; i<foods.length; i++){
// 		foods[i] = foods[i].toLowerCase();
// 	}	
// 	// if no food is entered
// 	if(foodItem === ""){
// 		document.getElementById("output").innerHTML = "";
// 		document.getElementById("output").innerHTML += "Please enter a food item to delete";
// 	}
// 	// if food item is in the array delete it
// 	else if(foods.includes(foodItem)){
// 		var index = foods.indexOf(foodItem);
// 		foods.splice(index, 1);
// 		document.getElementById("output").innerHTML = "";
// 		document.getElementById("output").innerHTML += "Foods array has been updated by removing "+foodItem;
// 		for(let i=0; i<foods.length; i++){
// 			foods[i] = foods[i].charAt(0).toUpperCase() + foods[i].substring(1);
// 		}	
// 		document.getElementById("output").innerHTML += "<br>Foods array is now: "+foods;
// 	}
// 	// if its not in the array say it isnt
// 	else{
// 		document.getElementById("output").innerHTML = "";
// 		document.getElementById("output").innerHTML += "Food item cannot be deleted because it is not in the array";
// 	}
// });

// document.getElementById("searchItem").addEventListener("click", function(){
// 	var foodItem = document.getElementById("arrayItem").value.toLowerCase();
// 	// turn all elements to lower case
// 	for(let i=0; i<foods.length; i++){
// 		foods[i] = foods[i].toLowerCase();
// 	}	
// 	// if no food is entered
// 	if(foodItem === ""){
// 		document.getElementById("output").innerHTML = "";
// 		document.getElementById("output").innerHTML += "Please enter a food item to search";
// 	}
// 	else if(foods.includes(foodItem)){
// 		for(let i=0; i<foods.length; i++){
// 			foods[i] = foods[i].charAt(0).toUpperCase() + foods[i].substring(1);
// 		} 
// 		foodItem = foodItem.charAt(0).toUpperCase() + foodItem.substring(1);
// 		document.getElementById("output").innerHTML = "";
// 		document.getElementById("output").innerHTML += "Foods array does contain the item: " + foodItem;
// 	}
// 	else{
// 		document.getElementById("output").innerHTML = "";
// 		document.getElementById("output").innerHTML += "Foods array does not contain the item: " + foodItem;
// 	}

// });


// document.getElementById("printItem").addEventListener("click", function(){
// 	document.getElementById("output").innerHTML = "";
// 	document.getElementById("output").innerHTML += "Foods array is : "+foods;
// });



// DOGS ARRAY OBJECTS
var dogs = [
{
	name : "Browny",
	id   : "AB101",
	breed: "Australian Bulldog",
	color: "Brown and White",
	height: 50,
	age   : 8,
	photo: "images/aussieBulldog.jpg"

},
{
	name : "Blacky",
	id   : "AS102",
	breed: "American Staffordshire",
	color: "Black and White",
	height: 60,
	age   : 10,
	photo: "images/americanStaffordshire.jpg"
},
{
	name : "Beaggie",
	id   : "B103",
	breed: "Beagle",
	color: "Brown, white and black",
	height: 35,
	age   : 6,
	photo: "images/beagle.jpg"
},
{
	name : "Alasky",
	id   : "AM104",
	breed: "Alaskan Malamute",
	color: "Black and White",
	height: 70,
	age   : 11,
	photo: "images/alaskanMalamute.jpg"
},
{
	name : "Britty",
	id   : "BB105",
	breed: "British Bulldog",
	color: "Brown and White",
	height: 30,
	age   : 13,
	photo: "images/britishBulldog.jpg"
}
];

// document.getElementById("printDogs").addEventListener("click", function(){
// 	for(let i = 0; i<dogs.length; i++){
// 		document.getElementById("output").innerHTML += "<br><h1>"+dogs[i].name+"</h1>";
// 		document.getElementById("output").innerHTML += "<br><p>ID: "+dogs[i].id+"</p>";
// 		document.getElementById("output").innerHTML += "<br><p>Breed : "+dogs[i].breed+"</p>";
// 		document.getElementById("output").innerHTML += "<br><p>Color: "+dogs[i].color+"</p>";
// 		document.getElementById("output").innerHTML += "<br><p>Height: "+dogs[i].height+"</p>";
// 		document.getElementById("output").innerHTML += "<br><p>Age: "+dogs[i].age+"</p>";
// 		document.getElementById("output").innerHTML += "<br><img src="+dogs[i].photo+">";
// 	}
// });

// document.getElementById("thisDog").addEventListener("click", function(){
// 	var dog = document.getElementById("dogInput").value;
// 	for(let i = 0; i<dogs.length; i++){
// 		if(dogs[i].name.toLowerCase() === dog.toLowerCase()){
// 			document.getElementById("output").innerHTML = "<br><h1>"+dogs[i].name+"</h1>";
// 			document.getElementById("output").innerHTML += "<br><p>ID: "+dogs[i].id+"</p>";
// 			document.getElementById("output").innerHTML += "<br><p>Breed : "+dogs[i].breed+"</p>";
// 			document.getElementById("output").innerHTML += "<br><p>Color: "+dogs[i].color+"</p>";
// 			document.getElementById("output").innerHTML += "<br><p>Height: "+dogs[i].height+"</p>";
// 			document.getElementById("output").innerHTML += "<br><p>Age: "+dogs[i].age+"</p>";
// 			document.getElementById("output").innerHTML += "<br><img src="+dogs[i].photo+">";
// 		}
// 	}
// });


// document.getElementById("filterDogHeight").addEventListener("click", function(){
// 	document.getElementById("output").innerHTML = "";
// 	var filter = parseInt(document.getElementById("dogInput").value);
// 	if(!isNaN(filter)){
// 		for(let i = 0; i<dogs.length; i++){
// 			if(dogs[i].height >= filter){
// 				document.getElementById("output").innerHTML += "<br><h1>"+dogs[i].name+"</h1>";
// 				document.getElementById("output").innerHTML += "<br><p>ID: "+dogs[i].id+"</p>";
// 				document.getElementById("output").innerHTML += "<br><p>Breed : "+dogs[i].breed+"</p>";
// 				document.getElementById("output").innerHTML += "<br><p>Color: "+dogs[i].color+"</p>";
// 				document.getElementById("output").innerHTML += "<br><p>Height: "+dogs[i].height+"</p>";
// 				document.getElementById("output").innerHTML += "<br><p>Age: "+dogs[i].age+"</p>";
// 				document.getElementById("output").innerHTML += "<br><img src="+dogs[i].photo+">";
// 			}
// 		}
// 	}
// });


// // bull dog
// document.getElementById("filterDogBreed").addEventListener("click", function(){
// 	document.getElementById("output").innerHTML = "";
// 	var breed = document.getElementById("dogInput").value;
// 	for(let i = 0; i<dogs.length; i++){
// 		if(dogs[i].breed.indexOf(breed) > (-1)){
// 			document.getElementById("output").innerHTML += "<br><h1>"+dogs[i].name+"</h1>";
// 			document.getElementById("output").innerHTML += "<br><p>ID: "+dogs[i].id+"</p>";
// 			document.getElementById("output").innerHTML += "<br><p>Breed : "+dogs[i].breed+"</p>";
// 			document.getElementById("output").innerHTML += "<br><p>Color: "+dogs[i].color+"</p>";
// 			document.getElementById("output").innerHTML += "<br><p>Height: "+dogs[i].height+"</p>";
// 			document.getElementById("output").innerHTML += "<br><p>Age: "+dogs[i].age+"</p>";
// 			document.getElementById("output").innerHTML += "<br><img src="+dogs[i].photo+">";
// 		}
// 	}

// });











