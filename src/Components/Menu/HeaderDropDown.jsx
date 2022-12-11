import React from "react"
import { useToggle } from "../../utilits/hooks/useToggle"
import Arrow from "../UI/Arrow"
import CloseButton from "../UI/CloseButton"

const HeaderDropDown = ({ title, goBack }) => {
   const { setActive } = useToggle()
   return (
      <>
         <Arrow margin="10px 0 0 5px" onClick={() => setActive(goBack)} />
         <p
            style={{
               textAlign: "center",
               margin: "-30px 0 6px 0",
               fontSize: "1.2rem",
            }}
         >
            {title}
         </p>
         <CloseButton onClick={() => setActive("nothing")} />
      </>
   )
}

export default HeaderDropDown
