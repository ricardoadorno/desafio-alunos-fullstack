import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from './student.service';
import { StudentRepository } from './student.repository';
import { PrismaService } from '../../database/prisma.service';

describe('StudentService', () => {
  let service: StudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentService, StudentRepository, PrismaService],
    }).compile();

    service = module.get<StudentService>(StudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
