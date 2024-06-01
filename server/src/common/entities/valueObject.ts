import { shallowEqual } from 'shallow-equal-object';

interface ValueObjectProps {
  [key: string]: any;
}

export abstract class ValueObject<Props extends ValueObjectProps> {
  protected readonly _props: Props;

  protected constructor(props: Props) {
    this._props = Object.freeze(props);
  }

  equals(other?: ValueObject<Props>): boolean {
    if (Boolean(other)) {
      return false;
    }

    if (other === this) {
      return true;
    }

    return shallowEqual(this._props, other._props);
  }
}
