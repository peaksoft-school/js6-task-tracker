/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import openMenu from "../../assets/icons/openMenu.svg"
import star from "../../assets/icons/star.svg"
import { useToggle } from "../../utilits/hooks/useToggle"
import ReusableDropDown from "../UI/ReusableDropDown"
import CloseButton from "../UI/CloseButton"
import Arrow from "../UI/Arrow"
import image from "../../assets/images/variant.svg"
import colorsVariant from "../../assets/images/rightImage.jpg"
import imageVariant from "../../assets/images/leftImage.png"
import { deleteBoardById, getBoardByIdQuery } from "../../store/boardSlice"
import DisplayFlex from "../../layout/DisplayFlex"
import { BackImage, COLORS } from "../../utilits/constants/Constants"
import { axiosInstance } from "../../api/axiosInstance"
import ColorsOrImagesDropDown from "./ColorsOrImagesDropDown"
import HeaderDropDown from "./HeaderDropDown"
import Cards from "../Column/Card"
import useTwoActive from "../../utilits/hooks/useTwoActive"
import InnerTaskCard from "../InnerTaskCard/InnerTaskCard"
import Modal from "../UI/Modal"

const Menu = ({ getCardById, cardById, getDataInArchive, archiveData }) => {
   const navigate = useNavigate()
   const { boardId, workspaceId } = useParams()
   const dispatch = useDispatch()
   const { isActive, setActive } = useToggle()
   const { setTwoActive } = useTwoActive()
   const { firstActive } = useTwoActive()

   // ИЗМЕНИТЬ ФОН BOARD
   const changeBackgroundBoard = async (item) => {
      try {
         const response = await axiosInstance.put(
            `/api/boards/change-background/${boardId}`,
            {
               workspaceId: 2,
               title: "",
               background: item,
            }
         )
         dispatch(getBoardByIdQuery(boardId))
         return setActive("nothing")
      } catch (error) {
         return console.log(error.message)
      }
   }

   useEffect(() => {
      getDataInArchive()
   }, [])

   const deleteBoardHandler = () => {
      dispatch(deleteBoardById({ navigate, boardId, workspaceId, dispatch }))
   }

   return (
      <DisplayFlex width="40%" JK="space-between" margin="0 30px 0 0">
         <img src={star} alt="star" />
         <img
            onClick={() => setActive("menu")}
            src={openMenu}
            alt="open menu"
         />
         <ReusableDropDown
            width="350px"
            padding="18px 0 17px 0"
            showState={isActive === "menu"}
            right="15px"
            animation
         >
            <CloseButton top="23px" onClick={() => setActive("nothing")} />
            <Block>
               <p>Menu</p>
               <li onClick={() => setActive("colorsOrImage")}>
                  Change the background
                  <img src={image} alt="mountain" />
               </li>
               <li onClick={() => setActive("archived")}>
                  In arhive <span>{archiveData?.archivedCards?.length}</span>
               </li>
               <li onClick={deleteBoardHandler}>Delete this board</li>
            </Block>
         </ReusableDropDown>
         <ReusableDropDown
            width="350px"
            padding="8px 14px 15px 14px"
            right="15px"
            showState={isActive === "archived"}
            animation
         >
            <HeaderDropDown title="Archived" goBack="menu" />
            <Cards
               cardById={cardById}
               getCardById={getCardById}
               cards={archiveData.archivedCards}
            />
            <Modal
               onClose={() => setTwoActive("nothing")}
               fullWidth="95vw"
               isOpen={firstActive === `${cardById?.id}`}
            >
               <InnerTaskCard
                  getCardById={getCardById}
                  dataCardById={cardById}
                  firstActive={firstActive}
                  setTwoActive={setTwoActive}
               />
            </Modal>
         </ReusableDropDown>
         <ReusableDropDown
            width="350px"
            padding="9px 7px 15px 3px"
            showState={isActive === "colorsOrImage"}
            right="15px"
            height="200px"
            animation
         >
            <HeaderDropDown title="Change the background" goBack="menu" />
            <img
               onClick={() => setActive("images")}
               style={{ margin: "8px 10px 0 5px" }}
               src={imageVariant}
               alt="colors"
            />
            <img
               onClick={() => setActive("colors")}
               src={colorsVariant}
               alt="images"
            />
         </ReusableDropDown>
         {isActive === "images" ? (
            <ColorsOrImagesDropDown
               changeBackgroundBoard={changeBackgroundBoard}
               images={BackImage[3]}
               active="images"
            />
         ) : null}
         {isActive === "colors" ? (
            <ColorsOrImagesDropDown
               active="colors"
               changeBackgroundBoard={changeBackgroundBoard}
               colors={COLORS[6]}
            />
         ) : null}
      </DisplayFlex>
   )
}

export default Menu

const Block = styled.ul`
   p {
      text-align: center;
      margin-bottom: 5px;
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
