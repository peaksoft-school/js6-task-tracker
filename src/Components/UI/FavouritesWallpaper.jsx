import React from "react"
import styled from "styled-components"
import IconButton from "./IconButton"
import FavouritesIcon from "../../assets/icons/FavouritesIcon.svg"
import ReusableDropDown from "./ReusableDropDown"
import openMenuIcon from "../../assets/icons/Favouritesmenuicon.svg"
import useOpenClose from "../../hooks/useOpenClose"

function FavouritesWallpaper({ favourites }) {
   const { isShowing, toggle } = useOpenClose()

   return (
      <>
         <OpenMenu onClick={toggle}>
            Favourites <span>0</span>
            <img src={openMenuIcon} alt="Icon" />
         </OpenMenu>

         <ReusableDropDown
            top="8vh"
            left="20vw"
            showState={isShowing}
            width="380px"
            height="600px"
         >
            <Container>
               <h3>Favourites </h3>
               {favourites.map((item) =>
                  item.favoriteWorkspaceResponses.map((item) => {
                     return (
                        <Card key={item.id}>
                           {item.url && <Wallpaper src={item.url} />}
                           <TitleBox>
                              <Title>{item.name}</Title>
                              <Name>{item.nameBoard}</Name>
                           </TitleBox>
                           <IconBox>
                              <IconButton
                                 width="17px"
                                 height="17px"
                                 iconSvg={FavouritesIcon}
                              />
                           </IconBox>
                        </Card>
                     )
                  })
               )}
            </Container>
         </ReusableDropDown>
      </>
   )
}

export default FavouritesWallpaper
const OpenMenu = styled.div`
   position: relative;
   width: 102px;
   height: 20px;
   font-weight: 500;
   display: flex;
   align-items: center;
   gap: 5px;
   cursor: pointer;
   img {
      position: absolute;
      right: -15px;
   }
`
const Container = styled.div`
   margin: auto;
   overflow: scroll;
   width: 100%;
   height: 600px;
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
   line-height: 16px;
   position: relative;
   width: 321px;
   height: 38px;
   gap: 10px;
   display: flex;
   margin: 0 auto;
   border-radius: 8px;
   background-color: white;
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
   right: -7px;
   height: 38px;
   img {
      position: absolute;
      top: 10.5px;
   }
`
