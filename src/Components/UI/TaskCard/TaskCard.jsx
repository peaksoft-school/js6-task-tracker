import React, { useState } from "react"
import styled from "styled-components"
import TextareaAutosize from "@mui/base/TextareaAutosize"
// import Button from "../Button"
import threePoint from "../../../assets/icons/threePoint.svg"
import DisplayFlexJCSB from "../../../layout/DisplayFlexJCSB"
import CustomIcons from "./CustomIcons"
import { Columns } from "../../../utilits/constants/Constants"
import AddButton from "./AddButtonColumn"
// import close from "../../../assets/icons/Vectorclose.svg"
import Card from "./Card"
// import Input from "../Input"
import CloseButton from "../CloseButton"
import Input from "../Input"
import Button from "../Button"
import { useActiveIndex } from "../../../utilits/hooks/useActiveIndex"

const TaskCard = ({
   openInnerTaskCard,
   columns,
   changeColumn,
   createColumn,
}) => {
   const { getActiveIndexHandler, isActiveDropDown } = useActiveIndex()
   const titleColumnHandler = ({ target: { name, value } }) => {
      const newColumns = [...columns]
      newColumns[name].columnName = value
      return changeColumn(newColumns)
   }
   const [nameNewColumn, setNameNewColumn] = useState()

   // const changeColumn = async () => {
   //    try {
   //       const response = await axiosInstance()
   //    } catch (error) {
   //       return console.log(error.message)
   //    }
   // }

   const createColumnHandler = () => {
      createColumn(nameNewColumn)
      getActiveIndexHandler("0")
   }

   return Columns.length > 0 ? (
      <DisplayFlexJCSB alignItems="flex-start" flexStart="flex-start">
         {columns.map((item, index) => {
            return (
               <CardColumn key={item.id}>
                  <CustomIcons
                     src={threePoint}
                     position="absolute"
                     top="15px"
                     right="14px"
                  />

                  <TitleColumn
                     aria-label="empty textarea"
                     value={item.columnName}
                     onChange={titleColumnHandler}
                     name={`${index}`}
                     placeholder="Название колонки"
                  />
                  <ContainerCard>
                     <Card showInnerTaskCard={openInnerTaskCard} />
                  </ContainerCard>

                  <AddCardButton>+ Add a card</AddCardButton>
               </CardColumn>
            )
         })}
         {isActiveDropDown !== "5" ? (
            <AddColumnButton onClick={() => getActiveIndexHandler("5")}>
               + Add a column{" "}
            </AddColumnButton>
         ) : null}
         {isActiveDropDown === "5" ? (
            <BlockInputCreateColumn>
               <p>Name of the column</p>
               <CloseButton onClick={() => getActiveIndexHandler("0")} />
               <Input
                  onChange={(e) => setNameNewColumn(e.target.value)}
                  placeholder="Name"
               />
               <Button padding="5px 28px" onClick={createColumnHandler}>
                  Create
               </Button>
            </BlockInputCreateColumn>
         ) : null}
      </DisplayFlexJCSB>
   ) : (
      <AddButton>+ Add a Column</AddButton>
   )
}

export default TaskCard

const CardColumn = styled.div`
   position: relative;
   width: 320px;
   max-height: 82vh;
   padding: 1rem 1rem 0.6rem 0.75rem;
   background: #e6e6e6;
   border-radius: 8px;
   font-family: "Nunito", sans-serif;
   p {
      font-size: 0.8rem;
   }
   span {
      font-size: 1.1rem;
      cursor: pointer;
   }
`
const ContainerCard = styled.div`
   max-height: 57vh;
   overflow: scroll;
`
const AddCardButton = styled.span`
   font-size: 16px;
   line-height: 20px;
   display: block;
   margin: 15px 0 5px 4px;
`
const TitleColumn = styled(TextareaAutosize)`
   border: 5px solid red;
   width: 250px;
   border: none;
   background: #e6e6e6;
   font-size: 19px;
   resize: none;
   padding: 3px 3px 3px 8px;
   &:focus {
      background: white;
   }
`
const AddColumnButton = styled.button`
   width: 280px;
   height: 45px;
   border-radius: 10px;
   font-size: 1.2rem;
   border: none;
   background: #e6e6e6;
   cursor: pointer;
   &:hover {
      background: #c7c7c7;
   }
   &:active {
      background: #a5a3a3;
   }
`
const BlockInputCreateColumn = styled.div`
   position: relative;
   background: #e6e6e6;
   width: 300px;
   height: 130px;
   padding: 8px;
   border-radius: 6px;
   p {
      color: gray;
      margin: 0 0 5px 5px;
      font-size: 1.1rem;
   }
   Input {
      background-color: white;
      border-radius: 13px;
   }
   Button {
      margin: 8px 0 0 170px;
   }
`
