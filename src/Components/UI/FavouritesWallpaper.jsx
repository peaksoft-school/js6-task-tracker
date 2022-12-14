import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import CustomIcons from "../Column/CustomIcons"
import FavouritesIcon from "../../assets/icons/FavouritesIcon.svg"
import sadStar from "../../assets/svg/sadStar.svg"
import {
   addWorkspacesToFavourites,
   getWorkspacesId,
} from "../../store/workspacesSlice"
import { addBoardToFavourites } from "../../store/boardSlice"

function FavouritesWallpaper({ favourites }) {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const deleteWorkspacesInFavourites = (id, title) => {
      if (title === "WORKSPACE") {
         dispatch(addWorkspacesToFavourites({ id, dispatch }))
      } else if (title === "BOARD") {
         dispatch(
            addBoardToFavourites({
               id,
               dispatch,
            })
         )
      }
   }

   const getByIdBoardAndWorkspacesPlusNavigate = (title, id) => {
      if (title === "WORKSPACE") {
         dispatch(getWorkspacesId({ id, navigate }))
      } else if (title === "BOARD") {
         console.log("done")
      }
   }

   return (
      <Container>
         {favourites.length === 0 ? (
            <Empty>
               <p>Favorites empty</p>
               <CustomIcons src={sadStar} />
            </Empty>
         ) : (
            <h3>Favourites</h3>
         )}
         {favourites.map((item) => {
            return (
               <Card key={item.id}>
                  {item.background !== "The workspace can not have photo" && (
                     <Wallpaper backgroundImage={item.background} />
                  )}
                  <TitleBox
                     onClick={() =>
                        getByIdBoardAndWorkspacesPlusNavigate(
                           item.workspaceOrBoard,
                           item.workspaceOrBoardID
                        )
                     }
                  >
                     <p>{item.name}</p>
                     <p>{item.workspaceOrBoard}</p>
                  </TitleBox>
                  <CustomIcons
                     onClick={() =>
                        deleteWorkspacesInFavourites(
                           item.id,
                           item.workspaceOrBoard
                        )
                     }
                     src={FavouritesIcon}
                  />
               </Card>
            )
         })}
      </Container>
   )
}

export default FavouritesWallpaper

const Container = styled.div`
   margin: auto;
   overflow: scroll;
   width: 100%;
   max-height: 600px;
   display: flex;
   flex-direction: column;
   gap: 16px;
   border-radius: 10px;
   box-sizing: border-box;
   padding: 16px;
   h3 {
      margin: 0;
      font-style: normal;
      font-weight: 400;
      color: #000000;
      text-align: center;
   }
`
const Card = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 341px;
   height: 50px;
   border-radius: 8px;
`
const Wallpaper = styled.div`
   width: 100px;
   background-image: url(${(props) => props.backgroundImage});
   background: ${(props) => props.backgroundImage};
   background-repeat: no-repeat;
   background-size: cover;
   height: 40px;
   border-radius: 8px;
`
const TitleBox = styled.div`
   width: 200px;
   cursor: pointer;
   p {
      &:last-child {
         box-sizing: border-box;
         color: #919191;
      }
   }
`
const Empty = styled.div`
   text-align: center;
   p {
      font-size: 1.2rem;
      margin-bottom: 10px;
   }
   img {
      width: 100px;
      height: 100px;
   }
`
