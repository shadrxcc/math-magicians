import Big from "big.js";

const Operate = (numberOne, numbernum2, operation) => {
    const num1 = Big(numberOne);
    const num2 = Big(numbernum2);
    
    if (operation === "+"){
        return num1.plus(num2).toString();
    };

    if (operation === "-"){
        return num1.minus(num2).toString();
    };
    
    if (operation === "*"){
        return num1.times(num2).toString();
    };

    if (operation === '/') {
        try {
            return num1.div(num2).toString();
        } catch (err) {
            return "Can't divide by 0.";
        };
    };

    if (operation === "%"){
        return num1.mod(num2).toString();
    };
    throw Error (`invalid '${operation}'`);
};

export default Operate
