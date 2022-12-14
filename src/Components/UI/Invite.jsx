import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { axiosInstance } from "../../api/axiosInstance"
import Button from "./Button"
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

function Invite({ backState, closeState, canselInvite }) {
   const { firstActive, setTwoActive } = useTwoActive()
   const [value, setValue] = useState({})
   const dispatch = useDispatch()
   const { boardId } = useParams()
   const postData = async () => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         await axiosInstance.post("/api/participant/board-invite", {
            email: value.email,
            link: "192.168.1.40:3000/signIn",
            role: value.role,
            workspaceOrBoardId: boardId,
         })
         setTwoActive(firstActive, "nothing")
         return dispatch(successToastifyAction("Accept"))
      } catch (error) {
         return dispatch(errorToastifyAction("Error"))
      }
   }
   return (
      <Container>
         <TitleDrop>
            <img onClick={() => setTwoActive(backState)} src={backSvg} alt="" />
            <p>Invite a new participant</p>
            <img
               onClick={() => setTwoActive(closeState)}
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
            <ButtonBox>
               <Button
                  hover="white"
                  textColor="#919191"
                  fullHeight="34px"
                  fullWidth="77px"
                  color="#F0F0F0"
                  padding="0"
                  onClick={() => setTwoActive(canselInvite)}
               >
                  Cansel
               </Button>
               <Button
                  onClick={() => postData()}
                  fullHeight="34px"
                  fullWidth="77px"
                  padding="0"
               >
                  Create
               </Button>
            </ButtonBox>
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

const ButtonBox = styled.div`
   display: flex;
   gap: 18px;
   width: 171px;
   height: 34px;
   margin: 16px 0;
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
