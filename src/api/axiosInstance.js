import axios from "axios"
import { GLOBAL_URL } from "../utilits/constants/Constants"
import { logout } from "../store/AuthSlice"

const headers = {
   "Content-Type": "application/json",
}
const axiosInstance = axios.create({ baseURL: GLOBAL_URL, headers })

let store

export const injectStore = (_store) => {
   store = _store
}

axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   const token = store.getState().auth.userInfo.jwt
   if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`
   }
   return updatedConfig
})

axiosInstance.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response.status === 401) {
         logout()
      }
      return Promise.reject(error)
   }
)
export { axiosInstance }
