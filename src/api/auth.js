import axios from "axios"

export const axiosInstance = axios.create({
   baseURL: "http://ec2-3-123-0-248.eu-central-1.compute.amazonaws.com",
})

export const signUpRequest = (userInfo) => {
   return axiosInstance.post("/api/public/registration", userInfo)
}

export const loginRequest = (userData) => {
   return axiosInstance.post("/api/public/login", userData)
}

export const authWithGoogleQuery = (tokenFromFirebase) => {
   return axiosInstance.post(
      `/api/public/authenticate/google?token=${tokenFromFirebase}`
   )
}
