

console.log("game.js file is connected");



var wins = 0;
var loses = 0;

var randomVal = Math.floor((Math.random() * 120) + 19);
console.log(randomVal);
document.getElementById("ran").innerHTML="Your Random Number To Get To: " + randomVal;


var purpVal = Math.floor((Math.random()*12)+1);
var blueVal = Math.floor((Math.random()*12)+1);
var yellowVal = Math.floor((Math.random()*12)+1);
var greenVal = Math.floor((Math.random()*12)+1);

function myFunction() 
{
	purpVal
    console.log(purpVal);
    {
    	document.getElementById("demo").innerHTML=" Your New Total: " + (purpVal);
    	if(purpVal>randomVal){
    		document.getElementById("yaa").innerHTML="YOU LOSE!!";
    		loses++;
    		document.getElementById("score").innerHTML=" You Win: " + wins +" You Lose: " + loses;
    		setTimeout(match,1000);
    		
    		}
    	else if(purpVal==randomVal){document.getElementById("lmao").innerHTML="YOU WIN!!";
    		wins++;
    		document.getElementById("score").innerHTML=" You Win: " + wins +" You Lose: " + loses;
    		setTimeout(match,1000);}

    }
/*reset()
*/}


function myFunctionOne() 
{
	blueVal
    console.log(blueVal);
    {
    	document.getElementById("demoA").innerHTML=" Your New Total: " + (blueVal+purpVal);
    	if((blueVal+purpVal)>randomVal){document.getElementById("wtf").innerHTML="YOU LOSE!!";
    	loses++;
    	document.getElementById("score").innerHTML=" You Win: " + wins +" You Lose: " + loses;

    	setTimeout(match,1000);}
    	else if((purpVal+blueVal)==randomVal){document.getElementById("rofl").innerHTML="YOU WIN!!";
    	wins++;
    	document.getElementById("score").innerHTML=" You Win: " + wins +" You Lose: " + loses;
    	setTimeout(match,1000);}
    }

}
function myFunctionTwo() 
{
	yellowVal
    console.log(yellowVal);
    {
    	document.getElementById("demoB").innerHTML=" Your New Total: " + (yellowVal+blueVal+purpVal);
    	if((blueVal+purpVal+yellowVal)>randomVal){document.getElementById("ftw").innerHTML="YOU LOSE!!";
    	loses++;
    	document.getElementById("score").innerHTML=" You Win: " + wins +" You Lose: " + loses;
    	setTimeout(match,1000);}
    	else if((purpVal+blueVal+yellowVal)==randomVal){document.getElementById("moo").innerHTML="YOU WIN!!";
    	wins++;
    	document.getElementById("score").innerHTML=" You Win: " + wins +" You Lose: " + loses;
    	setTimeout(match,1000);}

    }

}
function myFunctionThree()
{
	greenVal
    console.log(greenVal);
    {
    	document.getElementById("demoC").innerHTML=" Your New Total: " + (greenVal+yellowVal+blueVal+purpVal);
    	if((blueVal+purpVal+yellowVal+greenVal)>randomVal){
		document.getElementById("lol").innerHTML="YOU LOSE!!";
		loses++;
		document.getElementById("score").innerHTML=" You Win: " + wins +" You Lose: " + loses;
		setTimeout(match,1000);;
		console.log(loses);
	}
    	else if((blueVal+purpVal+yellowVal+greenVal)==randomVal){
    	document.getElementById("lmfao").innerHTML="YOU WIN!!";
    	wins++
    	document.getElementById("score").innerHTML=" You Win: " + wins +" You Lose: " + loses;
    	setTimeout(match,1000);;
    	console.log(loses);

    	}
    	else if((blueVal+purpVal+yellowVal+greenVal) < randomVal){
    	document.getElementById("turbine").innerHTML="YOU WIN!!"
    	wins++;
    	document.getElementById("score").innerHTML=" You Win: " + wins +" You Lose: " + loses;
    	setTimeout(match,1000);;
    	console.log(wins);
    }

    
    
}

var total = [purpVal+blueVal+yellowVal+greenVal];
console.log(total);


}
function match(){
	/*{setTimeout(function () { document.location.reload()}, 2000);}*/
 randomVal = Math.floor((Math.random() * 120) + 19);
 purpVal = Math.floor((Math.random()*12)+1);
 blueVal = Math.floor((Math.random()*12)+1);
 yellowVal = Math.floor((Math.random()*12)+1);
 greenVal = Math.floor((Math.random()*12)+1);
 document.getElementById("demoA").innerHTML="";
 document.getElementById("demo").innerHTML="";
 document.getElementById("yaa").innerHTML="";
 document.getElementById("lmao").innerHTML="";
 document.getElementById("wtf").innerHTML="";
 document.getElementById("rofl").innerHTML="";
 document.getElementById("demoB").innerHTML="";
 document.getElementById("ftw").innerHTML="";
 document.getElementById("moo").innerHTML="";
 document.getElementById("demoC").innerHTML="";
 document.getElementById("lol").innerHTML="";
 document.getElementById("lmfao").innerHTML="";
 document.getElementById("turbine").innerHTML="";
 document.getElementById("ran").innerHTML=" Your Random Number To Get To: " + randomVal;





}



/*if((blueVal+purpVal+yellowVal+greenVal) < randomVal){wins++;}
if((blueVal+purpVal+yellowVal+greenVal)==randomVal){wins++;}
if((blueVal+purpVal+yellowVal+greenVal)>randomVal){loses++;}
if((purpVal+blueVal+yellowVal)==randomVal){wins++;}
if((blueVal+purpVal+yellowVal)>randomVal){loses++;}
if((purpVal+blueVal)==randomVal){wins++;}
if((blueVal+purpVal)>randomVal){loses++;}
if(purpVal>randomVal){loses++;}
if(purpVal==randomVal){wins++;}*/










