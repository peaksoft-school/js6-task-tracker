import styled from "styled-components"
import icon from "../../assets/icons/CheckBox.svg"

function CheckBox({ checked, onChange, margin, ...other }) {
   return (
      <Input
         margin={margin}
         {...other}
         type="Checkbox"
         onChange={onChange}
         checked={checked}
      />
   )
}

export default CheckBox
const Input = styled.input`
   margin: ${(props) => props.margin};
   appearance: none;
   height: 20px;
   width: 20px;
   border: 1px solid #87898e;
   border-radius: 5px;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   &[type="Checkbox"]::after {
      content: url(${icon});
   }
   &[type="Checkbox"]:checked {
      background: #0079bf;
      border: none;
   }
`
