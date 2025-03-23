// Aplica a getters ou Setters
function Enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

class Animal {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  @Enumerable(false)
  get name() {
    return this._name;
  }
}
