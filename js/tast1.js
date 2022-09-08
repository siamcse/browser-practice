console.log('one');
console.log('two');
// console.log('three');
setTimeout(() => {
    console.log('three');
}, 3500);
console.log('four');
console.log('five');

const numberString = prompt('enter a number');
const numberFloat = parseFloat(numberString);
alert(`the added number is: ${numberFloat+250}`);