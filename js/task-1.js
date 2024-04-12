function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
let result = makeTransaction(5, 3000);
console.log("🚀 ~ result:", result);

result = makeTransaction(3, 1000);
console.log("🚀 ~ result:", result);

result = makeTransaction(10, 500);
console.log("🚀 ~ result:", result);



