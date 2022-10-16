import React, { useState } from "react"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { styled as style, Menu, Button, MenuItem } from "@mui/material/"

export const MeatBalls = ({ menuContent, icon, itemValue }) => {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = (element) => {
      setAnchorEl(null)
      itemValue(element) // Для передачи выбранных данных на верх
   }
   return (
      <div>
         <MeatBallsButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
         >
            <MoreHorizIcon />
         </MeatBallsButton>
         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               "aria-labelledby": "basic-button",
            }}
         >
            <MenuItems onClick={() => handleClose()}>
               {icon}
               {menuContent}
            </MenuItems>
         </Menu>
      </div>
   )
}
const MeatBallsButton = style(Button)`
   color: #343A40;
   padding: 0;
   margin: 0;
`
const MenuItems = style(MenuItem)`
   transition: all 0.2s;
   :hover {
      background: rgba(26, 35, 126, 0.07);
   }
`
