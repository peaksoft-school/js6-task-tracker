import axios from "axios"

export const axiosInstance = axios.create({
   baseURL: "http://18.192.179.151",
})

export const signUpRequest = (userInfo) => {
   return axiosInstance.post("/api/public/registration", userInfo)
}

export const loginRequest = (userData) => {
   return axiosInstance.post("/api/public/login", userData)
}
