import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import colorsVariant from "../../assets/images/rightImage.jpg"
import imageVariant from "../../assets/images/leftImage.png"

import { getBoardByIdQuery, deleteBoardById } from "../../store/boardSlice"
import CustomIcons from "../UI/TaskCard/CustomIcons"
import EditIcon from "../../assets/icons/Icon Shape (1).svg"
import openMenu from "../../assets/icons/openMenu.svg"
import star from "../../assets/icons/star.svg"
import Columns from "../UI/TaskCard/Columns"
import { useToggle } from "../../utilits/hooks/useToggle"
import ReusableDropDown from "../UI/ReusableDropDown"
import CloseButton from "../UI/CloseButton"
import Arrow from "../UI/Arrow"
import DisplayFlex from "../../layout/DisplayFlex"
import image from "../../assets/images/variant.svg"

const InnerBoard = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { boardId, workspaceId } = useParams()
   const { showSideBar, boards } = useSelector((state) => state)
   const { isActive, setActive } = useToggle()

   useEffect(() => {
      dispatch(getBoardByIdQuery(boardId))
   }, [boardId])

   const deleteBoardHandler = () => {
      dispatch(deleteBoardById({ navigate, boardId, workspaceId, dispatch }))
   }

   return (
      <Container backgroundImage={boards.boardById.background}>
         <ContainerInfoBoardColumn showSideBar={showSideBar.showSideBar}>
            <DisplayFlex
               width="100%"
               margin="100px 0 0 0"
               JK="space-between"
               AI="center"
            >
               <LeftBlock>
                  <CustomIcons top="3px" position="absolute" src={EditIcon} />
                  <h3>{boards.boardById.title}</h3>
                  <p>
                     Columns: <span>0</span>
                  </p>
               </LeftBlock>
               <DisplayFlex width="40%" JK="space-between" margin="0 30px 0 0">
                  <img src={star} alt="star" />
                  <img
                     onClick={() => setActive("menu")}
                     src={openMenu}
                     alt="open menu"
                  />
                  <ReusableDropDown
                     width="350px"
                     padding="15px 0 5px 0"
                     showState={isActive === "menu"}
                     right="15px"
                  >
                     <CloseButton onClick={() => setActive("nothing")} />
                     <Block>
                        <p>Menu</p>
                        <li onClick={() => setActive("colorsOrImage")}>
                           Change the background
                           <img src={image} alt="mountain" />
                        </li>
                        <li>
                           In arhive <span>34</span>
                        </li>
                        <li onClick={deleteBoardHandler}>Delete this board</li>
                     </Block>
                  </ReusableDropDown>

                  <ReusableDropDown
                     width="350px"
                     padding="0 7px 15px 3px"
                     showState={isActive === "colorsOrImage"}
                     right="15px"
                  >
                     <Arrow
                        margin="10px 0 0 5px"
                        onClick={() => setActive("menu")}
                     />
                     <p
                        style={{
                           textAlign: "center",
                           margin: "-30px 0 6px 0",
                           fontSize: "1.2rem",
                        }}
                     >
                        Change the background
                     </p>
                     <CloseButton onClick={() => setActive("nothing")} />
                     <img
                        style={{ margin: "8px 10px 0 5px" }}
                        src={imageVariant}
                        alt="colors"
                     />
                     <img src={colorsVariant} alt="images" />
                  </ReusableDropDown>
               </DisplayFlex>
            </DisplayFlex>
            <ContainerColumns>
               <Columns />
            </ContainerColumns>
         </ContainerInfoBoardColumn>
      </Container>
   )
}

export default InnerBoard

const Container = styled.div`
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: flex-end;
   height: 100vh;
   background-image: url(${(props) => props.backgroundImage});
   background-color: ${(props) => props.backgroundImage};
   background-repeat: no-repeat;
   background-size: cover;
`
const ContainerColumns = styled.div`
   width: 100%;
   overflow: scroll;
   display: flex;
   align-items: flex-start;
   gap: 10px;
   height: 76vh;
`
const ContainerInfoBoardColumn = styled.div`
   width: ${(props) => (props.showSideBar ? "78%" : "90%")};
   transition: all 0.35s ease-out;
   height: 100%;
`
const LeftBlock = styled.div`
   color: white;
   position: relative;
   margin-left: 20px;
   h3 {
      display: inline-block;
      margin-left: 30px;
      font-weight: 500;
      font-size: 1.4rem;
   }
   span {
      background-color: #b7b5b5;
      padding: 0 8px 0 8px;
      border-radius: 10px;
   }
`
const Block = styled.ul`
   p {
      text-align: center;
   }
   li {
      width: 100%;
      cursor: pointer;
      padding: 7px 17px;
      &:hover {
         background-color: #f2f2f2;
      }
      &:nth-child(2) {
         display: flex;
         align-items: center;
         justify-content: space-between;
      }
      span {
         background: #b2b2b2;
         padding: 0 6px;
         color: white;
         border-radius: 10px;
      }
   }
`
