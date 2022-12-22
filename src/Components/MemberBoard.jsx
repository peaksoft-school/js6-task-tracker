import styled from "styled-components"
import DisplayFlex from "../layout/DisplayFlex"

function MemberBoard({ listProject }) {
   return (
      <DisplayFlex padding="20px 0 0 50px" FW="wrap" width="70vw" gap="17px">
         {listProject?.length > 0 &&
            listProject.map((item) => {
               return (
                  <DisplayFlex width="30vw">
                     <BlueBlock>{item.name.toUpperCase().charAt(0)}</BlueBlock>

                     <h3 style={{ margin: "20px 0 0 6px" }}>{item.name}</h3>
                  </DisplayFlex>
               )
            })}
      </DisplayFlex>
   )
}
export default MemberBoard

const BlueBlock = styled.div`
   background: #0079bf;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 70px;
   height: 70px;
   border-radius: 8px;
   font-size: 2.3rem;
   font-weight: 700;
   color: white;
`
