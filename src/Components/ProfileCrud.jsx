import React, { useState } from "react"
import styled from "styled-components"
import { useFormik } from "formik"
import WallpaperTop from "../assets/svg/WallpaperTopBanner.svg"
import Avatar from "./UI/Avatar"
import Pen from "../assets/svg/editIcon.svg"
import DefaultAvatar from "../assets/svg/defaultAvatar.svg"
import Input from "./UI/Input"
import PasswordInput from "./UI/PasswordInput"
import Button from "./UI/Button"
import MemberBoard from "./MemberBoard"
import { listProject } from "../utilits/constants/Constants"
import ReusableDropDown from "./UI/ReusableDropDown"
import { validationSchema } from "./Authorizaiton/Validation"
import Modal from "./UI/Modal"

function ProfileCrud() {
   const [open, setOpen] = useState(false)
   // const [src, setSrc] = useState(null)
   const [modalActive, setModalActive] = useState(false)
   const formik = useFormik({
      initialValues: {
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         confirmPassword: "",
      },
      validationSchema,
      onSubmit: (userInfo) => {
         console.log(userInfo)
      },
   })
   const { isValid } = formik
   return (
      <Container>
         <TopBox>
            <img className="top-wallpaper" src={WallpaperTop} alt="" />
            <a href="f">Workspaces \ Profile</a>
         </TopBox>
         <MidBox>
            <div className="profile">
               <Avatar
                  onClick={() => setOpen(!open)}
                  src={DefaultAvatar}
                  editIcon={Pen}
                  alt="MyProfil"
               />

               <ReusableDropDown
                  showState={open}
                  width="250px"
                  padding="20px"
                  height="84px"
                  top="100px"
                  left="100px"
               >
                  <li onClick={() => setOpen(false)}>
                     <span onClick={() => setModalActive(true)}>
                        Change profile photo
                     </span>
                     <span>Remove</span>
                  </li>
               </ReusableDropDown>
               <Modal showState={modalActive}>
                  <div>MDMDAJDJAJ</div>
               </Modal>
               <Name>Riki Morti</Name>
            </div>
            <form onSubmit={formik.handleSubmit} className="form" action="">
               <MiniBoxInput>
                  <ContainerInputErrorText>
                     <Input
                        type="text"
                        id="firstName"
                        label="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                     />
                     {formik.touched.firstName && formik.errors.firstName && (
                        <ErrorText>{formik.errors.firstName}</ErrorText>
                     )}
                  </ContainerInputErrorText>
                  <ContainerInputErrorText>
                     <Input
                        type="text"
                        id="lastName"
                        label="LastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                     />
                     {formik.touched.lastName && formik.errors.lastName && (
                        <ErrorText>{formik.errors.lastName}</ErrorText>
                     )}
                  </ContainerInputErrorText>
                  <ContainerInputErrorText>
                     <Input
                        type="text"
                        id="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                     />
                     {formik.touched.email && formik.errors.email && (
                        <ErrorText>{formik.errors.email}</ErrorText>
                     )}
                  </ContainerInputErrorText>
               </MiniBoxInput>
               <MiniPasswordBox>
                  <ContainerInputErrorText>
                     <PasswordInput
                        id="password"
                        type="text"
                        label="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                     />
                     {formik.touched.password && formik.errors.password && (
                        <ErrorText>{formik.errors.password}</ErrorText>
                     )}
                  </ContainerInputErrorText>
                  <ContainerInputErrorText>
                     <PasswordInput
                        id="confirmPassword"
                        type="text"
                        label="Repeat password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                     />
                     {formik.touched.confirmPassword &&
                        formik.errors.confirmPassword && (
                           <ErrorText>
                              {formik.errors.confirmPassword}
                           </ErrorText>
                        )}
                  </ContainerInputErrorText>
                  <Button
                     style={{ cursor: "pointer" }}
                     fullWidth="64px"
                     fullHeight="34px"
                     disabled={!isValid}
                     type="submit"
                  >
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
const ContainerInputErrorText = styled.div`
   height: 50px;
   width: 320px;
`
const ErrorText = styled.p`
   color: red;
   margin: 0;
   text-align: start;
   font-size: 16px;
   margin-left: 5px;
`
const Container = styled.div`
   position: absolute;
   width: 1360px;
   margin: 16px 80px;
   background: #ffffff;
   border-radius: 8px;
   li {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 10px;
   }
   span {
      cursor: pointer;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
   }
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
