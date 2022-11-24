import { axiosInstance } from "./axiosInstance"

// WORKSPACES ACTION

export const changeAction = async (
   id,
   updateWorkspaces,
   getFavorites,
   test
) => {
   try {
      const { status } = await axiosInstance.put(
         `/api/workspace/make-favorite/${id}`
      )
      if (status === 200) updateWorkspaces()
      test(id)
      getFavorites()
      return status
   } catch (error) {
      return console.log(error.message)
   }
}
