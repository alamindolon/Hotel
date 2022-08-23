//step:1 add event listener to deposite button

document.getElementById('deposite-btn').addEventListener('click',function name() {
    //step:2 connect the deposite input filed 
    const depositeFiled = document.getElementById('deposite-input');
    const newdepositeAmountString =  depositeFiled.value;
    const newdepositeAmount = parseFloat(newdepositeAmountString);
    // for input clear 
    depositeFiled.value = '';
    
    //step: 3 get the current deposite total

    const depositetotalElement = document.getElementById('depositeTotal');
    const previsedepositetotalString = depositetotalElement.innerText;
    //string to float
    const previseDeposite = parseFloat(previsedepositetotalString);

    // 2 ta man add kori
     const currentdepositeAmount = newdepositeAmount + previseDeposite;
    depositetotalElement.innerText = currentdepositeAmount;



    // total balance ke niya asi

    const balanceTotalElement  = document.getElementById('totalBalance');
    const previsebalanceTotalElementString = balanceTotalElement.innerText;
    const privisebalanceTotal = parseFloat(previsebalanceTotalElementString);


    const currentTotalBalance = newdepositeAmount + privisebalanceTotal;
    balanceTotalElement.innerText = currentTotalBalance;

    

    
})
