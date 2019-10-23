//Global Variables
$(document).ready(function () {

    var goalNum = 0;
    var gemOneValue = 0;
    var gemTwoValue = 0;
    var gemThreeValue = 0;
    var gemFourValue = 0;
    var currentScore = 0;
    var losses = 0;
    var wins = 0;

    function randomGoal() {
        var i = Math.floor(Math.random() * (101) + 19);
        return (i);
    }

    function randomNum() {
        var i = Math.floor(Math.random() * (11) + 1);
        return (i);
    }

    function lose() {
        document.getElementById(losses);
        losses++;
        goalNum = randomGoal(goalNum);
        gemOneValue = randomNum(gemOneValue);
        gemTwoValue = randomNum(gemTwoValue);
        gemThreeValue = randomNum(gemThreeValue);
        gemFourValue = randomNum(gemFourValue);
        currentScore = 0;
        alert ("loser");
    }

    function win() {
        document.getElementById(wins);
        wins++;
        goalNum = randomGoal();
        gemOneValue = randomNum();
        gemTwoValue = randomNum();
        gemThreeValue = randomNum();
        gemFourValue = randomNum();
        currentScore = 0;
        alert ("winner");
    }

    function checkNum(i) {
        currentScore = currentScore + (i);
        $("#tScore").html(currentScore);
        console.log(currentScore);
        if (currentScore === goalNum) {
            win()
            $("#wins").html(wins++);
        }
        else if (currentScore > goalNum) {
            lose()
            $("#losses").html(losses++);
        }
        $("#goal").html(goalNum);
        
        console.log("currentOne" + (currentScore))
    }

    $("#gem1").on("click", function () {
        checkNum(gemOneValue);
        console.log("One_" + (gemOneValue));
        console.log("current" + (currentScore));
        console.log("goal_" + (goalNum));
    })

    $("#gem2").on("click", function () {
        checkNum(gemTwoValue);
        console.log("Two_" + (gemTwoValue));
        console.log("current" + (currentScore));
        console.log("goal_" + (goalNum));
    })

    $("#gem3").on("click", function () {
        checkNum(gemThreeValue);
        console.log("Three_" + (gemThreeValue));
        console.log("current" + (currentScore));
        console.log("goal_" + (goalNum));
    })

    $("#gem4").on("click", function () {
        checkNum(gemFourValue);
        console.log("Four_" + (gemFourValue));
        console.log("current" + (currentScore));
        console.log("goal_" + (goalNum));
    })

})