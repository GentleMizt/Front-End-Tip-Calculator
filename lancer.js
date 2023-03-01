    const billInp = document.querySelector('.billInp');
    const ppleInp = document.querySelector('.ppleInp');
    const tipPerPerson = document.getElementById('tip-amnt');
    const totalPerPerson = document.getElementById('total-amnt');


    billInp.addEventListener('input', billInpFunc);
    ppleInp.addEventListener('input', ppleInpFunc);

    let billValue = 0;
    let ppleValue = 1;

    function billInpFunc(){
        billValue = parseFloat(billInp.value);
        console.log(billValue);
    }

    function ppleInpFunc(){
        ppleValue = parseFloat(ppleInp.value);
        console.log(ppleValue);
    }