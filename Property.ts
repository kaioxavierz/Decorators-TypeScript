function logProperty(target: any, propertyKey: string) {
    let value = target[propertyKey];
  
    const getter = () => {
      console.log(`Obtendo valor de ${propertyKey}: ${value}`);
      return value;
    };
  
    const setter = (newVal: any) => {
      console.log(`Definindo valor de ${propertyKey} para: ${newVal}`);
      value = newVal;
    };
  
    Object.defineProperty(target, propertyKey, { get: getter, set: setter });
  }
  
  class MinhaClasse {
    @logProperty
    nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  }
  
  const obj = new MinhaClasse("João");
  console.log(obj.nome); // Obtendo valor de nome: João
  obj.nome = "Maria";   // Definindo valor de nome para: Maria
  