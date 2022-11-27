import BackImg1 from "../../assets/boardimg/img2.jpg"
import BackImg2 from "../../assets/boardimg/img3.jpg"
import BackImg3 from "../../assets/boardimg/img4.jpg"
import BackImg4 from "../../assets/boardimg/img5.jpg"
import BackImg6 from "../../assets/boardimg/img6.jpg"
import BackImg7 from "../../assets/boardimg/img7.jpg"
import BackImg8 from "../../assets/boardimg/img8.jpg"
import BackImg9 from "../../assets/boardimg/img9.jpg"
import BackImg11 from "../../assets/boardimg/img10.jpg"
import BackImg12 from "../../assets/boardimg/img11.jpg"
import BackImg13 from "../../assets/boardimg/img12.jpg"
import BackImg14 from "../../assets/boardimg/img13.jpg"
import BackImg15 from "../../assets/boardimg/img14.jpg"
import BackImg16 from "../../assets/boardimg/img15.jpg"
import BackImg17 from "../../assets/boardimg/img16.jpg"

import plusIcon from "../../assets/icons/plus.svg"
import arrowDown from "../../assets/icons/arrowDown.svg"
import iconWorkspaces from "../../assets/icons/iconWorkspaces.svg"
import arrowUp from "../../assets/icons/ArrowUp.svg"
import addPeopleIcon from "../../assets/icons/peopleGray.svg"
import labelIcon from "../../assets/icons/label.svg"
import attachmentIcon from "../../assets/icons/scripka.svg"
import checklistIcon from "../../assets/icons/checklist.svg"
import estimationIcon from "../../assets/icons/time.svg"
import avatar from "../../assets/svg/womenAvatar.svg"
import emptyStar from "../../assets/svg/empty.svg"

export const GLOBAL_URL =
   "http://ec2-3-123-0-248.eu-central-1.compute.amazonaws.com"

export const USER_KEY = "TASK-TRACKER-USER-KEY"

export const Labels = [
   {
      id: 0,
      color: "#2CB107",
      text: "Сделано",
   },
   {
      id: 1,
      color: "#EB5A46",
      text: "Срочно начать с этого",
   },
   {
      id: 2,
      color: "#b323e3",
      text: "Движение кылыш керек",
   },
   {
      id: 3,
      color: "#F2D600",
      text: "Обратите внимание",
   },
   {
      id: 4,
      color: "#0079BF",
      text: "Хорошего всем настроения, друзья",
   },
]
export const Columns = [
   {
      titleColumn: "Придумать что-то чтобы измениь мир",
   },
]
export const COLORS = [
   "#6d96ff",
   "#B04632",
   "#385f38",
   "#D29034",
   "#89609E",
   "#005C92",
   [
      "#CBCBCB",
      "#20dad9",
      "#d6e04d",
      "#67e7a3",
      "#ffe277",
      "#13fff7",
      "#00b6ff",
      "#fffb4c",
      "#124446",
   ],
]
export const BackImage = [
   BackImg1,
   BackImg2,
   BackImg3,
   [
      BackImg4,
      BackImg6,
      BackImg7,
      BackImg8,
      BackImg9,
      BackImg11,
      BackImg12,
      BackImg13,
      BackImg14,
      BackImg15,
      BackImg16,
      BackImg17,
   ],
]
export const MORECOLLORS = [
   "#CBCBCB",
   "#B04632",
   "#519839",
   "#D29034",
   "#89609E",
   "#0079BF",
   "#CD5A91",
   "#2A2A2A",
]
export const SideBarItems = [
   {
      id: 1,
      title: "Boards",
      plusIcon,
   },
   {
      id: 2,
      title: "All issues",
      amount: 267,
   },
   {
      id: 3,
      title: "Participants",
      amount: 7,
   },
   {
      id: 5,
      title: "Setting",
   },
   {
      id: 6,
      title: "Workspaces",
      plusIcon,
   },
]
export const Workspaces = [
   {
      id: 1,
      title: "Accounting",
      icon: iconWorkspaces,
      arrowDown,
      arrowUp,
   },
   {
      id: 2,
      title: "LMS",
      icon: iconWorkspaces,
      arrowDown,
      arrowUp,
      boards: [
         {
            id: 1,
            title: "Title",
         },
         {
            id: 2,
            title: "Title",
         },
         {
            id: 3,
            title: "Title",
         },
         {
            id: 4,
            title: "Title",
         },
      ],
   },
   {
      id: 3,
      title: "Accounting",
      icon: iconWorkspaces,
      arrowDown,
      arrowUp,
   },
   {
      id: 4,
      title: "LMS",
      icon: iconWorkspaces,
      arrowDown,
      arrowUp,
   },
]
export const SubMenuItems = [
   {
      iconId: 1,
      title: "Boards",
      iconPlus: "plus",
      iconArrowDown: "arrowDown",
   },
   {
      iconId: 3,
      title: "Paricipants",
      amount: 7,
   },
   {
      iconId: 5,
      title: "Setting",
   },
]
export const GrayButtonsInnerTaskCard = [
   {
      id: 1,
      title: "Members",
      icon: addPeopleIcon,
   },
   {
      id: 2,
      title: "Estimation",
      icon: estimationIcon,
   },
   {
      id: 3,
      title: "Label",
      icon: labelIcon,
   },
   {
      id: 4,
      title: "Atachment",
      icon: attachmentIcon,
   },
   {
      id: 5,
      title: "Checklist",
      icon: checklistIcon,
   },
]
export const tableData = [
   {
      id: 1,
      Name: "Taigan",
      Lead: avatar,
      leadName: "Almaz Almazov",
      icon: emptyStar,
   },
   {
      id: 2,
      Name: "Shoppix",
      Lead: avatar,
      leadName: "Almaz Almazov",
      icon: emptyStar,
   },
   {
      id: 3,
      Name: "Task Tracker",
      Lead: avatar,
      leadName: "Almaz Almazov",
      icon: emptyStar,
   },
   {
      id: 4,
      Name: "Mobile UX-UI",
      leadName: "Almaz Almazov",
      Lead: avatar,
      icon: emptyStar,
   },
   {
      id: 5,
      Name: "Mobile UX-UI",
      leadName: "Almaz Almazov",
      Lead: avatar,
      icon: emptyStar,
   },
   {
      id: 6,
      Name: "Mobile UX-UI",
      leadName: "Almaz Almazov",
      Lead: avatar,
      icon: emptyStar,
   },
]
export const PhotoArray = [
   {
      id: 1,
      nameWallpaper: "First",
      colors: "#CBCBCB",
   },
]
