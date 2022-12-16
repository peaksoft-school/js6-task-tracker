import React, { useState } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import ProgressBar from "../UI/ProgressBar"
import Arrow from "../UI/Arrow"
import EditIcon from "../../assets/icons/Icon Shape (1).svg"
import deleteIcon from "../../assets/svg/Delete.svg"
import DisplayFlex from "../../layout/DisplayFlex"
import CustomIcons from "../Column/CustomIcons"
import { axiosInstance } from "../../api/axiosInstance"
import Button from "../UI/Button"
import ContainerButtons from "../UI/ContainerButtons"
import TextArea from "../UI/TextArea"
import CheckBox from "../UI/CheckBox"
import {
   errorToastifyAction,
   loadingToastifyAction,
   successToastifyAction,
   warningToastifyAction,
} from "../../store/toastifySlice"

const CheckList = ({ checkList, getAllCheckList }) => {
   const [activeCheckList, setActiveCheckList] = useState(0)
   const [createSubTask, setCreateSubTask] = useState(false)
   const [titleSubTask, setTitleSubTask] = useState("")
   const dispatch = useDispatch()

   const deleteCheckList = async (id) => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.delete(`/api/checklists/${id}`)
         getAllCheckList()
         dispatch(warningToastifyAction("Deleted checklist"))
         return console.log(response)
      } catch (error) {
         return dispatch(errorToastifyAction("Error something went wrong"))
      }
   }
   const createSubTaskHandler = async () => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.post(
            `/api/subtasks/${activeCheckList}`,
            {
               isDone: false,
               description: titleSubTask,
               memberRequests: [
                  {
                     email: "",
                  },
               ],
               estimationRequest: {
                  startDate: "2022-12-16",
                  startTime: {
                     hour: 0,
                     minute: 0,
                  },
                  dueDate: "2022-12-16",
                  deadlineTime: {
                     hour: 0,
                     minute: 0,
                  },
                  reminder: 0,
               },
            }
         )
         setCreateSubTask(false)
         getAllCheckList()
         dispatch(successToastifyAction("Created sub task"))
         setTitleSubTask("")
         return console.log(response)
      } catch (error) {
         return dispatch(errorToastifyAction("Error something went wrong"))
      }
   }
   const deleteSubTaskhandler = async (id) => {
      try {
         const response = await axiosInstance.delete(`/api/subtasks/${id}`)
         return console.log(response)
      } catch (error) {
         return console.log(error.message)
      }
   }
   const completeSubTaskHandler = async (id) => {
      dispatch(loadingToastifyAction("...Loading"))
      try {
         const response = await axiosInstance.put(
            `/api/subtasks/complete/${id}`
         )
         getAllCheckList()
         dispatch(successToastifyAction("Completed"))
         return console.log(response)
      } catch (error) {
         return dispatch(errorToastifyAction("Error something went wrong"))
      }
   }
   const unCheckSubTaskHandler = async (id) => {
      dispatch(loadingToastifyAction("...Loading"))

      try {
         const response = await axiosInstance.put(`/api/subtasks/subtask/${id}`)
         getAllCheckList()
         dispatch(warningToastifyAction("Not completed"))
         return console.log(response)
      } catch (error) {
         return dispatch(errorToastifyAction("Error something went wrong"))
      }
   }
   const checkedHandler = (id, checked) => {
      if (checked) {
         unCheckSubTaskHandler(id)
      } else {
         completeSubTaskHandler(id)
      }
   }
   const AddSubTaskHandler = (id) => {
      setCreateSubTask(true)
      setActiveCheckList(id)
   }

   return (
      <>
         {checkList.map((item) => {
            return (
               <>
                  <DisplayFlex
                     key={item.id}
                     margin="25px 20px 13px 0"
                     JK="space-between"
                  >
                     <Arrow
                        margin="0 15px 0 0"
                        onClick={() =>
                           setActiveCheckList(
                              activeCheckList !== item.id ? item.id : 0
                           )
                        }
                        rotate={
                           item.id === activeCheckList ? "90deg" : "270deg"
                        }
                     />
                     <CustomIcons top="3px" src={EditIcon} />
                     <p
                        style={{
                           textAlign: "start",
                           width: "50vw",
                        }}
                     >
                        {item.title}
                     </p>
                     <CustomIcons
                        onClick={() => deleteCheckList(item.id)}
                        src={deleteIcon}
                     />
                  </DisplayFlex>
                  {item.countOfSubTasks > 0 ? (
                     <ProgressBar
                        tasks={item.countOfSubTasks}
                        completedTasks={item.countOfCompletedSubTask}
                        widthProgressPercent={item.count}
                     />
                  ) : null}
                  {item.id === activeCheckList && !createSubTask ? (
                     <DisplayFlex padding="0 20px 0 0" JK="flex-end">
                        <Button
                           onClick={() => AddSubTaskHandler(item.id)}
                           padding="5px 30px"
                        >
                           + Add sub task
                        </Button>
                     </DisplayFlex>
                  ) : null}
                  {activeCheckList === item.id && createSubTask ? (
                     <>
                        <DisplayFlex gap="7px">
                           <CheckBox margin="3px 0 0 10px" />
                           <TextArea
                              onChange={(e) => setTitleSubTask(e.target.value)}
                              value={titleSubTask}
                              width="54vw"
                           />
                        </DisplayFlex>
                        <ContainerButtons
                           width="57vw"
                           titleBlueButton="Create"
                           titleGrayButton="Cancel"
                           clickGrayButton={() => setCreateSubTask(false)}
                           clickBlueButton={
                              titleSubTask.trim().length > 0 &&
                              createSubTaskHandler
                           }
                        />
                     </>
                  ) : null}
                  {activeCheckList === item.id && activeCheckList ? (
                     <SubTask>
                        {item.subTaskResponses.map((item) => {
                           return (
                              <li key={item.id}>
                                 <CheckBox
                                    onChange={() =>
                                       checkedHandler(item.id, item.isDone)
                                    }
                                    checked={item.isDone}
                                 />
                                 <p>{item.description}</p>
                                 <CustomIcons
                                    onClick={() =>
                                       deleteSubTaskhandler(item.id)
                                    }
                                    src={deleteIcon}
                                 />
                              </li>
                           )
                        })}
                     </SubTask>
                  ) : null}
               </>
            )
         })}
      </>
   )
}

export default CheckList

const SubTask = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 13px;
   margin: 10px 23px 0 0;
   li {
      display: flex;
      justify-content: space-between;
      p {
         width: 92%;
         text-align: start;
      }
   }
`
