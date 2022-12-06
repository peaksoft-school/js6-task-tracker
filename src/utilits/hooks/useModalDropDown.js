import { useSearchParams } from "react-router-dom"

const useModalDropDown = () => {
   const [openDropDownModal, setOpenDropDownModal] = useSearchParams()

   const stateModal = openDropDownModal.get("showModal")
   const activeDropDownInCreateBoard = openDropDownModal.get(
      "activeDropDownCreateBoard"
   )
   const toggle = (stateModal, activeDropDown) => {
      setOpenDropDownModal({
         showModal: stateModal,
         activeDropDownCreateBoard: activeDropDown,
      })
   }

   return { activeDropDownInCreateBoard, stateModal, toggle }
}

export default useModalDropDown
