// memory function;
function memory(price){
    memoryCost.innerText = price;
}

// storage function;
function storage(price){
    storageCost.innerText = price;
}

// delivery function;
function delivery(price){
    deliveryCharge.innerText = price;
}

// update price
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