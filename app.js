var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");


submitBtn.addEventListener('click',submitHandler)

function submitHandler(){

    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;
    if (ip && qty && curr ){
        calculateProfitAndLoss (ip,qty,curr);
       
     
    }
    else{
        outputBox.innerHTML="Please Enter All The Feild "
        

       
    }


}

function calculateProfitAndLoss (initial,quantity,current){

    if(initial > current){
        var loss = (initial-current)*quantity;
        var lossPercentage = (loss / initial) * 100;


        showOutput(`hey the loss is ${loss} and the percentage is ${lossPercentage}%`)
    }else if (current > initial){
        var profit = (current-initial)*quantity;
        var profitPercentage = (profit / initial) * 100;

       showOutput(`hey profit is ${profit} and percentage is ${profitPercentage}%`)

    }else{

     showOutput("no pain no gain and no gain no pain")

    }

}


function showOutput(message){

    outputBox.innerHTML = message; 
}