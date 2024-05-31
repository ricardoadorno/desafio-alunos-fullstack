import type { AxiosInstance } from 'axios'
import axiosApi from './axioApi'

class ApiService {
  protected readonly http: AxiosInstance

  constructor(path: string) {
    this.http = axiosApi(path)
  }

  protected handleError(error: any) {
    throw error
  }
}

export default ApiService
