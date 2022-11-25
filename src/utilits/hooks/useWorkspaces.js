export const useWorkspaces = () => {
   const [workspaces, setWorkspaces] = useState([])

   const getAllWorkspaces = async () => {}

   const markAsFavorite = async () => {}

   return {
      getAllWorkspaces,
      markAsFavorite,
      workspaces,
   }
}
