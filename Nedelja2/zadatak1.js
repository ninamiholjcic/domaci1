//За два броја (а и б) исписати њихов: Збир,разлику,производ,количник,остатак при дељењу,степен (а^b)
var a = 10;
var b = 6;


console.log(`a + b je ${a+b}`);


console.log(`a - b je ${a-b}`);

var e = a * b;
console.log(`a * b je ${e}`);

var f = a / b;
console.log(`a / b je ${f}`);
console.log(`a / b zaokruzeni rezultat je ${Math.round(f)}`);

var g = a % b;
console.log(`ostatak pri deljenju a od b je ${g}`);


console.log(`stepen a na b je ${Math.pow(a, b)}`);

