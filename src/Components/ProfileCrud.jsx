/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { Form, useFormik } from "formik"
import Avatar from "react-avatar-edit"
import { useDispatch } from "react-redux"
import WallpaperTop from "../assets/svg/WallpaperTopBanner.svg"
import Input from "./UI/Input"
import PasswordInput from "./UI/PasswordInput"
import Button from "./UI/Button"
import { validationConfirmPassword } from "./Authorizaiton/Validation"
import MemberBoard from "./MemberBoard"
import DisplayFlex from "../layout/DisplayFlex"
import initialAvatar from "../assets/images/initialAvatar.jpeg"
import editIcon from "../assets/svg/avatarEdit.svg"
import { axiosInstance } from "../api/axiosInstance"
import {
   errorToastifyAction,
   loadingToastifyAction,
   successToastifyAction,
} from "../store/toastifySlice"
import Modal from "./UI/Modal"
import useTwoActive from "../utilits/hooks/useTwoActive"
import ReusableDropDown from "./UI/ReusableDropDown"
import { GLOBAL_URL } from "../utilits/constants/Constants"

function ProfileCrud({ profileData, setProfileData }) {
   const dispatch = useDispatch()
   const { firstActive, setTwoActive } = useTwoActive()
   const [dialogs, setDialogs] = useState(false)
   const [imgCrop, setImgCrop] = useState(false)

   const onCrop = (view) => {
      setImgCrop(view)
   }
   const onClose = () => {
      setImgCrop(null)
   }
   const saveAvatar = () => {
      setDialogs(false)
   }
   const changeName = (e) => {
      setProfileData({ ...profileData, firstName: e.target.value })
   }
   const changeLastName = (e) => {
      setProfileData({ ...profileData, lastName: e.target.value })
   }
   const changeEmail = (e) => {
      setProfileData({ ...profileData, email: e.target.value })
   }

   const formik = useFormik({
      initialValues: {
         password: "",
         confirmPassword: "",
      },
      onSubmit: async (userInfo) => {
         dispatch(loadingToastifyAction("...Loading"))
         try {
            const formData = new FormData()
            formData.append("file", imgCrop)

            const response = await axios({
               method: "POST",
               url: `${GLOBAL_URL}/api/file`,
               data: formData,
               headers: { "Content-Type": "multipart/form-data" },
            })
            console.log(response)

            // const { data } = await axiosInstance.put("/api/profile", {
            //    firstName: profileData.firstName,
            //    lastName: profileData.lastName,
            //    password: userInfo.password,
            //    image: "",
            // })
            // dispatch(successToastifyAction("Updated profiile"))
            return null
         } catch (error) {
            return dispatch(errorToastifyAction("Error something went wrong"))
         }
      },
   })

   const { isValid } = formik

   return (
      <Container>
         <Block>
            <HeaderPhoto src={WallpaperTop} alt="" />
            <AvatarBlock>
               <StyledAvatar src={imgCrop} />

               <img
                  onClick={() =>
                     setTwoActive(
                        firstActive !== "changeProfile"
                           ? "changeProfile"
                           : "nothing"
                     )
                  }
                  src={editIcon}
                  alt="pencil"
               />
            </AvatarBlock>
            <ReusableDropDown
               top="180px"
               left="220px"
               padding="15px 15px 12px 15px"
               showState={firstActive === "changeProfile"}
            >
               <p
                  style={{ margin: "0 0 6px 0", cursor: "pointer" }}
                  onClick={() => setDialogs(true)}
               >
                  Change profile photo
               </p>
               <p style={{ cursor: "pointer" }}>Remove</p>
            </ReusableDropDown>
            <Modal onClose={() => setDialogs(false)} isOpen={dialogs}>
               <Avatar
                  width={400}
                  height={300}
                  onClose={onClose}
                  onCrop={onCrop}
               />
               <DisplayFlex JK="flex-end" margin="10px 0 0 0">
                  <Button
                     fullWidth="180px"
                     padding="6px 10px"
                     onClick={saveAvatar}
                  >
                     Save
                  </Button>
               </DisplayFlex>
            </Modal>

            <form onSubmit={formik.handleSubmit}>
               <DisplayFlex margin="90px 0 0 50px" width="80vw" gap="45px">
                  <DisplayFlex FD="column" width="380px" gap="20px">
                     <Input
                        placeholder="Name"
                        type="text"
                        id="firstName"
                        value={profileData.firstName}
                        onChange={(e) => changeName(e)}
                     />
                     <Input
                        placeholder="Last name"
                        type="text"
                        id="lastName"
                        value={profileData.lastName}
                        onChange={(e) => changeLastName(e)}
                     />
                     <Input
                        placeholder="email"
                        type="text"
                        id="email"
                        value={profileData.email}
                        onChange={(e) => changeEmail(e)}
                     />
                  </DisplayFlex>
                  <DisplayFlex FD="column" AI="flex-end">
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
                     <DisplayFlex width="150px">
                        <Button
                           fullWidth="120px"
                           padding="6px 10px"
                           type="submit"
                        >
                           Save
                        </Button>
                     </DisplayFlex>
                  </DisplayFlex>
               </DisplayFlex>
            </form>
            <CountWorkspaces>
               Involved in project{" "}
               <p>{profileData?.projectResponses?.length}</p>
            </CountWorkspaces>

            <MemberBoard listProject={profileData?.projectResponses} />
         </Block>
      </Container>
   )
}
export default ProfileCrud

const Container = styled.div`
   background-color: #f8f8f8;
   padding: 90px 0 30px 0;
`
const Block = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   background-color: white;
   margin: 0 auto;
   border-radius: 20px;
   width: 95vw;
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
   min-height: 90vh;
   padding: 0 0 30px 0;
   -webkit-box-shadow: 9px 6px 8px 0px rgba(34, 60, 80, 0.17);
   -moz-box-shadow: 9px 6px 8px 0px rgba(34, 60, 80, 0.17);
   box-shadow: 9px 6px 8px 0px rgba(34, 60, 80, 0.17);
`
const CountWorkspaces = styled.p`
   font-weight: 700;
   margin: 20px 0 0 50px;
   display: flex;
   align-items: center;
   p {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      width: 30px;
      height: 30px;
      background-color: #b2b2b2;
      border-radius: 50%;
      margin: 0 0 0 10px;
   }
`
const HeaderPhoto = styled.img`
   width: 100%;
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
`
const AvatarBlock = styled.div`
   position: absolute;
   top: 100px;
   left: 100px;
   border-radius: 50%;
   img {
      :last-child {
         position: absolute;
         top: 85px;
         left: 85px;
      }
   }
`
const StyledAvatar = styled.img`
   width: 125px;
   height: 125px;
   border-radius: 50%;
   border: 6px solid white;
`
const ErrorText = styled.p`
   width: 100%;
   color: red;
   margin: 0;
   text-align: start;
   font-size: 16px;
`
const ContainerInputErrorText = styled.div`
   display: flex;
   flex-direction: column;
   height: 60px;
   width: 350px;
`
