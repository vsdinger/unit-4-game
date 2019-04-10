$(document).ready(function () {

    // ToDo  display losses
    // Todo display show wins
    // console.log()
    // ToDo  display count 
    // ToDo  display randon computer number to match
    var numbertoguess = [];
    // score to match (random number 19-120)
    for (var n = 19; n < 121; n++) {
        numbertoguess.push(n);
    }
    // console.log ()
    //  function to click crystal to add score.
    var crystals = [];

    for (var c = 1; c < 13; c++) {
        crystals.push(c);
    }

// random var selected by computer crystals:
  var yourCount;  //number to match

var crystalNumber = [];

var c1;
var c2;
var c3;
var c4;

var totalScore = 0;  //user score
var wins = 0;
var losses = 0;

//function
function pickYourCount(arr) {
    var x = arr[Math.floor(Math.random() * arr.length)];
    yourCount = x;
    $("#yourCount").html(yourCount);

    console.log("yourCount: " + yourCount);

}

//random num for crystals

Function pickRandomCrystals(arr) {
    for (var i = 0; i < 4: i++){
        var a = arr[Math.floor(Math.random() * arr.length)];
        crystalNumber.push(a);
    }
//check
console.log("crystal numbers: " + crystalNumber);
}

function crystalValues(arr) {
    for (i = 0; i < arr.length; i++) {

        $("#button-" + (i+1)).attr("value", arr[i]);
        console.log(this);
    }
    c1 = arr[0];
    c2 = arr[1];
    c3 = arr[2];
    c4 = arr[3];
}
function gameReset(x){
    crystalNumbers(random);
    pickYourCount(crystals);
    crystalValues(crystalNumber);
    totalScore =0;
    $("#totalNumber").html(totalScore);
    alert(x);
}

pickYourCount(rand);
pickRandomCrystals(crystals);
crystalValues(crystalNumber);

//crystal buttons
$("button-1").on("click", function() {
    totalScore += c1;
    $("#totalNumber").html(yourCount);
});

$("button-2").on("click", function() {
    totalScore += c2;
    $("#totalNumber").html(yourCount);
});

$("button-3").on("click", function() {
    totalScore += c3;
    $("#totalNumber").html(yourCount);
});

$("button-4").on("click", function() {
    totalScore += c4;
    $("#totalNumber").html(yourCount);
});

//wins
$("button").on("click", function() {
if (totalScore == numbertoguess) {
    wins++;
    console.log(totalScore);
    $("#totalNumber").html(yourCount);
    $("#wins").html("Wins:" +wins);

    setTimeout(function() {gameReset("You Lose")}, 200);
}

else if (totalScore > yourCount) {
    losses++;
    $("#totalNumber").html(totalScore);
    $("#losses").html("Losses: " + losses);

    setTimeout(function() {gameReset("You Need more practice-You Lost!!")}, 200);
}
});

});  //end of script
