const simpleCalculator = (a,b,operation) =>{
    if(operation === 'add'){
        console.log(a+b);
    }
    else if(operation === 'subtract'){
        console.log(a-b);
    }
    else if(operation === 'multiply'){
        console.log(a*b);
    }
    else if(operation === 'divide'){
        console.log(a/b);
    }
    else if(operation === 'modulus'){
        console.log(a%b);
    }
    else{
        console.log('Invalid Operation');
    }
}
simpleCalculator(4,5,'add');
simpleCalculator(6,4,'divide');