
var playing = false;
var score;
var timerem;
var correctAns;


//if we click on the start/reset
document.getElementById("startreset").onclick = function(){
    if(playing==true){  //if we are playing
        location.reload();   //reload page
    }else{   //if we are not playing
       
        playing = true;     //change playing mode
        score = 0;  //set score to 0
        document.getElementById("scorevalue").innerHTML = score;
        
        show("timerem");     //show countdown box
        timerem = 60;
        
        hide("gameOver");
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        startCountdown();
        
        //generate q
        generateqa();
        
    }
}


for(i=1; i<5; i++){
    document.getElementById("box" + i).onclick = function(){
    if(playing==true){
        if(this.innerHTML == correctAns){
            score +=1;
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000)
            generateqa();
        }else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000)
        }
    }
}
}

function startCountdown(){
    action = setInterval(function(){
        timerem -= 1;
    document.getElementById("tvalue").innerHTML = timerem;
    if(timerem==0)
    {
        stopCountdown();
        show("gameOver");
        document.getElementById("gameOver").innerHTML = "<p>Game Over!</p><p>Your score is " + score + "</p>";
        hide("timerem");
        hide("correct");
        hide("wrong");
        playing = false;
        document.getElementById("startreset").innerHTML = "Start Game";
    }
    },1000)
}

function stopCountdown(){
    clearInterval(action);
}

function hide(id){
    document.getElementById(id).style.display = "none";
}

function show(id){
    document.getElementById(id).style.display = "block";
}

function generateqa(){
    var x = 1 + Math.round(Math.random()*9);
    var y = 1 + Math.round(Math.random()*9);
    
    correctAns = x*y;
    
    document.getElementById("question").innerHTML = x + "x" + y;
    var corectPosition = 1 + Math.round(Math.random()*3);
    
    document.getElementById("box"+corectPosition).innerHTML = correctAns;
    
    var ans = [correctAns];
    
    for(i=1; i<5; i++){
        if(i!=corectPosition){
            var wrongAns;
            do{
           wrongAns = (1 + Math.round(Math.random()*9))*(1 + Math.round(Math.random()*9)); }while(ans.indexOf(wrongAns)>-1)
            document.getElementById("box"+i).innerHTML = wrongAns;
            ans.push(wrongAns);
        }
    }
}