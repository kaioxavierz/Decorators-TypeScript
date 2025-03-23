// Decorator realiza ações antes de te entregar o objeto
@decorator
export class Animal {
    constructor(public name: string, public cor: string) {}
};
function decorator<T extends new (...args: any[]) => any> (target: T) : T {
  // Type T = new (name: string, cor: string) => Animal
  // T recebe os parametros de qualquer construtor recebido no target
    return class extends target {
        public atributoAdicionado: any[]
        constructor(...args: any[]) {
            super(...args);
            this.atributoAdicionado = args
            //Propriedades sobrescrevidas
            this.name = this.inverte(args[0])
            this.cor = this.inverte(args[1])
        };
        inverte(valor: string) : string {
            return valor.split('').reverse().join('');
        }
    }
};
const animal = new Animal('kaio', 'verde');
console.log(animal);
