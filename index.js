var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What is Your Name? => \n");
console.log("Welcome! " + userName + " to DO-YOU-KNOW-YASH\n");
console.log("This repl is contain small quiz about me. Let's check how well do you know me.\n");

var highScores = [
  {
    name: "Palak",
    score: 5,
  },
]


function quiz(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("YaY! You are right!\n");
    score++;
  }
  else {
    console.log("Sorry! You are wrong\n");
  }
  console.log("Your score is : " + score);
}

quiz("\nWhere do yash live? => ","Charodiya");
quiz("\nIn which city yash doing his graduation? => ","Vadodara");
quiz("\nWhich number is favourite of yash? => ","29");
quiz("\nDoes yash like to eat street food? => ","Yes");
quiz("\nIn which month yash was born? => ","April");

if(score>4) {
  console.log("\nHurray! You are best friend of Yash!\n\n");
}
else if(score>2){
  console.log("\nYou are friend of Yash!\n\n");
}
else {
  console.log("\nYou don't know Yash very well!\n\n");
}

console.log("High Score : ");
highScores.map(score => console.log(score.name, ":", score.score));

console.log("\n\nIF YOUR SCORE IS HIGH PLEASE LET ME KNOW!");