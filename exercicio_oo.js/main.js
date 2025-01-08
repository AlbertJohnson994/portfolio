// Classe abstrata
class Animal {
    constructor(nome, idade) {
        if (this.constructor === Animal) {
            throw new Error("Classe abstrata 'Animal' não pode ser instanciada diretamente.");
        }
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        throw new Error("O método 'emitirSom' deve ser implementado na subclasse.");
    }
}

// Subclasse 1
class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    emitirSom() {
        return "Au au!";
    }
}

// Subclasse 2
class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    emitirSom() {
        return "Miau!";
    }
}

// Instâncias de objetos
const cachorro1 = new Cachorro("Rex", 5, "Labrador");
const gato1 = new Gato("Mimi", 3, "Cinza");
const cachorro2 = new Cachorro("Thor", 2, "Bulldog");

// Testando os métodos
console.log(cachorro1.emitirSom()); // Output: "Au au!"
console.log(gato1.emitirSom());    // Output: "Miau!"
console.log(cachorro2.emitirSom()); // Output: "Au au!"

// Exibindo detalhes das instâncias
console.log(cachorro1);
console.log(gato1);
console.log(cachorro2);
