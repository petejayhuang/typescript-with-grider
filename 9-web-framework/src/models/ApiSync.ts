import axios, { AxiosPromise } from 'axios'

interface HasId {
  id?: number
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`)
  }

  save(data: T): AxiosPromise {
    const { id } = data
    console.log('id:', id)
    if (id) {
      console.log('id exists, so PUT')
      return axios.put(`${this.rootUrl}/${id}`, data)
    } else {
      console.log('id does not exist, so POST')
      return axios.post(this.rootUrl, data)
    }
  }
}
