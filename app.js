const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 106.6;
    // retornamos el valor
    return valueInYen;
}

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.006;
    // retornamos el valor
    return valueInPound;
}


const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };


/* one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}*/