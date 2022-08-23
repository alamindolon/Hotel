//step:1 add event listener to deposite button

document.getElementById('deposite-btn').addEventListener('click',function name() {
    //step:2 connect the deposite input filed 
    const depositeFiled = document.getElementById('deposite-input');
    const depositeAmount =  depositeFiled.value;
    
    //step: 3 get the current deposite total

    const depositetotalElement = document.getElementById('depositeTotal');
    const depositetotal = depositetotalElement.innerText;
    depositetotalElement.innerText = depositeAmount;

    
})
