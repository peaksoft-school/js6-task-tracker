import React from "react"
import styled from "styled-components"
import CustomIcons from "./CustomIcons"
import EditIcon from "../../assets/icons/Icon Shape (1).svg"
import comentIcon from "../../assets/icons/Comment.svg"
import timeIcon from "../../assets/icons/Real World Icon.svg"
import descriptionIcon from "../../assets/icons/Typography Icon (1).svg"
import peopleIcon from "../../assets/icons/people.svg"
import completeIcon from "../../assets/icons/UI and Keyboard Icon.svg"
import DisplayFlex from "../../layout/DisplayFlex"
import { useToggle } from "../../utilits/hooks/useToggle"

const Cards = ({
   cards,
   activeAddCardButton,
   getCardById,
   dragOverHandler,
   columnItem,
   dragStartHandler,
}) => {
   const { isActive, setActive } = useToggle()
   const renderCard = (item) => {
      return (
         <StyledCard
            draggable
            onDragOver={(e) => dragOverHandler(e)}
            onDragStart={(e) => dragStartHandler(e, columnItem, item)}
            isArchive={item.isArchive}
            key={item.id}
         >
            <DisplayFlex FW="wrap" gap="5px">
               {item.labelResponses.map((item) => (
                  <Label
                     showLabel={isActive === "showLabel"}
                     key={item.id}
                     onClick={() =>
                        setActive(
                           isActive !== "showLabel" ? "showLabel" : "nothing"
                        )
                     }
                     color={item.color}
                  >
                     {isActive === "showLabel" ? item.description : null}
                  </Label>
               ))}
            </DisplayFlex>
            <TitleCard>{item.title}</TitleCard>
            <CustomIcons
               onClick={() => getCardById(item.id)}
               edit="edit"
               src={EditIcon}
               position="absolute"
               top="15px"
               right="7px"
            />
            <DisplayFlex
               padding="4px"
               JK={item.duration ? "space-between" : "flex-end"}
            >
               {item.duration ? (
                  <p>
                     <CustomIcons src={timeIcon} />
                     {item.duration}
                  </p>
               ) : null}
               <DisplayFlex JK="flex-end" gap="10px">
                  <CustomIcons src={descriptionIcon} />
                  <CustomIcons src={comentIcon} />
                  {item.numberOfSubTasks > 0 && (
                     <CustomIcons src={completeIcon} />
                  )}
                  {item.numberOfSubTasks > 0 ? (
                     <span>
                        {item.numberOfCompletedSubTask}/{item.numberOfSubTasks}
                     </span>
                  ) : null}
                  {item.numberOfMembers > 0 ? (
                     <>
                        <CustomIcons src={peopleIcon} />
                        <span>{item.numberOfMembers}</span>
                     </>
                  ) : null}
               </DisplayFlex>
            </DisplayFlex>
         </StyledCard>
      )
   }
   return (
      <ContainerCard activeAddCardButton={activeAddCardButton}>
         {cards?.map((item) => {
            return renderCard(item)
         })}
      </ContainerCard>
   )
}

export default Cards

const StyledCard = styled.div`
   position: relative;
   width: 100%;
   border-radius: 4px;
   border: none;
   padding: 5px 3px 5px 3px;
   margin: 10px 0 5px 0;
   font-size: 1rem !important;
   background-color: ${(props) => (props.isArchive ? "#F4F4F4" : "white")};
   &:hover {
      background: ${(props) => (!props.isArchive ? "white" : null)};
      img {
         display: block;
      }
   }
   p {
      background-color: #f9dcb4;
      color: #c7852c;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
      display: flex;
      align-items: center;
      height: 25px;
      width: 90px;
      margin: 0;
   }
   span {
      font-size: 17px;
      color: #919191;
   }
`
const ContainerCard = styled.div`
   max-height: ${(props) => (props.activeAddCardButton ? "50vh" : "58vh")};
   overflow: scroll;
   ::-webkit-scrollbar {
      display: none;
   }
`
const Label = styled.label`
   width: ${(props) => !props.showLabel && "65px"};
   height: ${(props) => !props.showLabel && "6px"};
   padding: ${(props) => props.showLabel && "2px 14px"};
   background-color: ${(props) => props.color};
   font-size: 15px;
   cursor: pointer;
   color: white;
   font-weight: 800;
   border-radius: 8px;
   -webkit-transition: width 0.3s 0s ease-out, all 0.5s 0s ease;
   -moz-transition: width 0.3s 0s ease-out, all 0.5s 0s ease;
   -o-transition: width 0.3s 0s ease-out, all 0.5s 0s ease;
   transition: width 0.3s 0s ease-out, all 0.5s 0s ease;
`
const TitleCard = styled.h2`
   font-size: 1.2rem;
   margin: 0.8rem 0.3rem;
   font-weight: 500;
`
