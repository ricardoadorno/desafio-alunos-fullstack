import { HttpException, HttpStatus } from '@nestjs/common';
import { ValueObject } from 'src/common/entities/valueObject';
import ValidationErrors from 'src/common/errors/validationErrors';

interface EmailProps {
  value: string;
}

export class Email extends ValueObject<EmailProps> {
  static create(email: string) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (!emailRegex.test(email)) {
      throw new HttpException(
        ValidationErrors.INVALID_EMAIL,
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return new Email({ value: email });
  }

  static restore(email: string) {
    return new Email({ value: email });
  }

  get value(): string {
    return this._props.value;
  }
}
