const initialPrice = document.querySelector("#initial-price");
const numberOfStocks = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");



function calculateProfitOrLoss(initial, quantity, current){
    if (initial < current){
        var profit = (current - initial)*quantity ; 
        var profitPercentage = (((current - initial)/initial)*100).toFixed(2) ;
         
        showOutput(`Your Profit is ${profit} & profit percentage is ${profitPercentage}%`,'green');
    }
    else if (initial > current){
        var loss = (initial - current)*quantity ; 
        var lossPercentage = (((initial - current)/initial)*100).toFixed(2) ; 
        showOutput(`Your Loss is ${loss} & Loss percentage is ${lossPercentage}%`,'red');
    }
    else{
        showOutput(`No profit or loss.`,'white');
    }
}

function submitHandler(){
    var initial = initialPrice.value;
    var quantity = numberOfStocks.value;
    var current = currentPrice.value;
    var validate = validateInput(initial, quantity, current);
    if (validate){
        calculateProfitOrLoss(Number(initial), Number(quantity), Number(current));
    }
}
submitBtn.addEventListener('click',submitHandler);

function showOutput(msg, color){
    output.style.color = color;
    output.innerText = msg;
}

function validateInput(initial, quantity, current) {
    if(initial.length==0 || quantity.length==0 || current.length==0 ){
        alert('Please fill out all the fields.');
        return false;
    }
    if(Number(initial)<=0 || Number(quantity)<=0 || Number(current)<0 ){
        alert('The values should be positive');
        return false;
    }
    return true;
}
