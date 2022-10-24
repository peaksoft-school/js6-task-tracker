import React, { useState } from "react"
import styled from "styled-components"
import IconButton from "./IconButton"
import FavouritesIcon from "../../assets/icons/FavouritesIcon.svg"

function FavouritesWallpaper({ listBoard }) {
   const [favourites, setFavourites] = useState(listBoard)
   const removeFavourites = (id) => {
      const removeItem = favourites.filter((item) => item.id !== id)
      setFavourites(removeItem)
   }

   return (
      <Container>
         <h3>Favourites</h3>
         {favourites.map((item) => (
            <Card key={item.id}>
               {item.url && <Wallpaper src={item.url} />}
               <TitleBox>
                  <Title>{item.titleCard}</Title>
                  <Name>{item.nameBoard}</Name>
               </TitleBox>
               <IconBox>
                  <IconButton
                     onClick={() => removeFavourites(item.id)}
                     width="17px"
                     height="17px"
                     iconSvg={FavouritesIcon}
                  />
               </IconBox>
            </Card>
         ))}
      </Container>
   )
}

export default FavouritesWallpaper

const Container = styled.div`
   width: 353px;
   height: 430px;
   border-radius: 10px;
   box-sizing: border-box;
   h3 {
      margin: 0;
      padding: 16px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
      text-align: center;
   }
`

const Card = styled.div`
   position: relative;
   width: 321px;
   height: 38px;
   gap: 10px;
   display: flex;
   margin: auto;
   padding-bottom: 16px;
`
const Wallpaper = styled.img`
   width: 84px;
   height: 38px;
   border-radius: 8px;
`
const TitleBox = styled.div`
   width: 227px;
   height: 38px;
   line-height: 20px;
   p {
      margin: 0;
   }
`

const Title = styled.p`
   font-size: 16px;
   box-sizing: border-box;
   font-weight: 400;
   font-style: normal;
`
const Name = styled.p`
   font-size: 14px;
   box-sizing: border-box;
   color: #919191;
`
const IconBox = styled.span`
   position: absolute;
   right: 20px;
   height: 38px;
   img {
      position: absolute;
      top: 10.5px;
   }
`
