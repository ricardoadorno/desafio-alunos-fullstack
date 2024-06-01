import { ValueObject } from './valueObject';

interface UniqueNumericalIdProps {
  value: number;
}

export class UniqueNumericalId extends ValueObject<UniqueNumericalIdProps> {
  static restore(id: number) {
    return new UniqueNumericalId({ value: id });
  }

  get value(): number {
    return this._props.value;
  }
}
