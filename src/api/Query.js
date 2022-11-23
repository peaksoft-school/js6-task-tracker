import { axiosInstance } from "./axiosInstance"
// WORKSPACES ACTION

export const changeAction = async (id, updateWorkspaces, getFavorites) => {
   try {
      const { status } = await axiosInstance.put(`/api/workspace/action/${id}`)
      if (status === 200) updateWorkspaces()
      getFavorites()
      return status
   } catch (error) {
      return console.log(error.message)
   }
}