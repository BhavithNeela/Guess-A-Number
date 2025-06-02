var number=Math.trunc(Math.random()*20)+1;
let score=20;
let marks=Number(document.querySelector('.score').textContent);
let higeshtScore=0;
document.querySelector(".chance").innerHTML=score;

document.querySelector('.again').addEventListener('click',function(){
    var number=Math.trunc(Math.random()*20)+1;
 score=20;
// let marks=Number(document.querySelector('.score').textContent);
document.querySelector(".chance").innerHTML=score;
document.querySelector('.message').textContent="Start guessing...";
document.querySelector('body').style.backgroundColor="#222";
document.querySelector(".between").innerHTML="?";
document.querySelector('.guess').value=''
document.querySelector('.score').textContent='0'


})
document.querySelector('.check').addEventListener('click', function(){
    guessNumber=Number(document.querySelector('.guess').value) ;
    if(score>0){
    if(!guessNumber){
        document.querySelector('.message').textContent="🚫 Number Is Not Entered"
        document.querySelector(".chance").innerHTML=score;
      
    }
   else if(guessNumber === number){
    document.querySelector('.message').innerHTML="CORRECT NUMBER 🎉🎊";
    document.querySelector(".chance").innerHTML=score;
    marks=marks+20;
    console.log(marks);
    document.querySelector('.score').innerHTML=marks;
    document.querySelector('body').style.backgroundColor="#60b347";
    document.querySelector(".between").innerHTML=number;
    if(marks>higeshtScore){
        higeshtScore=marks;
        document.querySelector(".highscore").textContent= higeshtScore;
    }

   }
   else  if(guessNumber > number){
    document.querySelector('.message').innerHTML="Guessed Number Is Greater😔😔";
    score--;
    document.querySelector(".chance").innerHTML=score;

   }
   else  if(guessNumber < number){
    document.querySelector('.message').innerHTML="Guessed Number Is Lesser😔😔";
    score--;
    document.querySelector(".chance").innerHTML=score;

   }
}
else{
   document.querySelector('.message').innerHTML="Chances Are Completed😔😔"
   document.querySelector('body').style.backgroundColor="red";

}
});