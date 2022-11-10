import BackImg from "../../assets/boardimg/Rectangle 55.svg"
import BackImg2 from "../../assets/boardimg/Rectangle 56.svg"
import BackImg3 from "../../assets/boardimg/Rectangle 57.svg"
import BackImg4 from "../../assets/boardimg/Rectangle 58.svg"
import BackImg5 from "../../assets/boardimg/Rectangle 59.svg"
import BackImg6 from "../../assets/boardimg/Rectangle 60.svg"
import BackImg7 from "../../assets/boardimg/Rectangle 61.svg"
import BackImg8 from "../../assets/boardimg/Rectangle 62.svg"
import BackImg9 from "../../assets/boardimg/Rectangle 63.svg"
import BackImg10 from "../../assets/boardimg/Rectangle 64.svg"
import BackImg11 from "../../assets/boardimg/Rectangle 65.svg"
import plusIcon from "../../assets/icons/plus.svg"
import arrowDown from "../../assets/icons/arrowDown.svg"
import iconWorkspaces from "../../assets/icons/iconWorkspaces.svg"
import arrowUp from "../../assets/icons/ArrowUp.svg"
import Board1 from "../../assets/svg/Board.svg"
import Board2 from "../../assets/svg/Board2.svg"
import Board3 from "../../assets/svg/Board3.svg"

export const GLOBAL_URL = "http://18.192.179.151"

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
      color: "#F2D600",
      text: "Обратите на это внимание",
   },
   {
      id: 3,
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
   "#CBCBCB",
   "#B04632",
   "#385f38",
   "#D29034",
   "#89609E",
   "#005C92",
]

export const BackImage = [
   BackImg2,
   BackImg,
   BackImg10,
   BackImg6,
   BackImg4,
   BackImg3,
   BackImg,
   BackImg7,
   BackImg11,
   BackImg9,
   BackImg5,
   BackImg8,
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

export const BackgroundImg = [Board1, Board2, Board3]

export const USER_KEY = "TASK-TRACKER-USER-KEY"
