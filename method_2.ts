function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(args)
      console.log(`Chamando o método ${propertyKey} com argumentos: ${JSON.stringify(args)}`);
      return originalMethod.apply(this, args);
    };
}

class MyClasse {
    @logMethod
    minhaFuncao(a: number, b: number) {
      return a + b;
    }
};

const objt = new MyClasse();
objt.minhaFuncao(2, 3);
