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
   "https://images.unsplash.com/photo-1669207805234-51bdb6f3bfe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
   "https://images.unsplash.com/photo-1667594049406-25f6a193c50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80",
   "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
   [
      "https://images.unsplash.com/photo-1668805585915-0a8b56aecfef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1575497230541-b4668dbc9072?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1529258057921-2ac593ee4d04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1505598439340-9a5cdc676547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1489493512598-d08130f49bea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80",
      "https://images.unsplash.com/photo-1489493512598-d08130f49bea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80",
      "https://images.unsplash.com/photo-1668800477268-021d1ed8564e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1667938403586-eec95b202379?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
      "https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1513&q=80",
      "https://images.unsplash.com/photo-1486934474798-4c02bd91a318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1669111960303-99c5090cb6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
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
