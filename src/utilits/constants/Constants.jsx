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
import addPeopleIcon from "../../assets/icons/peopleGray.svg"
import labelIcon from "../../assets/icons/label.svg"
import attachmentIcon from "../../assets/icons/scripka.svg"
import checklistIcon from "../../assets/icons/checklist.svg"
import estimationIcon from "../../assets/icons/time.svg"
import avatar from "../../assets/svg/womenAvatar.svg"
import emptyStar from "../../assets/svg/empty.svg"
import Board1 from "../../assets/svg/Board.svg"
import Board2 from "../../assets/svg/Board2.svg"
import Board3 from "../../assets/svg/Board3.svg"

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
      color: "#B323E3",
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
   "#CBCBCB",
   "#B04632",
   "#385F38",
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
export const BackgroundImg = [Board1, Board2, Board3]

export const listProject = [
   {
      id: 1,
      boardIcon:
         "https://wallpapers.com/images/hd/fierce-2b-from-nier-automata-n6aynx99xmsvde25.webp",
      titleBoard: "LMS",
      discription: "PeakSoft продукт!",
   },
   {
      id: 2,
      boardIcon:
         "https://wallpapers.com/images/hd/fierce-2b-from-nier-automata-n6aynx99xmsvde25.webp",
      titleBoard: "LMS",
      discription: "PeakSoft продукт!",
   },
   {
      id: 3,
      boardIcon:
         "https://wallpapers.com/images/hd/fierce-2b-from-nier-automata-n6aynx99xmsvde25.webp",
      titleBoard: "LMS",
      discription: "PeakSoft продукт!",
   },
   {
      id: 4,
      boardIcon:
         "https://wallpapers.com/images/hd/fierce-2b-from-nier-automata-n6aynx99xmsvde25.webp",
      titleBoard: "LMS",
      discription: "PeakSoft продукт!",
   },
   {
      id: 15,
      boardIcon:
         "https://wallpapers.com/images/hd/fierce-2b-from-nier-automata-n6aynx99xmsvde25.webp",
      titleBoard: "LMS",
      discription: "PeakSoft продукт!",
   },
   {
      id: 6,
      boardIcon:
         "https://wallpapers.com/images/hd/fierce-2b-from-nier-automata-n6aynx99xmsvde25.webp",
      titleBoard: "LMS",
      discription: "PeakSoft продукт!",
   },
   {
      id: 6,
      boardIcon:
         "https://wallpapers.com/images/hd/fierce-2b-from-nier-automata-n6aynx99xmsvde25.webp",
      titleBoard: "LMS",
      discription: "PeakSoft продукт!",
   },
   {
      id: 6,
      boardIcon:
         "https://wallpapers.com/images/hd/fierce-2b-from-nier-automata-n6aynx99xmsvde25.webp",
      titleBoard: "LMS",
      discription: "PeakSoft продукт!",
   },
]
