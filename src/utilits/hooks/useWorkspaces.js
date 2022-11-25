import React from "react"
import { axiosInstance } from "../../api/axiosInstance"
import { getWorkspacesQuery } from "../../api/auth"
import { getFavourites } from "../../store/FavouritesSlice"

export const useWorkspaces = () => {
   const [workspaces, setWorkspaces] = React.useState([])

   const getWorkspacesInDataBase = async () => {
      try {
         const { data } = await getWorkspacesQuery()
         return setWorkspaces(data)
      } catch (error) {
         return error.message
      }
   }

   const changeAction = async (value) => {
      const { id, dispatch } = value
      try {
         const { data } = await axiosInstance.put(
            `/api/workspace/make-favorite/${id}`
         )
         dispatch(getFavourites())
         getWorkspacesInDataBase()
         return data
      } catch (error) {
         return console.log(error.message)
      }
   }

   return {
      getWorkspacesInDataBase,
      changeAction,
      workspaces,
   }
}
