export interface Student {
  id: number
  name: string
  email: string
  cpf: string
}

export type StudentFormValues = Omit<Student, 'id'>
