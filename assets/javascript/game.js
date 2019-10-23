//global Variables
$(document).ready(function () {

    var goalNum = 0;
    var gemOneValue = 0;
    var gemTwoValue = 0;
    var gemThreeValue = 0;
    var gemFourValue = 0;
    var currentScore = 0;
    var losses = 0;
    var wins = 0;

//sets goal number randomly from 19-120
    function randomGoal() {
        var i = Math.floor(Math.random() * (101) + 19);
        return (i);
    }

//sets gem numbers randomly from 1-12
    function randomNum() {
        var i = Math.floor(Math.random() * (11) + 1);
        return (i);
    }

//initializes game and resets variables
    function start() {
        goalNum = randomGoal(goalNum);
        gemOneValue = randomNum(gemOneValue);
        gemTwoValue = randomNum(gemTwoValue);
        gemThreeValue = randomNum(gemThreeValue);
        gemFourValue = randomNum(gemFourValue);
        currentScore = 0;
    }

//increases losses counter, alerts player, and resets for next game
    function lose() {
        losses++;
        $("#losses").html(losses);
        alert("Here's your participation ribbon.");
        start();
        $("#tScore").html(currentScore)
    }

//increases win counter, alerts player, and resets for next game
    function win() {
        wins++;
        $("#wins").html(wins);
        alert("I hope winning this game isn't the high point of your day.");
        start();
        $("#tScore").html(currentScore)
    }

//compares current score with the goal number and pushes win() or lose() as appropriate
    function checkNum(i) {
        currentScore = currentScore + (i);
        if (currentScore > 0) {
            $("#tScore").html(currentScore);
            if (currentScore === goalNum) {
                win();
            }
            else if (currentScore > goalNum) {
                lose();
            }
            $("#goal").html(goalNum);
        }
    }

//click functions for gems
    $("#gem1").on("click", function () {
        checkNum(gemOneValue);
    })
    $("#gem2").on("click", function () {
        checkNum(gemTwoValue);
    })
    $("#gem3").on("click", function () {
        checkNum(gemThreeValue);
    })
    $("#gem4").on("click", function () {
        checkNum(gemFourValue);
    })

//initializes game
start();
})