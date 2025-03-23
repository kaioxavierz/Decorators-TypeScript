function decorator(
    classPrototype: any,
    nameMethod: string,
    index: number,
): any {
    console.log(classPrototype)
    console.log(nameMethod)
    console.log(index)
    return {
        Writable: false
    }
};
export class aPerson {
    public name: string;
    public sobrenome: string;
    public idade: number;
    constructor(name: string, sobrenome: string, idade: number) {
        this.name = name;
        this.sobrenome = sobrenome;
        this.idade = idade;
    };
    metodo(@decorator msg: string): string {
       return `${this.name} ${this.sobrenome}: ${msg}`;
    };
    get nomeCompleto(): string {
        return this.name + ' ' + this.sobrenome;
    };
    set nomeCompleto(valor: string) {
        const palavras = valor.split(/\s+/g);
        const primeiroName = palavras.shift();
        if(!primeiroName) return;
        this.name = primeiroName;
        this.sobrenome = palavras.join(' ');
    };
}
const pessoa = new aPerson('kaio', 'xavier', 21)
const metodo = pessoa.metodo('Está dizendo oi');
