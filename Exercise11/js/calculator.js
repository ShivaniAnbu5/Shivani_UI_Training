calculator = {
    add : (val1,val2) => {
        return val1+val2;
    },
    sub : (val1,val2) => {
        return val1-val2;
    },
    mul : (val1,val2) => {
        return val1*val2;
    },
    div : (val1,val2) => {
        return val1/val2;
    },
}

var value1 = parseInt(prompt("Enter value 1: "));
var value2 = parseInt(prompt("Enter value 2: "));

console.log("Addition: "+value1+" + "+value2+" = "+ calculator.add(value1,value2));
console.log("Subtraction: "+value1+" - "+value2+" = "+ calculator.sub(value1,value2));
console.log("Multiplication: "+value1+" * "+value2+" = "+ calculator.mul(value1,value2));
console.log("Division: "+value1+" / "+value2+" = "+ calculator.div(value1,value2));