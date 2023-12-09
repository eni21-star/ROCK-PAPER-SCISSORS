    let startGameBtn= document.getElementById("begin");

 startGameBtn.addEventListener("click",function(){
 

     let displayConsole= document.getElementById("display1");

     displayConsole.textContent = `ROCK PAPER SCISSORS`;

     let playerScore = 0;
     let compScore = 0;
     let rock2="Rock";
     let paper2= "Paper";
     let scissor2= "Scissor";
     let userChoice;
     let rock= document.getElementById("rock1");
     let paper= document.getElementById("paper1");
     let scissor= document.getElementById("scissor1");   
 

rock.addEventListener("click", function(){
     let rockclick1=document.getElementById("rockclick");
     userChoice= rock2;
     rockclick1.textContent = `You Picked: ROCK`;
     
     } )


paper.addEventListener("click", function(){
     let paperclick1=document.getElementById("rockclick");
     userChoice=paper2;
     paperclick1.textContent = `You Picked: PAPER`;
  } )

scissor.addEventListener("click", function(){
     let scissorclick1=document.getElementById("rockclick");
     userChoice = scissor2;
     scissorclick1.textContent = `You Picked: SCISSORS`;
  } )



let compchoice = document.getElementById("sbmbtn");
 
compchoice.addEventListener("click", function(){
 
 
   
let compA=[rock2,paper2,scissor2];
 
 
function comprand(){
 
  let random = Math.floor(Math.random()*3);
 
  return compA[random];
  }
  
  let comp1 = comprand();
  
  let computertext = document.getElementById("comppp");
  computertext.textContent = `Computer Picked: ${comp1}`;

 if(comp1==rock2 && userChoice== rock2){

    document.getElementById("display").innerHTML =`YOU DRAW! `;
    playerScore+=0;
    compScore+=0;
    
    document.getElementById("playerscore1").innerHTML = `player: ${playerScore}`;
    document.getElementById("compscore1").innerHTML = `computer: ${compScore}`;
 }
 else if(comp1===rock2 && userChoice==scissor2){

    document.getElementById("display").innerHTML =`YOU LOSE! `;
    playerScore+=0;
    compScore+=1;
    
    document.getElementById("playerscore1").innerHTML = `player: ${playerScore}`;
    document.getElementById("compscore1").innerHTML = `computer: ${compScore}`;
 }
 else if(comp1===rock2 && userChoice==paper2){

    document.getElementById("display").innerHTML =`YOU WIN!`;
    playerScore+=1;
    compScore+=0;
    
    document.getElementById("playerscore1").innerHTML = `player: ${playerScore}`;
    document.getElementById("compscore1").innerHTML = `computer: ${compScore}`;
 }


    
 else if(comp1===paper2 && userChoice==rock2){

    document.getElementById("display").innerHTML =`YOU LOSE! `;
    playerScore+=0;
    compScore+=1;
    
    document.getElementById("playerscore1").innerHTML = `player: ${playerScore}`;
    document.getElementById("compscore1").innerHTML = ` computer: ${compScore}`;
 }
 else if(comp1===paper2 && userChoice==paper2){

    document.getElementById("display").innerHTML =`YOU DRAW! `;
    playerScore+=0;
    compScore+=0;
    
    document.getElementById("playerscore1").innerHTML = `player: ${playerScore}`;
    document.getElementById("compscore1").innerHTML = `computer: ${compScore}`;
 }
 else if(comp1===paper2 && userChoice==scissor2){

    document.getElementById("display").innerHTML =`YOU WIN!`;
    playerScore+=1;
    compScore+=0;
    
    document.getElementById("playerscore1").innerHTML = `player: ${playerScore}`;
    document.getElementById("compscore1").innerHTML = `computer: ${compScore}`;
 }
  
 else if(comp1===scissor2 && userChoice==paper2){

    document.getElementById("display").innerHTML =`YOU LOSE! `;
    playerScore+=0;
    compScore+=1;
    
    document.getElementById("playerscore1").innerHTML = `player: ${playerScore}`;
    document.getElementById("compscore1").innerHTML = `computer: ${compScore}`;
 }
 else if(comp1===scissor2 && userChoice==rock2){

    document.getElementById("display").innerHTML =`YOU WIN!`;
    playerScore+=1;
    compScore+=0;
    
    document.getElementById("playerscore1").innerHTML = `player: ${playerScore}`;
    document.getElementById("compscore1").innerHTML = `computer: ${compScore}`;
    
 }
 else if(comp1===scissor2 && userChoice==scissor2){

    document.getElementById("display").innerHTML =`YOU DRAW! `;
    playerScore+=0;
    compScore+=0;
    document.getElementById("playerscore1").innerHTML = `player: ${playerScore}`;
    document.getElementById("compscore1").innerHTML = `computer: ${compScore}`;
 } 

 else{
    document.getElementById("display").innerHTML =`WRONG INPUT`;
 }
 })
 
 



 })

 
let restartBtn = document.getElementById("restart");

 restartBtn.addEventListener("click", function(){

   document.getElementById("display1").innerHTML="";
   document.getElementById("display").innerHTML="";
   document.getElementById("playerscore1").innerHTML="";
   document.getElementById("compscore1").innerHTML="";
   document.getElementById("rockclick").innerHTML="";
   document.getElementById("comppp").innerHTML="";
  
   let playerScoreRestart = 0;
   let compScoreRestart = 0;
   document.getElementById("playerscore1").innerHTML = `Player: ${playerScoreRestart}` ;
   document.getElementById("compscore1").innerHTML =  `Computer: ${compScoreRestart}`;
   
 })
 
 
   


