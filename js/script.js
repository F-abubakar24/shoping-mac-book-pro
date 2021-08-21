// Memory button
const memory8GB = document.getElementById('memory-8gb');
const memory16GB = document.getElementById('memory-16gb');
// Storage button
const storage226GB = document.getElementById('storage-256gb');
const storage512GB = document.getElementById('storage-512gb');
const storage1TB = document.getElementById('storage-1tb');
// delivery button
const freeDelivery = document.getElementById('free-delivery');
const paidDelivery = document.getElementById('paid-delivery');

// ==== priceing part ====
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');
const total = document.getElementById('total');




// ========= memory part =========
memory8GB.addEventListener('click', function(){
    allButtonHandler('memory', '0');
    totalPriceUpdate();
    focusedButton(memory8GB, memory16GB); // focused buttn style
})
memory16GB.addEventListener('click', function(){
    allButtonHandler('memory', '180');
    totalPriceUpdate();
    focusedButton(memory16GB, memory8GB); // focused buttn style
})

// ========= memory part =========
storage226GB.addEventListener('click', function(){
    allButtonHandler('storage', '0');
    totalPriceUpdate();
    focusedButton(storage226GB, storage512GB, storage1TB); // focused buttn style
})
storage512GB.addEventListener('click', function(){
    allButtonHandler('storage', '100');
    totalPriceUpdate();
    focusedButton(storage512GB, storage226GB, storage1TB); // focused buttn style
})
storage1TB.addEventListener('click', function(){
    allButtonHandler('storage', '180');
    totalPriceUpdate();
    focusedButton(storage1TB, storage226GB, storage512GB); // focused buttn style
})

// ========= delivery part =========
freeDelivery.addEventListener('click', function(){
    allButtonHandler('delivery', '0');
    totalPriceUpdate();
    focusedButton(freeDelivery, paidDelivery); // focused buttn style
})
paidDelivery.addEventListener('click', function(){
    allButtonHandler('delivery', '20');
    totalPriceUpdate();
    focusedButton(paidDelivery, freeDelivery); // focused buttn style
})




// ========= promo code part =========
const promocodeInput = document.getElementById('promocode-input');
const applyBtn = document.getElementById('apply-btn');

applyBtn.addEventListener('click', function(){
    // const inputItem = promocodeInput.value;
    // const totalAmount = parseFloat(total.innerText);

    // if(inputItem === 'stevekaku'){
    //     total.innerText = discount(totalAmount);
    //     promocodeInput.value = '';
    // }

    if (isNaN(promocodeInput.value)) {
    
        if (promocodeInput.value == 'stevekaku') {
    
            const discount = (Number(totalPrice.innerText) *20)/100;
            total.innerText = Number(totalPrice.innerText)-discount;
            promocodeInput.value = '';

       }
    }

})