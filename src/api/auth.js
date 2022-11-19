import { axiosInstance } from "./axiosInstance"

// AUTHORIZATION

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
export const forgotPasswordQuery = (value) => {
   return axiosInstance.post(
      `/api/public/forgot/password?email=${value.email}&link=${value.link}`
   )
}
export const resetPasswordQuery = (value) => {
   return axiosInstance.post("/api/public/reset/password", value)
}

// WORKSPACES API
export const createWorkspacesQuery = (value) => {
   return axiosInstance.post("/api/workspace", value)
}

export const getWorkspacesQuery = () => {
   return axiosInstance.get("/api/workspace")
}

export const getFavoriteWorkspacesQuery = () => {
   return axiosInstance.get("/api/workspace/favorites")
}

// NOTIFICATION API

export const getNotificationQuery = () => {
   return axiosInstance.get("")
}
