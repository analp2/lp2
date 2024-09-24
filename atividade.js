//Classes em JavaScript;

class PilotoFormula1 {
    nome = '';
    equipe = '';
    idade = 0;
    correr() {
        console.log('Vruuuuuuum!');
    },
};

//Objeto em JavaScript;

let dadosAlfredo = {
    nome: 'Alfredo',
    idade: 27,
    endereco: 'Rua que sobe e desce',
    numeroIdentificador: 2135432,
}

// Atributo em JavaScript

const button = document.querySelector("button");

button.setAttribute("name", "helloButton");
button.setAttribute("disabled", "");


//Metodo em JavaScript (metodo push)
let  numeros = [1, 2, 3];
numeros.push(4);

console.log(numeros); // [1, 2, 3, 4]

numeros.push(5, 6, 7);

console.log(numeros); // [1, 2, 3, 4, 5, 6, 7]

//Herança JavaScript

// ler class ContaPoupanca herda tudo de conta 
// ler2 : class ContaPoupanca é filha de conta
import { pessoa } from "./pessoa.js";
//classe ContaPoupanca herda tudo de conta
export class estudante extends pessoa {

    imprimirInformacoes() {
        if(this.telefone != null){
        console.log('tel: ', this.telefone, 'nome: ', this.nome, 'cpf: ', this.cpf, 'endereco: ', this.endereco, 'email: ', this.email);
        }else{
            console.log('nome: ', this.nome, 'cpf: ', this.cpf, 'endereco: ', this.endereco, 'email: ', this.email);
        }
    }
}

// Polimorfismo em javascript
var pai = { 
    getValor: function funcao(){ 
      return this.valor; 
    }, 
    valor:10 
  }; 
  function outraFuncao(){ 
    return this.valor + this.valor; 
  } 
  var filho = Object.create(pai); 
  filho.getValor = function outraFuncao(){ 
    return this.valor + 5; 
  }; 
  filho.valor = 2; 
  pai.getValor(); //Continua retornando 10 
  filho.getValor(); //Retorna 7
  Agora, qual seria um dos probl