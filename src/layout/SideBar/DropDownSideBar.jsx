import React from "react"
import styled from "styled-components"
import SvgGenerator from "../../Components/UI/SvgGenerator"

const DropDownSideBar = ({
   nameWorkspaces,
   onMouseEnter,
   onMouseLeave,
   clickBoards,
}) => {
   return (
      <DropDownContainer>
         <p>{nameWorkspaces}</p>
         <DropDownBlock onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <li onClick={clickBoards}>
               <SvgGenerator color="white" id={1} />
               <span>Boards</span>
               <SvgGenerator color="white" id="plus" />
               <SvgGenerator color="white" id="arrowDown" />
            </li>
            <li>
               <SvgGenerator color="white" id={3} />
               <span>Participants</span>
            </li>
            <li>
               <SvgGenerator color="white" id={5} />
               <span>Setting</span>
            </li>
         </DropDownBlock>
      </DropDownContainer>
   )
}

export default DropDownSideBar

const DropDownContainer = styled.div`
   position: absolute;
   left: 60px;
   top: 5px;
   width: 140px;
   height: 50px;
   color: white;
   padding: 2px;
   display: flex;
   flex-direction: column;
   align-items: center;
   z-index: 300;
   p {
      width: 97px;
      font-size: 12px;
      padding: 4px 0 4px 0;
      text-align: center;
      background-color: #222222;
      border-radius: 18px;
      margin: 0 0 5px 0;
   }
`

const DropDownBlock = styled.div`
   position: relative;
   width: 17vw;
   height: 17vh;
   background-color: #222222;
   border-radius: 15px;
   padding: 15px;
   z-index: 1;
   li {
      display: flex;
      height: 30px;
      align-items: center;
      margin-bottom: 3px;
      span {
         margin: 0 55px 5px 8px;
      }
   }
`
