import { useSearchParams } from "react-router-dom"

export const useToggle = () => {
   const [searchParams, setSearchParams] = useSearchParams()

   const isActive = searchParams.get("isActive")
   const setActive = (whatIsActive) => {
      setSearchParams({ isActive: whatIsActive })
   }

   return { setActive, isActive }
}
