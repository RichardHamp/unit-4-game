//Global Variables

var goalNum = 0;
var gemOneValue = 0;
var gemTwoValue = 0;
var gemThreeValue = 0;
var currentScore = 0;
var losses = 0;
var wins = 0;

function randomGoal(){
    $(goalNum).text(Math.floor(Math.random()*120)+19);
    }

// function randomNum(gemOneValue){
//     $(gemOneValue).text(Math.floor(Math.random()*12)+1);
//     }

// function lose() {
//     document.getElementById(losses);
//     losses ++;
//     goalNum = randomGoal(goalNum);
//     gemOneValue = randomNum(gemOneValue);
//     gemTwoValue = randomNum(gemTwoValue);
//     gemThreeValue = randomNum(gemThreeValue);
// }

// function win(){
//     document.getElementById(wins);
//     wins ++;
//     goalNum = randomGoal();
//     gemOneValue = randomNum();
//     gemTwoValue = randomNum();
//     gemThreeValue = randomNum();
// }

randomGoal(goalNum);
console.log(goalNum);

// randomNum(gemOneValue);
// console.log(gemOneValue);

// lose();
// win();