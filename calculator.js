$(document).ready(function(){

    var firstnumber = 0;
    var secondnumber = 0;
    var operator = "";
    var answer = 0;
    var chosen = false;
    var calculated = false;


    function startCalculator (){
        firstnumber = "";
        secondnumber = "";
        operator = "";
        chosen = false;
        calculated = false;

        $("#first-number", "#second-number", "#operator", "#answer").empty();
    }

    $(".card").on("click", ".number", function(){

        if(calculated){
            return flase
        }

        if(chosen){
            secondnumber += $(this).val();
            $("#second-number").text(secondnumber);
        }
        else{
            firstnumber += $(this).val();
            $("#first-number").text(firstnumber);
        }
    }).on("click", ".operator", function(){

        if(!firstnumber || calculated){
            return false;
        }

        chosen = true;

        operator = $(this).val();

        $("#operator").text($(this).text());

    }).on("click", ".equal", function(){

        if(calculated){
            return false;
        }

        calculated = true;

        firstnumber = parseInt(firstnumber);
        secondnumber = parseInt(secondnumber);

        if (operator === "plus"){
            answer = firstnumber + secondnumber;
        }

        else if (operator === "minus"){
            answer = firstnumber - secondnumber;
        }

        else if (operator === "times"){
            answer = firstnumber * secondnumber;
        }

        else if (operator === "divide"){
            answer = firstnumber / secondnumber;
        }

        else if (operator === "power"){
            answer = Math.pow(firstnumber, secondnumber);
        }

        $("#answer").text(answer);

    }).on("click", ".clear", function(){

        console.log(startCalculator)
        startCalculator();
    });

    startCalculator();

});