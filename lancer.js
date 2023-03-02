    const billInp = document.querySelector('.billInp');
    const ppleInp = document.querySelector('.ppleInp');
    const tipPerPerson = document.getElementById('tip-amnt');
    const totalPerPerson = document.getElementById('total-amnt');
    const tips = document.querySelectorAll('.tips');
    const tipCustom = document.getElementById('tip-custom');
    const resetBtn = document.getElementById('reset');
    const error = document.querySelector('.error');

    billInp.addEventListener('input', billInpFunc);
    ppleInp.addEventListener('input', ppleInpFunc);
    tips.forEach(function(val){
        val.addEventListener('click', handleClick);
    })
    tipCustom.addEventListener('input', tipInpFunc);
    resetBtn.addEventListener('click', reset);


    billInp.value = '0.0';
    ppleInp.value = '1';
    
    
    
    let billValue = 0;
    let ppleValue = 1;
    let tipValue = 0.15;

    function billInpFunc(){
        billValue = parseFloat(billInp.value);
        billInp.parentNode.style.border = '2px solid hsl(172, 67%, 45%)'
        calculateTip();
    }

    function ppleInpFunc(){
        ppleValue = parseFloat(ppleInp.value);

        if (ppleValue < 1) {
            error.style.display = 'flex';
            ppleInp.parentNode.style.border = '2px solid red';
        } else{
            error.style.display = 'none';
            ppleInp.parentNode.style.border = 'none';
            calculateTip();
        }
    }

    function tipInpFunc(){
        tipValue = parseFloat(tipCustom.value / 100);

        tips.forEach(function (val){
            val.classList.remove('active');
        })
        calculateTip();
    }

    function handleClick(event){
        tips.forEach(function(val){
            val.classList.remove('active');
            if(val.innerHTML == event.target.innerHTML){
                val.classList.add('active');
                tipValue = parseFloat(val.innerHTML)/100
            }
        });
        calculateTip();
    }

    function calculateTip(){
        if (ppleValue >=1) {
            let tipAmount = (billValue * tipValue) / ppleValue;
            let total = (billValue * tipAmount) / ppleValue;

            tipPerPerson.innerHTML = tipAmount.toFixed(2);
            totalPerPerson.innerHTML = total.toFixed(2);
        }
    }

    function reset(){
        billInp.value = '0.0';
        billInpFunc();
        ppleInp.value = '1';
        ppleInpFunc();
        tipCustom.value = ''
        tips.forEach(function(val){
            val.classList.remove('active');
        })
    }