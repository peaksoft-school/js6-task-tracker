import SnackBar from "./Components/UI/SnackBar"
import { SUCCESS } from "./utilits/constants/general"

function App() {
   return (
      <div>
         <SnackBar
            status={SUCCESS}
            text="Error"
            description="Error description"
         />
      </div>
   )
}

export default App
