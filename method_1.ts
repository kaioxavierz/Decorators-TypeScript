function decorator(
    classPrototype: any,
    nameMethod: string,
    descriptor: PropertyDescriptor,
): PropertyDescriptor {
    console.log(classPrototype)
    console.log(nameMethod)
    console.log(descriptor)
    return {
        writable: false,
        value: function(...args: string[]) {
          return args[0].toUpperCase();
        }
    };
};
export class aPerson {
    name: string;
    sobrenome: string;
    idade: number;
    constructor(name: string, sobrenome: string, idade: number) {
        this.name = name;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    @decorator
    metodo(msg: string): string {
       return `${this.name} ${this.sobrenome}: ${msg}`;
    };
    get nomeCompleto(): string {
        return this.name + ' ' + this.sobrenome;
    }
    set nomeCompleto(valor: string) {
        const palavras = valor.split(/\s+/g);
        const primeiroName = palavras.shift();
        if(!primeiroName) return;
        this.name = primeiroName;
        this.sobrenome = palavras.join(' ');
    }
}

const pessoa = new aPerson('kaio', 'xavier', 21)
// pessoa.metodo = () => 'eiiiii'
console.log(pessoa.metodo('Está dizendo oi'))
