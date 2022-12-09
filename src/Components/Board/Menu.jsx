import React from "react"
import styled from "styled-components"
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
import { deleteBoardById } from "../../store/boardSlice"
import DisplayFlex from "../../layout/DisplayFlex"
import { BackImage } from "../../utilits/constants/Constants"

const Menu = () => {
   const navigate = useNavigate()
   const { boardId, workspaceId } = useParams()
   const dispatch = useDispatch()
   const { isActive, setActive } = useToggle()
   //    const [newBackground, setNewBackground] = useState("")

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
            <Arrow margin="10px 0 0 5px" onClick={() => setActive("menu")} />
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

         <ReusableDropDown showState={isActive === "images"} width="350px">
            {BackImage[4]?.map((item) => {
               return <StyledImageBlock imgUrl={item} alt="backgroundimage" />
            })}
         </ReusableDropDown>
      </DisplayFlex>
   )
}

export default Menu

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
const StyledImageBlock = styled.div`
   width: 145px;
   height: 75px;
   border-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-image: url(${(props) => props.imgUrl});
   background-size: cover;
   background-repeat: no-repeat;
   margin: 0 !important;
`
