import peopleIcon from "../../assets/icons/peopleDark.svg"
import settingIcon from "../../assets/icons/settings.svg"
import workspacesIcon from "../../assets/icons/workspaces.svg"
import boardsIcon from "../../assets/icons/boards.svg"
import issues from "../../assets/icons/issues.svg"
import plusIcon from "../../assets/icons/plus.svg"
import arrowDown from "../../assets/icons/arrowDown.svg"

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
      title: "Boards",
      icon: boardsIcon,
      plusIcon,
      arrowDown,
   },
   {
      title: "All issues",
      icon: issues,
      amount: 267,
   },
   {
      title: "Participants",
      icon: peopleIcon,
      amount: 7,
   },
   {
      title: "Setting",
      icon: settingIcon,
   },
   {
      title: "Workspaces",
      icon: workspacesIcon,
      plusIcon,
   },
]
