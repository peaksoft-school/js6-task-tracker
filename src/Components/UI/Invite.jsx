import React, { useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { axiosInstance } from "../../api/axiosInstance"
import Button from "./Button"
import Input from "./Input"
import backSvg from "../../assets/svg/backSvg.svg"
import closeDrop from "../../assets/icons/close.svg"
import RadioButton from "./RadioButton"

function Invite({ setTwoActive }) {
   const [value, setValue] = useState({})
   const { boardId } = useParams()
   const postData = async () => {
      try {
         const { data } = await axiosInstance.post(
            "/api/participant/board-invite",
            {
               email: value.email,
               link: "",
               role: value.role,
               workspacOrBoardId: boardId,
            }
         )
         console.log(data, "response")
         return null
      } catch (error) {
         console.log(error)
         return error
      }
   }
   return (
      <Container>
         <TitleDrop>
            <img
               onClick={() => setTwoActive("openListUser")}
               src={backSvg}
               alt=""
            />
            <p>Invite a new participant</p>
            <img
               onClick={() => setTwoActive("openListUser")}
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
                  onClick={() => setTwoActive("openListUser", "nothing")}
               >
                  Cansel
               </Button>
               <Button
                  onClick={postData}
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
