import styled from "styled-components"
import { DefaultStarIcon, ActiveStarIcon } from "../../assets/icons/index"

function WallpaperBoardCard({ board, ref, getBoardById }) {
   return (
      <CardThemeBox ref={ref}>
         {board.map((item) => {
            return (
               <CardTheme
                  onClick={() => getBoardById(item.id, item.title)}
                  background={item.background}
                  key={item.id}
               >
                  <span>{item.title}</span>
                  <IconContainer>
                     {item.isFavorite ? (
                        <DefaultStarIcon />
                     ) : (
                        <ActiveStarIcon />
                     )}
                  </IconContainer>
               </CardTheme>
            )
         })}
      </CardThemeBox>
   )
}

export default WallpaperBoardCard

const CardThemeBox = styled.div`
   box-sizing: border-box;
   width: 99%;
   border: none;
   position: relative;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(5, 1fr);
   grid-column-gap: 9px;
   grid-row-gap: 9px;
`

const CardTheme = styled.div`
   position: relative;
   width: 100%;
   color: #ffffff;
   background: ${(props) => props.background};
   background-image: ${(props) => `url(${props.background})`};
   background-repeat: no-repeat;
   background-size: cover;
   height: 130px;
   border-radius: 8px;
   span {
      position: absolute;
      left: 17px;
      top: 16px;
      font-style: normal;
      font-weight: 500;
   }
`

const IconContainer = styled("div")`
   position: absolute;
   bottom: 12.44px;
   right: 12.44px;
`
