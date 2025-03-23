function logParameter(target: any, methodName: string, index: number) {
    console.log(`Parâmetro no método ${methodName} na posição ${index}`);
}
class MyCLass2 {
    minhaFuncao(@logParameter a: number, b: number) {
      console.log(a + b);
    }
}

const objtt = new MyCLass2();
objtt.minhaFuncao(1, 2);
