import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentRepository } from './student.repository';
import { StudentFilterParams } from './types/student-filter-params';
import { Student } from './entities/student.entity';
import { isEmpty } from 'src/common/checkers/isEmpty';
import { GetStudentDto } from './dto/get-student.dto';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}

  async create(createStudentDto: CreateStudentDto): Promise<void> {
    await this.studentRepository.create(Student.create(createStudentDto));
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

    return await this.studentRepository.update(student);
  }

  async remove(id: number): Promise<void> {
    return await this.studentRepository.remove(id);
  }
}
