interface Constructor {
    new (...args: any[]): any
}
function InvertNameCor(param1: string, param2: string){
    return function Invert<T extends Constructor>(target: T) : T {
        console.log(`chamado decorator da classe: ${target}`);
        return class extends target {
            cor:  string;
            name: string;
            constructor(...args: any[]) {
                super(...args);
                this.name = this.inverte(args[0])
                this.cor = this.inverte(args[1])
            };
            inverte(valor: string) : string {
                return valor.split('').reverse().join('') + ' '+ param1 + ' ' + param2;
            }
        }
    }
}
function OtherDecoration(param1: string) {
    return function(target: Constructor){
        console.log('Sou o outro decorador ' + param1);
        return target;
      }
}
@OtherDecoration('value otherDeco') // Chamado segundo..
@InvertNameCor('Value1', 'Value2') // Chamado primeiro
export class Animal {
    constructor(public name: string, public cor: string) {}
}
const animal = new Animal('kaio', 'verde');
console.log(animal);
