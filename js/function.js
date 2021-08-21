// common function all button handler
function allButtonHandler(checker, price){

    if(checker === 'memory'){
        memoryCost.innerText = price; // memory
        
    } else if(checker === 'storage'){
        storageCost.innerText = price; // storage
        
    } else if(checker === 'delivery'){
        deliveryCharge.innerText = price; // delivery

    }

}

// for button selected one is focused;
function focusedButton(add, remove1, remove2){
    add.classList.add('selectedOne');
    remove1.classList.remove('selectedOne');
    remove2.classList.remove('selectedOne');
}



// update total price
function totalPriceUpdate(){
    const memory = parseFloat(memoryCost.innerText);
    const storage = parseFloat(storageCost.innerText);
    const delivery = parseFloat(deliveryCharge.innerText);
    // const totalMoney = parseFloat(totalPrice.innerText);
    const subTotalAmount = memory + storage + delivery;
    const finalTotal = subTotalAmount + 1299;
    totalPrice.innerText = finalTotal;
    total.innerText = finalTotal;
}

// // discount -- function;
// function discount(p){
//     const percentage = (p * 20) / 100;
//     const discountPrice = p - percentage;
//     return discountPrice;
// }