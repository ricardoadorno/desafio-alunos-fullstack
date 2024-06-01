import { ValueObject } from 'src/common/entities/valueObject';

interface EmailProps {
  value: string;
}

export class Email extends ValueObject<EmailProps> {
  static create(email: string) {
    // const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    // if (!emailRegex.test(email)) {
    //   throw new Error('Valor invalido');
    // }

    return new Email({ value: email });
  }

  static restore(email: string) {
    return new Email({ value: email });
  }

  get value(): string {
    return this._props.value;
  }
}
