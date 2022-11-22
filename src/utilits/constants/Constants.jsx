import plusIcon from "../../assets/icons/plus.svg"
import arrowDown from "../../assets/icons/arrowDown.svg"
import iconWorkspaces from "../../assets/icons/iconWorkspaces.svg"
import arrowUp from "../../assets/icons/ArrowUp.svg"
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
   {
      id: 2,
      nameWallpaper: "Two",
      colors: "#B04632",
   },
   {
      id: 3,
      nameWallpaper: "There",
      colors: "#519839",
   },
   {
      id: 4,
      nameWallpaper: "First",
      colors: "#D29034",
   },
   {
      id: 5,
      nameWallpaper: "Two",
      colors: "#89609E",
   },
   {
      id: 6,
      nameWallpaper: "There",
      colors: "#0079BF",
   },
   {
      id: 7,
      nameWallpaper: "First",
      colors: "#CD5A91",
   },
   {
      id: 8,
      nameWallpaper: "Two",
      colors: "#2A2A2A",
   },
   {
      id: 9,
      nameWallpaper: "There",
      colors: "red",
   },
   {
      id: 10,
      nameWallpaper: "First",
      photo: "https://steamuserimages-a.akamaihd.net/ugc/1758066490773386497/FFB8A9E914BD96DBF8A8AB1DF1DCE09ED4FDE9A8/?imw=1200&impolicy=Letterbox",
      colors: "red",
   },
   {
      id: 11,
      nameWallpaper: "Two",
      photo: "https://steamuserimages-a.akamaihd.net/ugc/1758066490773386497/FFB8A9E914BD96DBF8A8AB1DF1DCE09ED4FDE9A8/?imw=1200&impolicy=Letterbox",
      colors: "red",
   },
   {
      id: 12,
      nameWallpaper: "There",
      colors: "red",
   },
   {
      id: 13,
      nameWallpaper: "First",
      photo: "https://steamuserimages-a.akamaihd.net/ugc/1758066490773386497/FFB8A9E914BD96DBF8A8AB1DF1DCE09ED4FDE9A8/?imw=1200&impolicy=Letterbox",
      colors: "red",
   },
   {
      id: 14,
      nameWallpaper: "Two",
      photo: "https://steamuserimages-a.akamaihd.net/ugc/1758066490773386497/FFB8A9E914BD96DBF8A8AB1DF1DCE09ED4FDE9A8/?imw=1200&impolicy=Letterbox",
      colors: "red",
   },
   {
      id: 15,
      nameWallpaper: "There",
      colors: "red",
   },
   {
      id: 16,
      nameWallpaper: "There",
      colors: "red",
   },
]
