    const billInp = document.querySelector('.billInp');
    const ppleInp = document.querySelector('.ppleInp');
    const tipPerPerson = document.getElementById('tip-amnt');
    const totalPerPerson = document.getElementById('total-amnt');
    const tips = document.querySelectorAll('.tips');

    billInp.addEventListener('input', billInpFunc);
    ppleInp.addEventListener('input', ppleInpFunc);
    tips.forEach(function(val){
        val.addEventListener('click', handleClick);
    })



    billInp.value = '0.0';
    ppleInp.value = '1';
    
    
    
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

    function handleClick(event){
        tips.forEach(function(val){
            val.classList.remove('.active');
            if(val.innerHTML == event.target.innerHTML){
                val.classList.add('.active');
            }
        });
    }