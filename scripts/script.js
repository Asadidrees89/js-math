var clickInfo=0;
var clickInfo2=0;


function hideshow1()
{
	var show01=document.getElementsByClassName("clickable")[0].style;
	var show1=document.getElementById("ass-41").style;
	if(clickInfo===0)
	{
		show01.padding="1em";
		show01.margin="0";
		show01.textalign="left"
		show01.backgroundcolor="white";
		show1.display="block";
		clickInfo=1;
	}
	else
	{
		show01.padding="";
		show01.margin="";
		show01.textalign=""
		show01.backgroundcolor="";
		show1.display="none";
		clickInfo=0;	
	}
}


function hideshow2()
{
	var show02=document.getElementsByClassName("clickable")[1].style;
	var show2=document.getElementById("ass-42").style;
	if(clickInfo2===0)
	{
		show02.padding="1em";
		show02.margin="0";
		show02.textalign="left"
		show02.backgroundcolor="white";
		show2.display="block";
		clickInfo2=1;
	}
	else
	{
		show02.padding="";
		show02.margin="";
		show02.textalign=""
		show02.backgroundcolor="";
		show2.display="none";
		clickInfo2=0;	
	}
}

function clearCell(x)
{
	if(x===1)
	{
	var clearNameCell=document.getElementById("user-id");
	clearNameCell.value="";
	}
	else
	{
	var clearNameCell=document.getElementById("input-limit");
	clearNameCell.value="";
	}
}

function clearCell2(x)
{
	if(x===1)
	{
	var clearNameCell=document.getElementById("user-id2");
	clearNameCell.value="";
	}
	else
	{
	var clearNameCell=document.getElementById("limit-2");
	clearNameCell.value="";
	}
}

								/* FOR ASSIGNMENT 1*/

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
										/*FOR ASSIGNMENT 2*/

var fibAdd=0;
var fibPrev1=0;
var fibSeq=1;
var fibSum=0;
var count=0;
var typeCount=0;

function getValues2() 					
{
	var name=document.getElementById('user-id2').value;
	var lim=document.getElementById('limit-2').value;
	var sumType=document.getElementById('sumType').value;


		while(fibSeq+fibAdd<=lim)
		{
			fibPrev1=fibSeq;
			fibSeq+=fibAdd;
			fibAdd=fibPrev1;
			count+=1;

			switch(sumType)
			{
				case("Even"):
					if((fibSeq%2)===0)
					{	
						fibSum+=fibSeq;
						typeCount+=1;
					}
					break;
				case("Odd"):
					if((fibSeq%2)===1)
					{	
						fibSum+=fibSeq;
						typeCount+=1;
					}
					break;
				case("All"):
						fibSum+=fibSeq;
						typeCount+=1;
					break;
				default:			
						break;
			};
		}


var textChange = document.getElementById("username2");
textChange.textContent =name;
var textChange = document.getElementById("occ1b");
textChange.textContent =count;
var textChange = document.getElementsByClassName("typeQuan")[0];
textChange.textContent =typeCount;
var textChange = document.getElementsByClassName("typeQuan")[1];
textChange.textContent =typeCount;
var textChange = document.getElementById("type");
textChange.textContent =sumType;
var textChange = document.getElementById("highTerm");
textChange.textContent =fibSeq;
var textChange = document.getElementById("total2");
textChange.textContent =fibSum;

var result=document.getElementById("answer-announcer2").style;
result.visibility="visible";


fibAdd=0;
fibPrev1=0;
fibSeq=1;
fibSum=0;
count=0;
typeCount=0;

}