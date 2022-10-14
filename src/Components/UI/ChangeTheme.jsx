/* eslint-disable react/button-has-type */
import { useRef } from "react"
import styled from "styled-components"

export default function ChangeTheme({ width, height, title, PhotoArray }) {
   const ref = useRef(null)
   const onHandlerImg = (photo, colors) => {
      ref.current.style.backgroundImage = `url('${photo}')`
      ref.current.style.background = colors
   }
   return (
      <Container width={width} height={height} ref={ref}>
         <CardThemeBox>
            {PhotoArray.map((item) => (
               <CardTheme
                  key={item.id}
                  onClick={() => onHandlerImg(item.photo, item.colors)}
               >
                  <span>{title}</span>
                  <Img src={item.photo} alt={item.alt} />
               </CardTheme>
            ))}
         </CardThemeBox>
      </Container>
   )
}

const Container = styled.div`
   box-sizing: border-box;
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   display: flex;
   background-size: cover;
   background-repeat: no-repeat;
`

const CardThemeBox = styled.div`
   padding: 10px;
   height: 650px;
   box-sizing: border-box;

   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(5, 1fr);
   grid-column-gap: 5px;
   grid-row-gap: 5px;
`

const CardTheme = styled.div`
   position: relative;
   width: 271px;
   height: 122px;
   border-radius: 8px;
   span {
      position: absolute;
      left: 17px;
      top: 16px;
      color: white;
      font-style: normal;
      font-weight: 500;
   }
`
const Img = styled.img`
   border-radius: 6px;
   width: 100%;
   height: 100%;
`
