import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import ContainerButtons from "../../Components/UI/ContainerButtons"
import Input from "../../Components/UI/Input"
import ReusableDropDown from "../../Components/UI/ReusableDropDown"
import { deleteWorkspaceById } from "../../store/workspacesSlice"

const Settings = ({ nameWorkspaces, settingModal, setSettingModal }) => {
   const { workspaceId } = useParams()
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [name, setName] = useState(nameWorkspaces)

   const changeNameWorkspacesHandler = () => {
      console.log(name)
      setSettingModal({ ...settingModal, showModal: false })
   }

   const deleteWorkspaceHandler = () => {
      dispatch(deleteWorkspaceById({ workspaceId, dispatch, navigate }))
      setSettingModal({ ...settingModal, showModal: false })
   }

   return (
      <ContainerSettings>
         <h3>Setting</h3>
         <Input value={name} onChange={(e) => setName(e.target.value)} />
         <p
            onClick={() =>
               setSettingModal({ ...settingModal, showDropDown: true })
            }
         >
            Delete this workspace?
         </p>
         <ContainerButtons
            paddingButton="0 40px 0 40px"
            titleBlueButton="Save"
            titleGrayButton="Cancel"
            clickGrayButton={() =>
               setSettingModal({ ...settingModal, showModal: false })
            }
            clickBlueButton={changeNameWorkspacesHandler}
         />
         <ReusableDropDown
            padding="10px 15px 18px 8px"
            width="380px"
            right="330px"
            top="1px"
            showState={settingModal.showDropDown}
         >
            <p>Delete workspaces</p>
            <p>Are yo sure to delete this workspace?</p>
            <ContainerButtons
               clickGrayButton={() =>
                  setSettingModal({ ...settingModal, showDropDown: false })
               }
               paddingButton="0 25px 0 25px"
               titleGrayButton="Cancel"
               titleBlueButton="Delete"
               clickBlueButton={deleteWorkspaceHandler}
            />
         </ReusableDropDown>
      </ContainerSettings>
   )
}

export default Settings

const ContainerSettings = styled.div`
   position: relative;
   width: 100%;
   h3 {
      font-weight: 400;
      text-align: center;
   }
   p {
      color: red;
      margin: 7px 0 5px 0;
      cursor: pointer;
      &:nth-child(2) {
         text-align: center;
         font-weight: 300;
         color: gray;
         margin-bottom: 20px;
      }
      &:nth-child(1) {
         text-align: center;
         color: black;
         font-size: 1.1rem;
      }
   }
   div {
      div {
         &:last-child {
            Button {
               &:last-child {
                  background-color: red;
                  &:active {
                     background-color: #930505;
                  }
                  &:hover {
                     background-color: #c60202;
                  }
               }
            }
         }
      }
   }
`
