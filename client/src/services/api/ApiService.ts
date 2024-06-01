import type { AxiosInstance } from 'axios'
import axiosApi from './axioApi'
import toast from '@/plugins/vueToast'

class ApiService {
  protected readonly http: AxiosInstance

  constructor(path: string) {
    this.http = axiosApi(path)
  }

  protected handleError(error: any) {
    toast.error(error.message)

    throw error
  }

  protected onSuccess(message: string) {
    toast.success(message)
  }
}

export default ApiService
