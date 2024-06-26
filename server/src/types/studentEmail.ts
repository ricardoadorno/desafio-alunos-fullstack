import { HttpException, HttpStatus } from '@nestjs/common';
import { ValueObject } from '../common/entities/valueObject';
import ValidationErrors from '../common/errors/validationErrors';

interface EmailProps {
  value: string;
}

export class Email extends ValueObject<EmailProps> {
  static create(email: string) {
    const emailRegex =
      /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;

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
