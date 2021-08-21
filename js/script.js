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
    memory('0');
    totalPriceUpdate()
})
memory16GB.addEventListener('click', function(){
    memory('180');
    totalPriceUpdate()
})

// ========= memory part =========
storage226GB.addEventListener('click', function(){
    storage('0');
    totalPriceUpdate()
})
storage512GB.addEventListener('click', function(){
    storage('100');
    totalPriceUpdate()
})
storage1TB.addEventListener('click', function(){
    storage('180');
    totalPriceUpdate()
})

// ========= delivery part =========
freeDelivery.addEventListener('click', function(){
    delivery('0');
    totalPriceUpdate()
})
paidDelivery.addEventListener('click', function(){
    delivery('20');
    totalPriceUpdate()
})

// ========= promo code part =========
const promocodeInput = document.getElementById('promocode-input');
const applyBtn = document.getElementById('apply-btn');

applyBtn.addEventListener('click', function(){
    const inputItem = promocodeInput.value;
    const totalAmount = parseFloat(total.innerText);

    if(inputItem === 'stevekaku'){
        total.innerText = discount(totalAmount);
        promocodeInput.value = '';
    }

})