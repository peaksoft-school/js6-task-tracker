import styled from "styled-components"
import { NotifyIcon, ClockIcon } from "../../assets/icons/index"

export const CommentsTextArea = ({
   placeholder,
   value,
   setValue,
   width,
   height,
   description,
   background,
}) => {
   return (
      <TextAreaBlock width={width} height={height}>
         <ListTextArea
            background={background}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder={placeholder}
            cols="10"
            rows="10"
         />
         <IconBox>
            {description && <NotifyIcon />}
            {description && <ClockIcon />}
         </IconBox>
      </TextAreaBlock>
   )
}
const TextAreaBlock = styled.div`
   box-sizing: border-box;
   border: none;
   position: relative;
   width: ${(props) => props.width};
   height: ${(props) => props.height};
`
const ListTextArea = styled.textarea`
   box-sizing: border-box;
   width: 100%;
   height: 100%;
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
`

const IconBox = styled.div`
   position: absolute;
   width: 56px;
   height: 24px;
   display: flex;
   gap: 17px;
   right: 16px;
   bottom: 8px;
   img {
      width: 16px;
      height: 16px;
   }
`
