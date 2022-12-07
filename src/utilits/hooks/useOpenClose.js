import { useSearchParams } from "react-router-dom"

const useOpenClose = () => {
   const [modalParams, setSearchParams] = useSearchParams()

   const stateModal = modalParams.get("showModal")
   const toggle = (state) => {
      setSearchParams({ showModal: state })
   }

   return { stateModal, toggle }
}

export default useOpenClose
