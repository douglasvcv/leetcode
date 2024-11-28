var isPalindrome = function(x) {
    let xStr= x.toString()
    const reversedNum= parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x)
    let firstNum = xStr[0]
    if(firstNum == "-"){
        return false
    }
    if(xStr == reversedNum){
        return true
    }else{
        return false
    }
};