import { useSearchParams } from "react-router-dom"

const useTwoActive = () => {
   const [searchParams, setSearchParams] = useSearchParams("nothing")

   const firstActive = searchParams.get("firstActive")
   const secondActive = searchParams.get("secondActive")
   const setTwoActive = (firstActive, secondActive) => {
      setSearchParams({
         firstActive,
         secondActive,
      })
   }

   return { secondActive, firstActive, setTwoActive }
}

export default useTwoActive
