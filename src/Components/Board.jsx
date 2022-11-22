import React from "react"
import styled from "styled-components"
import SideBar from "../layout/SideBar/SideBar"
import WallpaperBoardCard from "./UI/WallpaperBoardCard"
import { PhotoArray } from "../utilits/constants/Constants"
import Button from "./UI/Button"

const Board = ({ role }) => {
   return (
      <ContainerBoard>
         <SideBar />
         <Container>
            <TitleButtonBlock>
               <h3>All Boards</h3>
               {role === "ADMIN" && (
                  <Button fullWidth="190px" fullHeight="37px">
                     Create new board
                  </Button>
               )}
            </TitleButtonBlock>
            <WallpaperBoardCard PhotoArray={PhotoArray} />
         </Container>
      </ContainerBoard>
   )
}

export default Board

const ContainerBoard = styled.div`
   display: flex;
   width: 100vw;
   justify-content: space-around;
`
const Container = styled.div`
   width: 100%;
`
const TitleButtonBlock = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 50px;
   margin: 25px 0 10px 0;
`
