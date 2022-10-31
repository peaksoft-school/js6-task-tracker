import React from "react"
import FavouritesWallpaper from "./Components/UI/FavouritesWallpaper"

function App() {
   const listBoard = [
      { id: 1, titleCard: "Title", nameBoard: "TimaTop" },
      { id: 2, titleCard: "Titsadasdale", nameBoard: "TimaTop" },
      { id: 3, titleCard: "Ti123tle", nameBoard: "TimaTop" },
      { id: 4, titleCard: "Tibvbvbvbvbtle", nameBoard: "TimaTop" },
   ]
   return (
      <div>
         <FavouritesWallpaper listBoard={listBoard} />
      </div>
   )
}

export default App
