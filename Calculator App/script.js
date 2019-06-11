function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistroy(num) {
    document.getElementById("history-value").innerText = num;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num){

    if(num ==""){
        document.getElementById("output-value").innerText = num;
    }else{
    document.getElementById("output-value").innerText = getFormattedNumber(num);
}
}

function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat (num) {
        return Number(num.replace(/,/g, ""));
    }
    
var operator = document.getElementsByClassName("operator");
for(var i =0; i<operator.length; i++ ){
    operator[i].addEventListener('click', function(){
        if(this.id=="clear"){
            printHistroy("");
            printOutput("");
        }
        else if(this.id== "backspace"){

        }
    });
}

var numbers = document.getElementsByClassName("number");
for(var i =0; i<numbers.length; i++ ){
    numbers[i].addEventListener('click', function(){
        var output = reverseNumberFormat(getOutput());
        if (output != NaN){
            output += output +this.id;
            printOutput(output);
        }
    });
}