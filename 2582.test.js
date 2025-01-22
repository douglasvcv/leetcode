
const passThePillow = require('./chalengers/2582-Pass_The_Pillow')

test("n igual a 4 e time igual a 5 vai dar 2", ()=>{
    expect(passThePillow(4,5)).toBe(2)
})