import ApiService from '../ApiService'
import type { CreateStudentRequest } from './interfaces/CreateStudentRequest'
import type { GetAllStudentsQueryParams } from './interfaces/GetAllStudentsQueryParams'
import type { GetStudentResponse } from './interfaces/GetStudentResponse'
import type { UpdateStudentRequest } from './interfaces/UpdateStudentRequest'

const MOCK_STUDENTS = [
  { id: 1, name: 'John Doe', cpf: '123.456.789-00', email: '123' },
  { id: 2, name: 'Jane Doe', cpf: '123.456.789-00', email: '123' },
  { id: 3, name: 'Jane Doe', cpf: '123.456.789-00', email: '123' },
  { id: 4, name: 'John Doe', cpf: '123.456.789-00', email: '123' },
  { id: 5, name: 'Jane Doe', cpf: '123.456.789-00', email: '123' },
  { id: 6, name: 'Jane Doe', cpf: '123.456.789-00', email: '123' },
  { id: 7, name: 'John Doe', cpf: '123.456.789-00', email: '123' }
]

export class StudentService extends ApiService {
  constructor() {
    super('/students')
  }

  async getById(id: number): Promise<GetStudentResponse> {
    const response = await this.http.get(`/${id}`)
    return response.data
  }

  async getAll(params?: GetAllStudentsQueryParams): Promise<GetStudentResponse[]> {
    // const response = await this.http.get('', { params })
    return MOCK_STUDENTS
  }

  async create(student: CreateStudentRequest): Promise<void> {
    const response = await this.http.post('', student)
    return response.data
  }

  async update(id: number, student: UpdateStudentRequest): Promise<void> {
    const response = await this.http.put(`/${id}`, student)
    return response.data
  }

  async delete(id: number): Promise<void> {
    const response = await this.http.delete(`/${id}`)
    return response.data
  }
}
