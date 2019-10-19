function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let operator = {
                    "-" : 1, "+" : 1,
                    "*" : 2, "/" : 2,
                    "(" : 3, ")" : 3
                                    };


    function calculate(num1, oper, num2) {
        var result;
        if(oper == '*'){
            result = num1 * num2;
        }
        else if(oper == '/'){
            if(num2 == 0) throw("TypeError: Division by zero.");
            result = num1 / num2;
        }
        else if(oper == '+'){
            result = num1 + num2;
        } 
        else if(oper == '-'){
            result = num1 - num2;
        };
        return result;
    }

    let countBracket = {
                        "(" : 0,
                        ")" : 0 
                                }
    countBracket["("] = expr.split('').filter(el => el === "(").length;
    countBracket[")"] = expr.split('').filter(el => el === ")").length; 
    if(countBracket["("] !== countBracket[")"]) {throw("ExpressionError: Brackets must be paired")};
    
    let commonArray = expr.split(/\s+/g);
 
console.log(commonArray)

    for(let i = 0; i < commonArray.length; i++) {
        if(operator[commonArray[i]] == 2 && operator[commonArray[i + 1] != 3]){
        let result = calculate(commonArray[i - 1], commonArray[i], commonArray[i + 1]);
        expr = expr.splice((i - 1), 3, result);
        }
     }
     console.log(expr)
    return expr;
    
}

module.exports = {
    expressionCalculator
} 