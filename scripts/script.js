var sumA=0;
var sumB=0;
var sumTot=0;
var occA=0;
var occB=0;

function getValues()
{
var name=document.getElementById('user-id').value;
var int1=document.getElementById('intj-1').value;
var int2=document.getElementById('intj-2').value;
var lim=document.getElementById('input-limit').value;
console.log(name);
console.log(int1);
console.log(int2);
console.log(lim);


for(count=1;count<lim;count++)
{
	if (count%int1===0) 
	{
		console.log(count);
		sumA+=count;
		occA+=1;
	}

	if (count%int2===0)
	{
		console.log(count);
		sumB+=count;
		occB+=1;
	}

	if ((count%int1===0)||(count%int2===0))
	{
		sumTot+=count;
	}
	
}
console.log("Well, "+name+", the results are as")
console.log("Multiples of "+int1+" had "+occA+" occurences");
console.log("Sum of all the multiples of "+int1+" is "+sumA);
console.log("Multiples of "+int2+" had "+occB+" occurences");
console.log("Sum of all the multiples of "+int2+" is "+sumB);
console.log("Sum of all the multiples of "+int1+" and "+int2+" is "+sumTot);

var textChange = document.getElementById("username");
textChange.textContent =name;
var textChange = document.getElementById("occ1");
textChange.textContent =occA;
var textChange = document.getElementById("inp1");
textChange.textContent =int1;
var textChange = document.getElementById("occ2");
textChange.textContent =occB;
var textChange = document.getElementById("inp2");
textChange.textContent =int2;
var textChange = document.getElementById("limit");
textChange.textContent =lim;
var textChange = document.getElementById("total");
textChange.textContent =sumTot;

var result=document.getElementById("answer-announcer").style;
result.visibility="visible";


sumA=0;
sumB=0;
sumTot=0;
occA=0;
occB=0;


}