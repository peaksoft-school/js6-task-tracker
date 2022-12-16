import styled from "styled-components"
import TextareaAutosize from "react-textarea-autosize"

const TextArea = ({
   placeholder,
   value,
   onChange,
   width,
   height,
   background,
}) => {
   return (
      <ListTextArea
         width={width}
         height={height}
         background={background}
         onChange={onChange}
         value={value}
         placeholder={placeholder}
         cols="10"
         rows="10"
      />
   )
}

export default TextArea

const ListTextArea = styled(TextareaAutosize)`
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   box-sizing: border-box;
   font-size: 16px;
   padding: 8px 16px;
   font-weight: 400;
   line-height: 20xp;
   font-family: "Montserrat", sans-serif;
   resize: none;
   overflow: hidden;
   color: #111111;
   background: ${(props) => props.background};
   outline: none;
   border: 1px solid #d0d0d0;
   border-radius: 8px;
   margin: 0 0 10px 0;
`
