import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import TextAreaAutoSize from "react-textarea-autosize"
import ContainerButtons from "../UI/ContainerButtons"
import { axiosInstance } from "../../api/axiosInstance"
import {
   errorToastifyAction,
   loadingToastifyAction,
   successToastifyAction,
} from "../../store/toastifySlice"

const Description = ({
   dataCardById,
   setCardById,
   firstActive,
   setTwoActive,
}) => {
   const dispatch = useDispatch()
   const changeInputDescription = (e) => {
      const newDataCardById = { ...dataCardById }
      newDataCardById.description = e.target.value
      return setCardById(newDataCardById)
   }

   const changeDescriptionQuery = async () => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.put("/api/cards", {
            cardId: dataCardById.id,
            newTitle: "",
            description: dataCardById.description,
         })
         setTwoActive(firstActive, "nothing")
         dispatch(successToastifyAction("Description updated"))
         return console.log(response)
      } catch (error) {
         return dispatch(errorToastifyAction("Error,something went wrong"))
      }
   }

   return (
      <ContainerDesctiption>
         <StyledDescription
            onChange={changeInputDescription}
            value={dataCardById.description}
         />
         <ContainerButtons
            width="55vw"
            titleGrayButton="Cancel"
            titleBlueButton="Save"
            paddingButton="8px 40px 10px 40px"
            widthBlueButton="130px"
            clickBlueButton={changeDescriptionQuery}
            clickGrayButton={() => setTwoActive(firstActive, "nothing")}
         />
      </ContainerDesctiption>
   )
}

export default Description
const ContainerDesctiption = styled.div``
const StyledDescription = styled(TextAreaAutoSize)`
   width: 55vw;
   min-height: 15vh;
   font-size: 1.1rem;
   resize: none;
   padding: 0.5rem 0.3rem 0.3rem 0.5rem;
   margin: 0 0 10px 0;
   border-radius: 7px;
`
