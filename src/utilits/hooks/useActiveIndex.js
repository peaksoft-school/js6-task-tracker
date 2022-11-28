import { useSearchParams } from "react-router-dom"

export const useActiveIndex = () => {
   const [searchParams, setSearchParams] = useSearchParams()

   const isActiveDropDown = searchParams.get("activeDropDown")
   const getActiveIndexHandler = (index) => {
      setSearchParams({ activeDropDown: index })
   }

   return { getActiveIndexHandler, isActiveDropDown }
}
