(function(){
    let userName = window.prompt('Please, tell me your name:');
    let greetingHead = document.getElementById('greeting');
    greetingHead.innerHTML += ', ' + userName + '!';

    let operand1 = parseInt(window.prompt('Please, tell me the first number:'));
    let operand2 = parseInt(window.prompt('Please, tell me the second number:'));

    let resultSum = operand1 + operand2;
    document.getElementById('resultSum').innerHTML = resultSum;
    let resultDiff = operand1 - operand2;
    document.getElementById('resultDiff').innerHTML = resultDiff;
    let resultProduct = operand1 * operand2;
    document.getElementById('resultProduct').innerHTML = resultProduct;
    let resultQuotient = (operand1 / operand2).toFixed(6);
    document.getElementById('resultQuotient').innerHTML = resultQuotient;
    let resultMod = operand1 % operand2;
    document.getElementById('resultMod').innerHTML = resultMod;


    let displayOp1 = document.getElementsByClassName('operand1');
    let displayOp2 = document.getElementsByClassName('operand2');
    displayOp1[0].innerHTML = operand1;
    displayOp1[1].innerHTML = operand1;
    displayOp1[2].innerHTML = operand1;
    displayOp1[3].innerHTML = operand1;
    displayOp1[4].innerHTML = operand1;
    displayOp1[5].innerHTML = operand1;
    displayOp2[0].innerHTML = operand2;
    displayOp2[1].innerHTML = operand2;
    displayOp2[2].innerHTML = operand2;
    displayOp2[3].innerHTML = operand2;
    displayOp2[4].innerHTML = operand2;
    displayOp2[5].innerHTML = operand2;
})();