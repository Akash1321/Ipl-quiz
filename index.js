var readlineSync = require('readline-sync');

const chalk = require('chalk');

var score = 0
var rule = 'For every correct answer you get +5 and for a wrong answer -1 is deducted'

var useranswer = readlineSync.question(chalk.bold('Enter your name '));


console.log(chalk.white('Welcome "' + chalk.yellowBright(useranswer) + '" to the IPL quiz.'))



console.log(chalk.bold.yellow('Rule: ' + chalk.whiteBright(rule)))



function quiz(list, question, answer){

index = readlineSync.keyInSelect(list, question);


if ( list[index] === answer ){
  console.log(chalk.green('you are right'))
 score = score + 5
} else {
  console.log(chalk.redBright('you are wrong'))
score = score - 1
}
console.log(chalk.yellowBright.underline('your score is ' + chalk.bold.yellowBright(score)))
}



var original = [{
  question: chalk.cyanBright('1. Which season(s) had the most number of hat-tricks?'),
  list: ['2014', '2008 and 2017', '2009 and 2013'],
  answer: '2008 and 2017',
},
{
  question: chalk.cyanBright('2. Which Australian has the best bowling figures in the IPL?'),
  list: ['Andrew Tye', 'Adam Zampa', 'James Faulkner'],
  answer: 'Adam Zampa',
},
{
  question: chalk.cyanBright('3. Which player holds the record for the fastest fifty in IPL?'),
  list: ['K. L. Rahul', 'Nicholas Pooran', 'Yuvraj Singh'],
  answer: 'K. L. Rahul',
},
{
 question: chalk.cyanBright('4. Who was the captain of the Mumbai Indians in IPL 2012?'),
  list: ['Rohit Sharma', 'Sachin Tendulkar', 'Harbhajan Singh'],
  answer: 'Harbhajan Singh', 
},
{
  question: chalk.cyanBright('5. Which player is the oldest to win the Purple Cap, which is given to the highest wicket-taker in the tournament?'),
  list: ['Imran Tahir', 'Lasith Malinga', 'Ashish Nehra'],
  answer: 'Imran Tahir', 
},
{
 question: chalk.cyanBright('6. Which team picked up Australia all-rounder Marnus Labuschagne during the mini-auction ahead of IPL 2021?'),
  list: ['Punjab Kings', 'He went unsold', 'Sunrisers Hyderabad'],
  answer: 'He went unsold',  
},
{
 question: chalk.cyanBright('7. Which among these players has the joint-most ducks in IPL history alongside Harbhajan Singh?'),
  list: ['Rohit Sharma', 'Parthiv Patel', 'Ravindra Jadeja'],
  answer: 'Parthiv Patel',   
}
]


for (var i=0; i<original.length; i++){
  var abc = original[i]
  quiz(abc.list, abc.question, abc.answer)
}


var topper = [{
  name: 'Kunal',
  scored: '29',
},
{
  name: 'Akshay',
  scored: '26',
}
]

for (var i=0; i<1; i++)
  
  if (score > topper[i].scored){
    console.log(chalk.greenBright('Yay!you are the new highest scorer'))
    console.log(chalk.yellow('PLEASE SEND US A SCREENSHOT SO THAT WE CAN UPDATE THE HIGHSCORE'))
  }else{
    console.log(chalk.yellowBright('Your total score is' + score))
    console.log(chalk.blueBright('The all time high score is' + topper[i]))
  }