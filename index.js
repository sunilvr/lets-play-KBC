var readlineSync = require('readline-sync');
var quizScore = 0;
var userAnswer, userName;

var questionsList = [{
  "question": "Who is the captain of current Indian men's cricket team? : ",
  "answer": "Virat Kohli"
},
{
  "question": "Which is the capital of karnataka? : ",
  "answer": "bangalore"
},
{
  "question": "Which city is the capital of India? : ",
  "answer": "New Delhi"
},
{
  "question": "Which country is Beijing in? : ",
  "answer": "China"
},
{
  "question": "Who is the highest scorer of all time in international men's cricket? : ",
  "answer": "sachin tendulkar"
},
{
  "question": "What is the national sport of India ? : ",
  "answer": "hockey"
},
{
  "question": "Which is the national animal of India? : ",
  "answer": "Tiger"
},
{
  "question": "Which is the national flower of India? : ",
  "answer": "Lotus"
}];

var highScores = [{
  "name":"Sunil",
  "score": 8
},
{
  "name":"Srikanth",
  "score": 7
}]

function greetUser(){
  userName = readlineSync.question('May I know your name: ');
  var welcomeMessage = 'Welcome ' + userName.toUpperCase() + '. The quiz shall begin now, fasten your seat belts!!\n\n';
  console.log(welcomeMessage);
}

function askQuestion(question, answer){
  userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    quizScore += 1;
    console.log('The answer is correct');
  } else {
    console.log('You were wrong');
  }
  console.log('Your score : ' + quizScore);
  console.log('----------------------------------\n');
}

function displayHighScores(){
  console.log('\n\nFind the previous highscores in this game. Ping me if you are there. I shall update it!');
  for (var i = 0; i < highScores.length; i++){
      console.log(highScores[i].name + ' : ' + highScores[i].score);
    }
  }

function playQuiz(){
  for (var i = 0; i < questionsList.length; i++){
      askQuestion(questionsList[i].question, questionsList[i].answer);
  }
  console.log('\nThe quiz has ended now. That was a great game ' + userName.toUpperCase() + '!!');
  console.log('You have managed to successfully answer ' +  quizScore + ' out of ' + questionsList.length + ' questions right');

  displayHighScores();
}

greetUser();
playQuiz();