function decorator(target: any, propertyKey: string): any {
  let value: any = target[propertyKey]
  return {
     get: () => {
      console.log('pegando o valor atual de nome ' + value);
      return value;
     },
     set: (newValue: any) => {
      if( typeof newValue === 'string' ){
        value = newValue.split('').reverse().join('');
        return;
      }
      value = newValue;
     }
  }
}
export class aPerson {
  @decorator
  name: string;
  sobrenome: string;
  @decorator
  idade: number;
  constructor(name: string, sobrenome: string, idade: number) {
      this.name = name;
      this.sobrenome = sobrenome;
      this.idade = idade;

  }
  metodo(msg: string): string {
     return `${this.name} ${this.sobrenome} com ${this.idade} idade: ${msg}`;
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
pessoa.name = 'vitoria'
// pessoa.metodo = () => 'eiiiii'
console.log(pessoa.metodo('Está dizendo oi'))
