// import plusIcon from "../../assets/icons/plus.svg"
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
      id: 1,
      titleColumn: "Придумать что-то чтобы измениь мир",
   },
]
export const COLORS = [
   "#67e7a3",
   "#B04632",
   "#385F38",
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
   "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
   "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
   "https://images.unsplash.com/photo-1494319921810-2fab6cce50a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
   [
      "https://images.unsplash.com/photo-1650821264189-243591106727?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1575497230541-b4668dbc9072?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1529258057921-2ac593ee4d04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1505598439340-9a5cdc676547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=831&q=80",
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
      path: "boards",
   },
   {
      id: 2,
      title: `Allissues`,
      amount: 267,
      path: "allissues",
   },
   {
      id: 3,
      title: "Participants",
      amount: 7,
      path: "participants",
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
export const members = [
   {
      id: 1,
      name: "SalazxcvzxcvSalamat",
      Email: "salamat@gmail.com",
      role: "Admin",
   },
   {
      id: 2,
      name: "Salamat Salamat",
      Email: "salamat@gmail.com",
      role: "Admin",
   },
   {
      id: 3,
      name: "Salamat Salamat",
      Email: "salamat@gmail.com",
      role: "Admin",
   },
   {
      id: 4,
      name: "Salamat Salamat",
      Email: "salamat@gmail.com",
      role: "Member",
   },
   {
      id: 5,
      name: "Salamat Salamat",
      Email: "salamat@gmail.com",
      role: "Member",
   },
]
export const ReadyLabel = [
   {
      id: 1,
      title: "In progress",
      color: "violet",
   },
   {
      id: 2,
      title: "Kick back",
      color: "red",
   },
   {
      id: 3,
      title: "Complete",
      color: "green",
   },
   {
      id: 4,
      title: "Code review",
      color: "blue",
   },
]
export const colorsLabel = [
   "#51e2f5",
   "#9df9ef",
   "#8458B3",
   "#ff1d58",
   "#fff685",
   "#00DDFF",
   "#aa505e",
   "#ff009e",
   "#6c5cfe",
   "#bcea4d",
   "#12574f",
   "#4bd779",
   "#f1b270",
   "#FFF8DC",
   "#008B8B",
   "#8B008B",
   "#FF8C00",
   "#FFD700",
]

export const userCount = [
   {
      id: 1,
      firstName: "Esen",
      lastName: "Niyazov",
      email: "esen@gmail.com",
      image: "https://st-1.akipress.org/st_runews/.storage/limon3/images/NOVEMBER2020/17964a41dffb4fdc4fe1ba6f41b0a464.jpg",
      role: "ADMIN",
   },
   {
      id: 2,
      firstName: "Datka",
      lastName: "Mamatzhanova",
      email: "admin@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcIMH0pwffCbskbuSa-X5bvnUwWavnn1OFw&usqp=CAU",
      role: "ADMIN",
   },
   {
      id: 3,
      firstName: "Kamchybek",
      lastName: "",
      email: "admin@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcIMH0pwffCbskbuSa-X5bvnUwWavnn1OFw&usqp=CAU",
      role: "ADMIN",
   },

   {
      id: 4,
      firstName: "Nursultan",
      lastName: "Askarov",
      email: "user@gmail.com",
      image: "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
      role: "USER",
   },
   {
      id: 5,
      firstName: "Tynychbek",
      lastName: "Kursanali Uulu",
      email: "tkursanaliuulu01@gmail.com",
      image: "https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg",
      role: "USER",
   },
   {
      id: 6,
      firstName: "Daniel",
      lastName: "Kamilzhanov",
      email: "zadrot105217@gmail.com",
      image: "http://pm1.narvii.com/7620/1e77e3a13124a5f7b3bf5484eb5c2da285b3d02cr1-700-690v2_uhq.jpg",
      role: "USER",
   },
   {
      id: 7,
      firstName: "Nurmuhammad",
      lastName: "Nurbekov",
      email: "nur.nurbekov.01@gmail.com",
      image: "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
      role: "USER",
   },
   {
      id: 8,
      firstName: "Aizhan",
      lastName: "Nurmatova",
      email: "super_admin@gmail.com",
      image: "https://klike.net/uploads/posts/2018-06/1528374055_2.jpg",
      role: "USER",
   },
   {
      id: 9,
      firstName: "Mirlan",
      lastName: "Mirlanov",
      email: "buirusa_jakshy@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYC1MUr5qp4y37dbg0R5kSUgFhf7SpE7ndDQ&usqp=CAU",
      role: "USER",
   },
   {
      id: 10,
      firstName: "Azat",
      lastName: "Nurbekov",
      email: "kg.patriot.01@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDATwYwwNGQUhEBH7V8QlkfxJbSVkOjx_Jtg&usqp=CAU",
      role: "USER",
   },
]
