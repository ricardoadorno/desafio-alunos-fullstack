import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  HttpCode,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { GetStudentDto } from './dto/get-student.dto';
import { StudentFilterParams } from './types/student-filter-params';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createStudentDto: CreateStudentDto): Promise<void> {
    await this.studentService.create(createStudentDto);
  }

  @Get()
  async findAllOrFilter(
    @Query() query?: StudentFilterParams,
  ): Promise<GetStudentDto[]> {
    return await this.studentService.findAllOrFilter(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<GetStudentDto> {
    return await this.studentService.findOne(+id);
  }

  @Put(':id')
  @HttpCode(204)
  async update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<void> {
    return await this.studentService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string): Promise<void> {
    return await this.studentService.remove(+id);
  }
}
