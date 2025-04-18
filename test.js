const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(expected);
});

test("One dollar should be 156.5 yen", function() {
    const expected = 5 * 156.5;  
    expect(fromDollarToYen(5)).toBe(expected);
});

test("One yen should be 0.00556 pounds", function() {
    const expected = 1000 * (0.87 / 156.5);  
    expect(fromYenToPound(1000)).toBeCloseTo(expected, 5);  
});

