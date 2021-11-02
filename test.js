const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("one dollar should be 106.6 yens", function(){
    const {fromDollarToYen} = require('./app.js')
    expect(fromDollarToYen(2)).toBe(213.2);
})

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
      // hago mi comparacion (la prueba)
      expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    })


test("One yen should be 0.006 pounds", function(){
    const {fromYenToPound} = require('./app.js')
    expect(fromYenToPound(2.1)).toBe(0.0126);
})
    
  

