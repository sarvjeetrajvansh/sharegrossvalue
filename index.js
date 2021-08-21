const inputs=document.querySelectorAll(".inputs");
const btnCalculate=document.querySelector("#btn-calculate");
const output=document.querySelector("#output");

function checkGrossValue(){
    let initialPrice=Number(inputs[0].value);
    let quantity=Number(inputs[1].value);
    let currentPrice=Number(inputs[2].value);
    if(initialPrice>currentPrice){
        //loss
        let loss=initialPrice-currentPrice;
        let lossPercentage=(loss*100)/initialPrice;
        // let totalLoss=loss*quantity;
        output.innerText='Yay! You are in loss of '+loss*quantity+'You incurred loss of '+lossPercentage+'%' ;
        output.style.color = 'red';
    }
    else if(currentPrice>initialPrice){
        //profit
        let profit=currentPrice-initialPrice;
        let profitpercentage=(profit*100)/initialPrice;
        output.innerText='Ahh! You are in profit of '+profit*quantity+'You incurred profit of '+profitpercentage+'%' ;
        output.style.color = 'green';
    }
    else{
       output.innerText='No Profit, No Loss';
       output.style.color = 'Blue';
    }
}



btnCalculate.addEventListener('click',checkGrossValue);