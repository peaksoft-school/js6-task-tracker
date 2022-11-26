import React from "react"
import styled from "styled-components"
import WallpaperTop from "../assets/svg/WallpaperTopBanner.svg"
import Avatar from "./UI/Avatar"
import Pen from "../assets/svg/editIcon.svg"
import DefaultAvatar from "../assets/svg/defaultAvatar.svg"
import Input from "./UI/Input"
import PasswordInput from "./UI/PasswordInput"
import Button from "./UI/Button"
import MemberBoard from "./MemberBoard"
import { listProject } from "../utilits/constants/Constants"

function ProfileCrud() {
   return (
      <Container>
         <TopBox>
            <img className="top-wallpaper" src={WallpaperTop} alt="" />
            <a href="f">Workspaces \ Profile</a>
         </TopBox>
         <MidBox>
            <div className="profile">
               <Avatar src={DefaultAvatar} editIcon={Pen} alt="MyProfil" />
               <Name>Riki Morti</Name>
            </div>
            <form className="form" action="">
               <MiniBoxInput>
                  <Input label="FirstName" />
                  <Input label="LastName" />
                  <Input label="Email" />
               </MiniBoxInput>
               <MiniPasswordBox>
                  <PasswordInput label="Password" />
                  <PasswordInput label="Repate password" />
                  <Button fullWidth="64px" fullHeight="34px">
                     Save
                  </Button>
               </MiniPasswordBox>
            </form>
            <ListProject>
               <MemberBoard listProject={listProject} />
            </ListProject>
         </MidBox>
      </Container>
   )
}
export default ProfileCrud
const Container = styled.div`
   position: absolute;
   width: 1360px;
   margin: 16px 80px;
   background: #ffffff;
   border-radius: 8px;
`
const TopBox = styled.div`
   position: relative;
   width: 100%;
   a {
      position: absolute;
      margin: 20px;
      left: 0;
      text-decoration: none;
   }
   .top-wallpaper {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
   }
`
const MidBox = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 115px;
   left: 60px;
   .form {
      width: 746px;
      height: 128px;
      margin-top: 30px;
      box-sizing: border-box;
      display: flex;
   }
`
const Name = styled.p`
   font-weight: 500;
   font-size: 20px;
   line-height: 25px;
   position: absolute;
   left: 171px;
   top: 88px;
   margin: 0;
   color: #0d0d0d;
`
const MiniBoxInput = styled.form`
   width: 395px;
   display: grid;
   flex-direction: column;
   gap: 16px;
`
const MiniPasswordBox = styled.div`
   width: 321px;
   display: grid;
   flex-direction: column;
   justify-items: end;
   margin-left: 30px;
   gap: 16px;
`
const ListProject = styled.div`
   margin-top: 34px;
   span {
      font-weight: 500;
      font-size: 16px;
      color: #111111;
   }
`
