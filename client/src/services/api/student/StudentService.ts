import ApiService from '../ApiService'
import type { CreateStudentRequest } from './interfaces/CreateStudentRequest'
import type { GetAllStudentsQueryParams } from './interfaces/GetAllStudentsQueryParams'
import type { GetStudentResponse } from './interfaces/GetStudentResponse'
import type { UpdateStudentRequest } from './interfaces/UpdateStudentRequest'

export class StudentService extends ApiService {
  constructor() {
    super('student')
  }

  async getById(id: number): Promise<GetStudentResponse> {
    const { data } = await this.http.get<GetStudentResponse>(`/${id}`)

    return data
  }

  async getAll(params?: GetAllStudentsQueryParams): Promise<GetStudentResponse[]> {
    const { data } = await this.http.get<GetStudentResponse[]>('', { params })

    return data
  }

  async create(student: CreateStudentRequest): Promise<void> {
    await this.http.post('', student)

    this.onSuccess('Student created successfully')
  }

  async update(id: number, student: UpdateStudentRequest): Promise<void> {
    await this.http.put(`/${id}`, student)

    this.onSuccess('Student updated successfully')
  }

  async delete(id: number): Promise<void> {
    await this.http.delete(`/${id}`)

    this.onSuccess('Student deleted successfully')
  }
}
