import { HttpException, HttpStatus } from '@nestjs/common';
import { ValueObject } from '../common/entities/valueObject';
import ValidationErrors from '../common/errors/validationErrors';

interface CpfProps {
  value: string;
}

export class Cpf extends ValueObject<CpfProps> {
  static create(cpf: string) {
    const cpfRegex = /^\d{11}$/;

    if (!cpfRegex.test(cpf)) {
      throw new HttpException(
        ValidationErrors.INVALID_CPF,
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return new Cpf({ value: cpf });
  }

  static restore(cpf: string) {
    return new Cpf({ value: cpf });
  }

  get value(): string {
    return this._props.value;
  }
}
