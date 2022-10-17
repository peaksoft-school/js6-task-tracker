import styled from "styled-components"
import { useState } from "react"
import { DefaultStarIcon, ActiveStarIcon } from "../../assets/icons/index"

function WallpaperBoard({ width, height, PhotoArray, ref, onHandlerImg }) {
   const [inputViewOnOff, setInputViewOnOff] = useState(false)
   function handleViewOnOff() {
      setInputViewOnOff((prevState) => !prevState)
   }

   return (
      <CardThemeBox width={width} height={height} ref={ref}>
         {PhotoArray.map((item) => (
            <CardTheme
               backgroundImage={item.photo}
               style={{ background: item.colors }}
               key={item.id}
               onClick={() => onHandlerImg(item.photo, item.colors)}
            >
               <span>{item.nameWallpaper}</span>
               {item.photo && <Img src={item.photo} />}
               <IconContainer onClick={() => handleViewOnOff()}>
                  {inputViewOnOff ? <DefaultStarIcon /> : <ActiveStarIcon />}
               </IconContainer>
            </CardTheme>
         ))}
      </CardThemeBox>
   )
}

export default WallpaperBoard

const CardThemeBox = styled.div`
   box-sizing: border-box;
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   padding: 8px;
   border: none;
   position: relative;

   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(5, 1fr);
   grid-column-gap: 5px;
   grid-row-gap: 5px;
`

const CardTheme = styled.div`
   position: relative;
   width: 271px;
   color: #ffffff;
   height: 122px;
   border-radius: 8px;
   border: 1px solid gray;

   span {
      position: absolute;
      left: 17px;
      top: 16px;
      font-style: normal;
      font-weight: 500;
   }
`
const Img = styled.img`
   border-radius: 8px;
   width: 100%;
   height: 100%;
`

const IconContainer = styled("div")`
   position: absolute;
   bottom: 12.44px;
   right: 12.44px;
`
