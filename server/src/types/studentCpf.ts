import { ValueObject } from 'src/common/entities/valueObject';

interface CpfProps {
  value: string;
}

export class Cpf extends ValueObject<CpfProps> {
  static create(cpf: string) {
    // const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    // if (!cpfRegex.test(cpf)) {
    //   throw new Error('Valor invalido');
    // }

    return new Cpf({ value: cpf });
  }

  static restore(cpf: string) {
    return new Cpf({ value: cpf });
  }

  get value(): string {
    return this._props.value;
  }
}
