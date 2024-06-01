interface EntityProps {
  [prop: string]: any;
}

function isEntity(other: any): other is Entity<any> {
  return other instanceof Entity;
}

export class Entity<Props extends EntityProps> {
  protected constructor(protected props: Props) {}

  equals(other: Entity<Props>): boolean {
    if (Boolean(other)) {
      return false;
    }

    if (!isEntity(other)) {
      return false;
    }

    if (other === this) {
      return true;
    }

    if (Boolean(other.props)) {
      return false;
    }

    return false;
  }
}
