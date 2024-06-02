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
    try {
      const { data } = await this.http.get<GetStudentResponse>(`/${id}`)

      return data
    } catch (error) {
      throw this.handleError(error)
    }
  }

  async getAll(params?: GetAllStudentsQueryParams): Promise<GetStudentResponse[]> {
    try {
      const { data } = await this.http.get<GetStudentResponse[]>('', { params })

      return data
    } catch (error) {
      throw this.handleError(error)
    }
  }

  async create(student: CreateStudentRequest): Promise<void> {
    try {
      await this.http.post('', student)

      this.onSuccess('Student created successfully')
    } catch (error) {
      throw this.handleError(error)
    }
  }

  async update(id: number, student: UpdateStudentRequest): Promise<void> {
    try {
      await this.http.put(`/${id}`, student)

      this.onSuccess('Student updated successfully')
    } catch (error) {
      throw this.handleError(error)
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.http.delete(`/${id}`)

      this.onSuccess('Student deleted successfully')
    } catch (error) {
      throw this.handleError(error)
    }
  }
}
