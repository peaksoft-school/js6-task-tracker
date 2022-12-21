import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { axiosInstance } from "../../api/axiosInstance"
import Input from "./Input"
import backSvg from "../../assets/svg/backSvg.svg"
import closeDrop from "../../assets/icons/close.svg"
import RadioButton from "./RadioButton"
import useTwoActive from "../../utilits/hooks/useTwoActive"
import {
   errorToastifyAction,
   loadingToastifyAction,
   successToastifyAction,
} from "../../store/toastifySlice"
import ContainerButtons from "./ContainerButtons"

function Invite() {
   const { firstActive, setTwoActive } = useTwoActive()
   const [value, setValue] = useState({})
   const dispatch = useDispatch()
   const { boardId } = useParams()
   const postData = async () => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.post(
            "/api/participant/board-invite",
            {
               email: value.email,
               link: "192.168.218.96:3000/signIn/",
               role: value.role,
               workspacOrBoardId: boardId,
            }
         )
         console.log(response)
         setTwoActive(firstActive, "nothing")
         return dispatch(successToastifyAction("Invited user"))
      } catch (error) {
         return dispatch(errorToastifyAction("Error"))
      }
   }
   return (
      <Container>
         <TitleDrop>
            <img onClick={() => setTwoActive("nothing")} src={backSvg} alt="" />
            <p>Invite a new participant</p>
            <img
               onClick={() => setTwoActive("nothing")}
               src={closeDrop}
               alt=""
            />
         </TitleDrop>
         <Box className="box">
            <Input
               label="Example@gmail.com"
               onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
            <RadioButton
               onChange={(e) => setValue({ ...value, role: e.target.value })}
               name="role"
            />
            <ContainerButtons
               clickGrayButton={() => setTwoActive("nothing")}
               paddingBlueButton="5px 30px 5px 30px"
               titleGrayButton="Cancel"
               clickBlueButton={() => postData()}
               titleBlueButton="Invite"
            />
         </Box>
      </Container>
   )
}

export default Invite

const Container = styled.div`
   p {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: #000000;
   }
`
const Box = styled.div`
   flex-direction: column;
   align-items: flex-end;
   display: flex;
   margin-top: 18px;
`

const TitleDrop = styled.div`
   display: flex;
   margin: 10px 10px 0 10px;
   justify-content: space-between;
   p {
      text-align: center;
   }
   img {
      cursor: pointer;
   }
`
