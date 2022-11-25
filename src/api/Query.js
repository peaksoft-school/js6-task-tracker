import { getWorkspacesQuery } from "./auth"

export const getWorkspacesInDataBase = async () => {
   console.log("done ")
   try {
      const { data } = await getWorkspacesQuery()
      return data
   } catch (error) {
      return error.message
   }
}
