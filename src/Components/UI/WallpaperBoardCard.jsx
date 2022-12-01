import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { addBoardToFavourites } from "../../store/boardSlice"
import activeStarIcon from "../../assets/icons/favourite-active.svg"
import defaultStarIcon from "../../assets/icons/favourite-default.svg"
import CustomIcons from "./TaskCard/CustomIcons"

function WallpaperBoardCard({ getBoardById }) {
   const { workspaceId } = useParams()
   const dispatch = useDispatch()
   const { board } = useSelector((state) => state.boards)

   const addBoardToFavouritesHandler = (id) => {
      dispatch(addBoardToFavourites({ id, dispatch, workspaceId }))
   }

   return (
      <CardThemeBox>
         {board.map((item) => {
            return (
               <CardTheme backgroundImage={item.background} key={item.id}>
                  <Block onClick={() => getBoardById(item.id)}>
                     <span>{item.title}</span>
                  </Block>
                  <IconContainer
                     onClick={() => addBoardToFavouritesHandler(item.id)}
                  >
                     <CustomIcons
                        src={item.isFavorite ? activeStarIcon : defaultStarIcon}
                     />
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
   grid-column-gap: 1px;
   grid-row-gap: 8px;
`
const CardTheme = styled.div`
   position: relative;
   width: 98%;
   color: #ffffff;
   background-image: url(${(props) => props.backgroundImage});
   background: ${(props) => props.backgroundImage};
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
const Block = styled.div`
   width: 88%;
   height: 100%;
`
const IconContainer = styled("div")`
   position: absolute;
   bottom: 8px;
   right: 12.44px;
   cursor: pointer;
`
