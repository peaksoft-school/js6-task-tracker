import React, { useState } from "react"
import styled from "styled-components"
import { COLORS, BackImage } from "../../../utilits/constants/Constants"
import Input from "../../UI/Input"
import DisplayFlexJCSB from "../../../layout/DisplayFlexJCSB"
import Button from "../../UI/Button"
import { useActiveIndex } from "../../../utilits/hooks/useActiveIndex"
import ImageBlock from "./ImageBlock"
import ColorBlock from "./ColorBlock"
import { useBoard } from "../../../utilits/hooks/useBoard"
import BackImg1 from "../../../assets/boardimg/img2.jpg"

function CreateBoard({ toggle }) {
   const [selectedBoard, setSelectedBoard] = useState(BackImg1)
   const [titleBoard, setTitleBoard] = useState("")
   const { activeIndex, getActiveIndexHandler } = useActiveIndex()
   const { createBoard } = useBoard()

   const selectedBoardHandler = (value) => {
      setSelectedBoard(value)
      getActiveIndexHandler(0)
   }

   const createWorkspacesHandler = () => {
      const data = {
         workspaceId: 2,
         title: titleBoard,
         background: selectedBoard,
      }
      createBoard(data)
      toggle()
   }

   return (
      <Container>
         <h4>Create new board</h4>
         <Input
            value={titleBoard}
            onChange={(e) => setTitleBoard(e.target.value)}
            placeholder="Board title*"
         />
         <p>Add background</p>
         <DisplayFlexJCSB>
            <p>Photo</p>
            <p onClick={() => getActiveIndexHandler(activeIndex !== 1 ? 1 : 0)}>
               See more
            </p>
         </DisplayFlexJCSB>
         <ImageBlock
            selectedBoardHandler={selectedBoardHandler}
            selectedBoard={selectedBoard}
            activeIndex={activeIndex}
            BackImage={BackImage}
         />
         <DisplayFlexJCSB>
            <p>Colors</p>
            <p onClick={() => getActiveIndexHandler(activeIndex !== 2 ? 2 : 0)}>
               See more
            </p>
         </DisplayFlexJCSB>
         <ColorBlock
            selectedBoardHandler={selectedBoardHandler}
            selectedBoard={selectedBoard}
            activeIndex={activeIndex}
            COLORS={COLORS}
         />
         <ContainerButton>
            <Button
               onClick={toggle}
               active="none"
               hover="none"
               fullWidth="110px"
               textColor=" #919191"
               color="#F0F0F0"
            >
               Cancel
            </Button>
            <Button onClick={createWorkspacesHandler} fullWidth="140px">
               Create Board
            </Button>
         </ContainerButton>
      </Container>
   )
}

export default CreateBoard

const Container = styled.div`
   position: relative;
   h4 {
      text-align: center;
      font-weight: 500;
      font-size: 1.2rem;
   }
   p {
      color: gray;
      font-size: 1.2rem;
      font-weight: 300;
      &:last-child {
         cursor: pointer;
         text-decoration: underline;
      }
   }
   img {
      width: 140px;
      height: 65px;
      border-radius: 10px;
      margin: 3px 0 3px 0;
   }
   div {
      margin: 7px 0 7px 0;
   }
`
const ContainerButton = styled.div`
   height: 40px;
   display: flex;
   justify-content: flex-end;
   button {
      margin-left: 15px;
   }
`
