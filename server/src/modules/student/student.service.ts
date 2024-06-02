import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentRepository } from './student.repository';
import { StudentFilterParams } from './types/student-filter-params';
import { Student } from './entities/student.entity';
import { isEmpty } from 'src/common/checkers/isEmpty';
import { GetStudentDto } from './dto/get-student.dto';
import ResourceErrors from 'src/common/errors/resourceErrors';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}

  async create(createStudentDto: CreateStudentDto): Promise<void> {
    const student = Student.create(createStudentDto);

    if (await this.studentRepository.cpfAlreadyExists(createStudentDto.cpf))
      throw new HttpException(
        ResourceErrors.CPF_ALREADY_EXISTS,
        HttpStatus.CONFLICT,
      );

    if (await this.studentRepository.emailAlreadyExists(createStudentDto.email))
      throw new HttpException(
        ResourceErrors.EMAIL_ALREADY_EXISTS,
        HttpStatus.CONFLICT,
      );

    await this.studentRepository.create(student);
  }

  async findAllOrFilter(query?: StudentFilterParams): Promise<GetStudentDto[]> {
    if (isEmpty(query)) {
      return (await this.studentRepository.findAll()).map(Student.toViewDto);
    }

    return (await this.studentRepository.findByFilter(query)).map(
      Student.toViewDto,
    );
  }

  async findAll(): Promise<GetStudentDto[]> {
    return (await this.studentRepository.findAll()).map(Student.toViewDto);
  }

  async findOne(id: number): Promise<GetStudentDto> {
    return Student.toViewDto(await this.studentRepository.findOne(id));
  }

  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<void> {
    const registeredStudent = await this.studentRepository.findOne(id);

    const student = Student.restore(
      {
        name: updateStudentDto.name ?? registeredStudent.name,
        cpf: updateStudentDto.cpf ?? registeredStudent.cpf,
        email: updateStudentDto.email ?? registeredStudent.email,
      },
      id,
    );

    if (
      Boolean(updateStudentDto.cpf) &&
      (await this.studentRepository.cpfAlreadyExists(updateStudentDto.cpf))
    ) {
      throw new HttpException(
        ResourceErrors.CPF_ALREADY_EXISTS,
        HttpStatus.CONFLICT,
      );
    }

    if (
      Boolean(updateStudentDto.email) &&
      (await this.studentRepository.emailAlreadyExists(updateStudentDto.email))
    ) {
      throw new HttpException(
        ResourceErrors.EMAIL_ALREADY_EXISTS,
        HttpStatus.CONFLICT,
      );
    }

    return await this.studentRepository.update(student);
  }

  async remove(id: number): Promise<void> {
    return await this.studentRepository.remove(id);
  }
}
