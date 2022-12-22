/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useDropzone } from "react-dropzone"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import WallpaperTop from "../assets/svg/WallpaperTopBanner.svg"
import Input from "./UI/Input"
import PasswordInput from "./UI/PasswordInput"
import Button from "./UI/Button"
import MemberBoard from "./MemberBoard"
import DisplayFlex from "../layout/DisplayFlex"
import editIcon from "../assets/svg/avatarEdit.svg"
import {
   errorToastifyAction,
   loadingToastifyAction,
   successToastifyAction,
} from "../store/toastifySlice"
import ReusableDropDown from "./UI/ReusableDropDown"
import { GLOBAL_URL } from "../utilits/constants/Constants"
import { axiosInstance } from "../api/axiosInstance"
import Modal from "./UI/Modal"
import { useToggle } from "../utilits/hooks/useToggle"
import ContainerButtons from "./UI/ContainerButtons"
import initialAvatar from "../assets/images/initialAvatar.jpeg"
import CustomIcons from "./Column/CustomIcons"
import { validationConfirmPassword } from "./Authorizaiton/Validation"

function ProfileCrud({ profileData, setProfileData }) {
   const dispatch = useDispatch()
   const { isActive, setActive } = useToggle()
   const [uploadPhoto, setUploadPhoto] = useState(false)

   const changeName = (e) => {
      setProfileData({ ...profileData, firstName: e.target.value })
   }
   const changeLastName = (e) => {
      setProfileData({ ...profileData, lastName: e.target.value })
   }
   const changeEmail = (e) => {
      setProfileData({ ...profileData, email: e.target.value })
   }
   const getLinkHandler = async (file) => {
      setActive("setAvatar")
      const bodyFormData = new FormData()
      bodyFormData.append("file", file[0])
      dispatch(loadingToastifyAction("Photo upload..."))
      axios({
         method: "POST",
         url: `${GLOBAL_URL}/api/file`,
         data: bodyFormData,
         headers: { "Content-Type": "multipart/form-data" },
      })
         .then((response) => {
            setProfileData({ ...profileData, image: response.data.link })
            setUploadPhoto(true)
            dispatch(successToastifyAction("Photo uploaded"))
         })
         .catch((response) => {
            dispatch(errorToastifyAction("error"))
         })
   }
   const setAvatarQuery = async () => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.put("/api/profile/avatar", {
            image: profileData.image,
         })
         dispatch(successToastifyAction("Avatar updated"))
         setUploadPhoto(false)
         return setActive("nothing")
      } catch (error) {
         return dispatch(errorToastifyAction("Error,something went wrong"))
      }
   }
   const onDrop = (file) => {
      getLinkHandler(file)
   }
   const { open, getInputProps, getRootProps } = useDropzone({
      accept: "image/jpeg,image/png,image/gif/svg",
      maxFiles: 1,
      onDrop,
   })
   const formik = useFormik({
      initialValues: {
         password: "",
         confirmPassword: "",
      },
      validationSchema: validationConfirmPassword,
      onSubmit: async (userInfo) => {
         dispatch(loadingToastifyAction("...Loading"))
         try {
            const { data } = await axiosInstance.put("/api/profile", {
               firstName: profileData.firstName,
               lastName: profileData.lastName,
               password: userInfo.password,
               image: profileData.image,
            })
            dispatch(successToastifyAction("Updated profiile"))
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
               <StyledAvatar src={profileData.image || initialAvatar} />
               <img
                  onClick={() =>
                     setActive(
                        isActive !== "changeProfile"
                           ? "changeProfile"
                           : "nothing"
                     )
                  }
                  src={editIcon}
                  alt="pencil"
               />
               <Modal
                  onClose={() => setActive("nothing")}
                  isOpen={isActive === "setAvatar"}
               >
                  <div>
                     {uploadPhoto ? (
                        <UploadPhoto
                           src={profileData.image ? profileData.image : null}
                           alt="not found"
                        />
                     ) : (
                        <DropContainer {...getRootProps()}>
                           <p>Upload a photo +</p>
                           <input {...getInputProps()} />
                        </DropContainer>
                     )}

                     <ContainerButtons
                        width="332px"
                        clickGrayButton={() => setActive("nothing")}
                        titleGrayButton="Cancel"
                        titleBlueButton="Save"
                        clickBlueButton={() => setAvatarQuery()}
                        paddingBlueButton="0 40px 0 40px"
                     />
                  </div>
               </Modal>
            </AvatarBlock>
            <ReusableDropDown
               top="180px"
               left="220px"
               padding="15px 15px 12px 15px"
               showState={isActive === "changeProfile"}
            >
               <p
                  onClick={() => setActive("setAvatar")}
                  style={{ margin: "0 0 6px 0", cursor: "pointer" }}
               >
                  Change profile photo
               </p>
               <p style={{ cursor: "pointer" }}>Remove</p>
            </ReusableDropDown>

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
                           right="13%"
                           id="password"
                           type="text"
                           label="Password"
                           value={formik.values.password}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password && (
                           <ErrorText>
                              {formik.values.password.length > 0
                                 ? formik.errors.password
                                 : null}
                           </ErrorText>
                        )}
                     </ContainerInputErrorText>

                     <ContainerInputErrorText>
                        <PasswordInput
                           right="13%"
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
                                 {formik.values.confirmPassword.length > 0
                                    ? formik.errors.confirmPassword
                                    : null}
                              </ErrorText>
                           )}
                     </ContainerInputErrorText>
                     <DisplayFlex width="150px">
                        <Button
                           disabled={
                              !isValid &&
                              formik.values.password.length > 0 &&
                              formik.values.confirmPassword.length > 0
                           }
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

const DropContainer = styled.div`
   width: 230px;
   height: 230px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   background: #f6f6f9;
   margin: 20px 10px 20px 85px;
`
const UploadPhoto = styled.img`
   width: 230px;
   height: 230px;
   border-radius: 50%;
   margin: 20px 10px 20px 85px;
`
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
      :nth-child(2) {
         width: 43px;
         height: 43px;
         position: relative;
         right: 50px;
         top: -3px;
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
