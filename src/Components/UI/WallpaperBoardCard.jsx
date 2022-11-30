import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { DefaultStarIcon, ActiveStarIcon } from "../../assets/icons/index"
import { addBoardToFavourites } from "../../store/boardSlice"

function WallpaperBoardCard({ getBoardById }) {
   const { id: workspaceId } = useParams()
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
                  <Block onClick={() => getBoardById(item.id, item.title)}>
                     <span>{item.title}</span>
                  </Block>
                  <IconContainer
                     onClick={() => addBoardToFavouritesHandler(item.id)}
                  >
                     {item.isFavorite ? (
                        <ActiveStarIcon />
                     ) : (
                        <DefaultStarIcon />
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
   grid-column-gap: 1px;
   grid-row-gap: 8px;
`

const CardTheme = styled.div`
   position: relative;
   width: 98%;
   color: #ffffff;
   background-color: ${(props) => props.background};
   background-image: url(${(props) => props.backgroundImage});
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
