
let myArray = [2, 3, 5, 7, 11];

// Toda estrutura de dados possui propriedades em Javascript, à exceção de null e undefined.

// Duas formas de acessar uma propriedade de um valor:
// 01) Recebe o nome literal do atributo.
// 02) Avalia a expressão entre os colchetes, converte o resultado p/ string e procura pelo mesmo nome.
let myString = "Artur Amaral"
let len1 = myString.length
let len2 = myString["len" + "gth"]

//----------------------------------------------------------------------------------------
// Exemplo prático da segunda opção.
// A mesma linha de código pode decidir qual propriedade devolver em tempo de execução.

// Caso queira o nome da propriedade salvo num determinado binding (variável)
// propertyRequired = input()
// myString[propertyRequired]

let propertyRequired1 = "length"
let propertyRequired2 = "constructor"

//alert(myString[propertyRequired1])
//alert(myString[propertyRequired2])

//----------------------------------------------------------------------------------------
// OBJETOS -> Coleção arbitrária de valores.

// Dentro dos parênteses há uma lista de propriedades separadas por vírgulas, no formato (nome: valor)

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

//alert("events" in day1); // O operador "in" indica se existe aquela propriedade no objeto.
//alert("artur" in day1);

alert(typeof Object.keys(day1))

// ARRAY -> É um objeto cujas propriedades possuem nomes como números, representando os índices.
// O array abaixo é idêntico ao array do início deste script.

let myObjectArray = {
    "0": 2,
    "1": 3,
    "2": 5,
    "3": 7,
    "4": 11,
}

let myBrandNewObject = {}; // Declarando objeto vazio. Necessário para ser do mesmot tipo.
Object.assign(myBrandNewObject, myObjectArray);

console.log(myObjectArray)
console.log(myBrandNewObject)

//----------------------------------------------------------------------------------------
// MUTABILIDADE


// No caso abaixo, 1 e 2 são precisamente o mesmo objeto (Isto é, são bindings que apontam para a mesma
// estrutura de dados subjacente na memória). 3 é um objeto inicializado inicialmente com os mesmo valores,
// mas não é o mesmo objeto. Um alteração em 1 altera 2, mas não 3, que "vive uma vida" separada.

let object1 = {"nome": "Artur", "idade": 20};
let object2 = object1
let object3 = {"nome": "Artur", "idade": 20};
