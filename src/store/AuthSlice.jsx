import { createSlice } from "@reduxjs/toolkit"
// import { LocalStorage } from "../utilits/helpers/General"
// import { LOCAL_STORAGE_USER_KEY } from "../utilits/constants/Constants"

// const LocalStorageData = LocalStorage.getData(LOCAL_STORAGE_USER_KEY)

const initialState = {
   isAuth: true,
   token: "test",
   role: "ADMIN",
   userName: "Kamchybek",
}

export const AuthSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {},
})
