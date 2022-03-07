//  Três formas de declarar uma função em Javascript

// -------------------------------------------------------
// Convencional.
// Obs: Funções só devem ser chamadas após sua declaração, assim como C e C++.

const makeNoise = function() {
    console.log("Pling!");
    alert("Hey, i've just plinged on the console!\nPress F12 to check it out!");
};

makeNoise();

// Também pode receber parâmetros.

const power = function(base, exponent){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
};

let base = 3;
let exponent = 4;

console.log("Result: " + power(base, exponent));
alert("Nice, now i noticed that you want to know whats the result of " + base + " to the power of " + exponent + ".\nCheck it out on the console.")

// FUNÇÕES COMO VALORES


// -------------------------------------------------------
// Notação de declaração
// Dessa forma, não é mais necessário chamar a função só após sua definição,
// permitindo uma organização de código mais livre.
// Em termos de forma, é mais parecida com funções em C.

alert(square(7));

function square(num) {
    return num * num;
}

// -------------------------------------------------------
// Arrow functions
// Não existe um motivo específico para existirem, se comportam da mesma forma que a notação convencional.
// Com elas é possível escrever algumas categorias de funções de forma menos verbosa.

// A sintaxe abaixo pode ser lida como:
// A função POWER é a seguinte: recebe os valores (base, exponent) e produz o resultado => {...}


const powerAlternative = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
};

alert(powerAlternative(3,4)); // Assim como a convencional, tem que ser chamada após a declaração.


// Algumas minúcias das arrow functions.

const square1 = (x) => { return x * x; };
const square2 = x => x * x; // 1 argumento não necessita de parênteses.

const horn = () => { // Sem argumentos é apenas uma parênteses vazio.
console.log("Toot");
};



















