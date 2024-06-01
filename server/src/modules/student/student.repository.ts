import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Student } from './entities/student.entity';
import { StudentFilterParams } from './types/student-filter-params';

@Injectable()
export class StudentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(student: Student): Promise<void> {
    await this.prisma.student.create({
      data: {
        name: student.name,
        cpf: student.cpf,
        email: student.email,
      },
    });
  }

  async findAll(): Promise<Student[]> {
    const studentsList = await this.prisma.student.findMany();

    return studentsList.map((studentModel) =>
      Student.restore(
        {
          name: studentModel.name,
          cpf: studentModel.cpf,
          email: studentModel.email,
        },
        studentModel.id,
      ),
    );
  }

  async findByFilter(filter: StudentFilterParams): Promise<Student[]> {
    const studentsList = await this.prisma.student.findMany({
      where: {
        name: {
          contains: filter.name,
          mode: 'insensitive',
        },
        cpf: {
          contains: filter.cpf,
        },
        email: {
          contains: filter.email,
        },
      },
    });

    return studentsList.map((studentModel) =>
      Student.restore(
        {
          name: studentModel.name,
          cpf: studentModel.cpf,
          email: studentModel.email,
        },
        studentModel.id,
      ),
    );
  }

  async findOne(id: number): Promise<Student> {
    const studentModel = await this.prisma.student.findUnique({
      where: { id },
    });

    return Student.restore(
      {
        name: studentModel.name,
        cpf: studentModel.cpf,
        email: studentModel.email,
      },
      studentModel.id,
    );
  }

  async update(student: Student): Promise<void> {
    await this.prisma.student.update({
      where: { id: student.id.value },
      data: {
        name: student.name,
        cpf: student.cpf,
        email: student.email,
      },
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.student.delete({
      where: { id },
    });
  }
}
