import React from "react"
import styled from "styled-components"
import DisplayFlex from "../../layout/DisplayFlex"

const TableBlock = ({ cards }) => {
   console.log(cards, "cards in table")

   const convertDate = (stringDate) => {
      const converted = new Date(stringDate)
      return converted.toLocaleDateString()
   }
   return (
      <TableBlockStylded>
         <TableStyled>
            <tr>
               <th>Created</th>
               <th>Period</th>
               <th>Creator</th>
               <th>Column</th>
               <th>Assignee</th>
               <th>Labels</th>
               <th>Checklist</th>
               <th>Description</th>
            </tr>
            <Line />
            {cards.map((el) => {
               return (
                  <tr key={el.id}>
                     <td>{convertDate(el.createdAt)}</td>
                     <td>{el.period}</td>
                     <td>
                        {el.creatorFirstName} {el.creatorLastName}
                     </td>
                     <td>{el.column}</td>
                     <td>
                        <DisplayFlex>
                           {el.assignee.slice(0, 2).map((el) => {
                              return (
                                 <Avatar src={el.image} alt="assignee avatar" />
                              )
                           })}

                           {el.assignee.length > 0 ? (
                              <AvatarPlus>
                                 +{Number(el.assignee?.length) - 2}
                              </AvatarPlus>
                           ) : null}
                        </DisplayFlex>
                     </td>
                     <td>
                        <DisplayFlex width="110px" FW="wrap" gap="5px">
                           {el.labels.map((el) => {
                              return <LabelLine color={el.color} />
                           })}
                        </DisplayFlex>
                     </td>
                     <CheckList>{el.checklist}</CheckList>
                     <DescriptionStyeld>{el.description}</DescriptionStyeld>
                  </tr>
               )
            })}
         </TableStyled>
      </TableBlockStylded>
   )
}

export default TableBlock

const CheckList = styled.td`
   text-align: center;
`

const AvatarPlus = styled.div`
   width: 34px;
   height: 34px;
   border-radius: 50%;
   margin-right: -10px;
   background-color: gray;
   display: flex;
   justify-content: center;
   align-items: center;
`

const Avatar = styled.img`
   width: 34px;
   height: 34px;
   border-radius: 50%;
   margin-right: -10px;
`

const LabelLine = styled.div`
   width: 45px;
   height: 8px;
   border-radius: 8px;
   background-color: ${(props) => (props.color ? props.color : "none")};
`

const TableBlockStylded = styled.div`
   width: 100%;
   position: relative;
`
const Line = styled.hr`
   position: absolute;
   width: 100%;
   height: 2px;
`
const TableStyled = styled.table`
   th {
      padding: 10px;
   }
   td {
      padding: 10px;
      vertical-align: top;
   }
`
const DescriptionStyeld = styled.td`
   width: 40vw;
`
