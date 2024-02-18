// number  - 5; 29.8
// string  - 'nome'; "silva"; "4 folhas"
// boolean - true; false

var valor = 4;
console.log(typeof valor);
// vai imprimir 'number'

var sobrenome = "Silva";
console.log(typeof sobrenome);
// Vai imprimir 'string'

var ligado = true;
console.log(typeof ligado);
// Vai imprimir 'boolean'

// array
var estados = ["Rio de Janeiro", "São Paulo", "Bahia"];
// estados[0] = "Rio de Janeiro";
// estados[1] = "São Paulo";

// NaN - not a number
// var idade;
// console.log(idade+1);

// undefined -> variável sem valor atribuido

// null -> para variáveis ainda sem valor definido

// null e undefined são iguais
null == undefined // o resultado será true
null != undefined // o resultado será false

// const -> constante, valores que não podem mudar

//OPERADORES

// Aritiméticos: + - * / %

console.log("texto string" + " e outro texto string") 
// vai imprimir "texto string e outro texto string" -> concatenação
console.log("5" + "6")
// Vai imprimir "56" -> concatenação

console.log(5 + 20); // 25
console.log(5 + true); // 6
console.log(5 + null); // 5
console.log(true + true); // 2
console.log(true + null); // 1
console.log(null + null); // 0
console.log(null + false); // 0
console.log(5 + undefined); // NaN
console.log(null + undefined); // NaN

// Atribuição: =
// Incremento: ++ --
// Comparação: == != < > <= >= === !==

// === !=== : verificar se são do mesmo valor e mesmo tipo

// Lógicos && (and) || (or) !(not)
true && false // false
false || false // false
!true // false
