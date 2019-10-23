
//reading form data

// document.getElementById("submit1").addEventListener("click", function(){
// 	var name = document.getElementById("name").value;
// 	var addy = document.getElementById("addy").value;

// 	document.getElementById("name-info").innerHTML += name + " " + email;
// });

var names = [];
var projectAMarks = [];
var projectBMarks = [];
var projectCMarks = [];
var average = [];

var n = parseInt(prompt("How many employees do you have?"));
document.getElementById("ename").focus();

document.getElementById("saveData").addEventListener("click", function(){
	if(names.length<n){
		var ename = document.getElementById("ename").value;
		var projA = parseInt(document.getElementById("pA").value);
		var projB = parseInt(document.getElementById("pB").value);
		var projC = parseInt(document.getElementById("pC").value);
		var ave = (projA + projB + projC)/3;
		ave=parseInt(ave.toFixed(2));
		document.getElementById("average").value = ave;

		names.push(ename);
		projectAMarks.push(projA);
		projectBMarks.push(projB);
		projectCMarks.push(projC);
		average.push(ave);

		var highest = 0;
		for(let i=0; i<average.length; i++){
			if(average[i]>highest){
				highest = average[i];
				var index = i;
			}
		}
		document.getElementById("highest").innerHTML = names[index] + " has the highest performace with an average mark of "+average[index]+"%";

		if(ave> 90){
			document.getElementById("eData").innerHTML += "<br>" +ename+" is eligible for increment with an average performance of " + ave +"%"; 
		}
		else if(ave>=70 && ave<90){
			document.getElementById("eData").innerHTML += "<br>" +ename+" is eligible to continue in project team with an average performance of " + ave +"%"; 
		}
		else{
			document.getElementById("eData").innerHTML += "<br>" +ename+" must change designation with an average performance of " + ave +"%"; 
		}
		// for(let i=average.length-1; i<average.length; i++){
			// if(average[i]> 90){
			// 	document.getElementById("eData").innerHTML += "<br>" +names[i]+" is eligible for increment with an average performance of " + average[i] +"%"; 
			// }
			// else if(average[i]>=70 && average[i]<90){
			// 	document.getElementById("eData").innerHTML += "<br>" +names[i]+" is eligible to continue in project team with an average performance of " + average[i] +"%"; 
			// }
			// else{
			// 	document.getElementById("eData").innerHTML += "<br>" +names[i]+" must change designation with an average performance of " + average[i] +"%"; 
			// }
		// }
		// document.getElementById("eData").innerHTML += ename + "<br>" + projA + "<br>" + projB + "<br>" + projC + "<br>";
	}
	else{
		alert("You have already entered all of your employees details");
	}
});

document.getElementById("newEmp").addEventListener("click", function(){
	if(names.length<n){
		document.getElementById("ename").value = "";
		document.getElementById("pA").value = "";
		document.getElementById("pB").value = "";
		document.getElementById("pC").value = "";
		document.getElementById("average").value = "";
		document.getElementById("ename").focus();
	}
	else{
		alert("You have already entered all of your employees details");		
	}
});