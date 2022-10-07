import fullStar from "../../assets/star.svg"
import emptyStar from "../../assets/Vector.svg"
import Avatarka from "../../assets/png-transparent-hook-clothes-hanger-animal-monkey-mammal-animals-drawer.png"

export const tableData = [
   {
      id: 1,
      Name: "Taigan",
      Lead: (
         <div style={{ display: "flex", alignItems: "center" }}>
            <img
               style={{ borderRadius: 50, width: 30, height: 30 }}
               src={Avatarka}
               alt="test"
            />
            <span>Almaz Almazov</span>
         </div>
      ),
      Action: <img src={fullStar} alt="test" />,
   },
   {
      id: 2,
      Name: "Shoppix",
      Lead: (
         <div style={{ display: "flex", alignItems: "center" }}>
            <img
               style={{ borderRadius: 50, width: 30, height: 30 }}
               src={Avatarka}
               alt="test"
            />
            <span>Almaz Almazov</span>
         </div>
      ),
      Action: <img src={emptyStar} alt="test" />,
   },
   {
      id: 3,
      Name: "Task Tracker",
      Lead: (
         <div style={{ display: "flex", alignItems: "center" }}>
            <img
               style={{ borderRadius: 50, width: 30, height: 30 }}
               src={Avatarka}
               alt="test"
            />
            <span>Almaz Almazov</span>
         </div>
      ),
      Action: <img src={emptyStar} alt="test" />,
   },
   {
      id: 4,
      Name: "Mobile UX-UI",
      Lead: (
         <div style={{ display: "flex", alignItems: "center" }}>
            <img
               style={{ borderRadius: 50, width: 30, height: 30 }}
               src={Avatarka}
               alt="test"
            />
            <span>Almaz Almazov</span>
         </div>
      ),
      Action: <img src={emptyStar} alt="test" />,
   },
]
