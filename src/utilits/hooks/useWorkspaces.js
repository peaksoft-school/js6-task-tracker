import React from "react"
import { useDispatch } from "react-redux"
import { axiosInstance } from "../../api/axiosInstance"
import { getWorkspacesQuery, createWorkspacesQuery } from "../../api/auth"
import { getFavourites } from "../../store/FavouritesSlice"
import {
   successToastifyAction,
   warningToastifyAction,
   errorToastifyAction,
   loadingToastifyAction,
} from "../../store/toastifySlice"

export const useWorkspaces = () => {
   const dispatch = useDispatch()
   const [workspaces, setWorkspaces] = React.useState([])
   const getAllWorkspaces = async () => {
      try {
         const { data } = await getWorkspacesQuery()
         setWorkspaces(data)
         return data
      } catch (error) {
         return error.message
      }
   }

   const changeAction = async (value) => {
      const { id } = value
      try {
         dispatch(loadingToastifyAction())
         const { data } = await axiosInstance.put(
            `/api/workspace/make-favorite/${id}`
         )

         dispatch(getFavourites())
         getAllWorkspaces()
         if (data.action) {
            dispatch(successToastifyAction("success"))
         }
         dispatch(warningToastifyAction("warning"))
         return data
      } catch (error) {
         return dispatch(errorToastifyAction())
      }
   }

   const createWorkspaces = async (value) => {
      const { readyData, getAllWorkspaces: updateWorkspaces } = value
      try {
         dispatch(loadingToastifyAction())
         const { data } = await createWorkspacesQuery(readyData)
         getAllWorkspaces()
         dispatch(successToastifyAction(`Created workspace ${data.name}`))
         updateWorkspaces()
         return data
      } catch (error) {
         return dispatch(errorToastifyAction(error.message))
      }
   }

   return {
      getAllWorkspaces,
      createWorkspaces,
      changeAction,
      workspaces,
   }
}
