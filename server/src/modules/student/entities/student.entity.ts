import { Entity } from '../../../common/entities/entity';
import { UniqueNumericalId } from '../../../common/entities/uniqueNumericalId';
import { Cpf } from '../../../types/studentCpf';
import { Email } from '../../../types/studentEmail';
import { GetStudentDto } from '../dto/get-student.dto';

interface StudentProps {
  name: string;
  email: string;
  cpf: string;
}

export class Student extends Entity<StudentProps> {
  private readonly _id: UniqueNumericalId;

  constructor(props: StudentProps, id?: UniqueNumericalId) {
    super(props);
    this._id = id;
  }

  static create({ name, cpf, email }: StudentProps): Student {
    return new Student({
      name,
      cpf: Cpf.create(cpf).value,
      email: Email.create(email).value,
    });
  }

  static restore({ name, cpf, email }: StudentProps, id: number): Student {
    return new Student(
      {
        name,
        cpf: Cpf.create(cpf).value,
        email: Email.create(email).value,
      },
      UniqueNumericalId.restore(id),
    );
  }

  get id(): UniqueNumericalId | null {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  get cpf(): string {
    return this.props.cpf;
  }

  get email(): string {
    return this.props.email;
  }

  static toViewDto(student: Student): GetStudentDto {
    return {
      id: student.id.value,
      name: student.name,
      email: student.email,
      cpf: student.cpf,
    };
  }
}
