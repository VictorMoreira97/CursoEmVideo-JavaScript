console.log("Hello World")

// somando números diferentes
var soma = 40.10 + 10;

// alterar o tipo da variável
var idade = 18;
idade = "18 anos"

var aluno = "Joaquim"; // Variável do tipo String
aluno = {
    // Variável do tipo Object
    nome: "João",
    idade: 20
}

// Varipavel do tipo Number
var valorDoServico = 20.00;

// Variável do tipo Array
valorDoServico = [13.99, 34.87, 29.99];

// criar uma função
function somandoDoisNumeros(n1, n2) {
    return n1 + n2;
}

// Case sensitive 
// var usuario = new Usuario();
// Usuario -> classe

// Multiparadigma
var n1 = 9;
var n2 = 4;

var somarNumero = function(n1, n2) {
    return n1 + n2
}
console.log(somarNumero(n1, n2))

// class Calculadora extends Component {
//    constructor(props) {
//        super(props);
//        this.somar = this.somar.bind(this);
//    }
//    somar(n1, n2) {
//        return n1 + n2;
//    }
//}

// Ao utilizar var conseguimos redeclarar uma mesma variavel
var name = "José";
var name = "Pedro"

// Isso não é possível usando let
let name = "José"; 
let name = "Pedro";

// Outra diferença é sobre o escopo: if, for, while e funções