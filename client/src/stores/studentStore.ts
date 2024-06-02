import type { Student, StudentFormValues } from '@/common/types/Student'
import toast from '@/plugins/vueToast'
import { StudentService } from '@/services/api/student/StudentService'
import { reactive } from 'vue'

const studentService = new StudentService()

interface StudentStore {
  filterParams: StudentFormValues
  formState: StudentFormValues
  studentsList: Student[]

  clearForm: () => void
  setupEditForm: (id: number) => Promise<void>

  handleSearch: () => Promise<void>
  handleCreate: () => Promise<void>
  handleUpdate: (id: number) => Promise<void>
  handleDelete: (id: number) => Promise<void>
}

const studentStore = reactive<StudentStore>({
  formState: {
    name: '',
    email: '',
    cpf: ''
  },
  clearForm() {
    this.formState = {
      name: '',
      email: '',
      cpf: ''
    }
  },

  filterParams: {
    name: '',
    email: '',
    cpf: ''
  },
  studentsList: [],

  async setupEditForm(id) {
    const studentData = await studentService.getById(id)

    this.formState = studentData
  },

  async handleSearch() {
    const studentsData = await studentService.getAll(this.filterParams)

    if (studentsData.length === 0) {
      toast.info('No students found')
    }

    this.studentsList = studentsData
  },
  async handleCreate() {
    await studentService.create(this.formState)

    this.clearForm()

    await this.handleSearch()
  },
  async handleUpdate(id) {
    await studentService.update(id, this.formState)

    this.clearForm()

    await this.handleSearch()
  },
  async handleDelete(id) {
    await studentService.delete(id)

    await this.handleSearch()
  }
})

export default studentStore
