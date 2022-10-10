import SnackBar from "./Components/UI/SnackBar"
import { ERROR } from "./utilits/constants/general"

function App() {
   return (
      <div>
         <SnackBar
            status={ERROR}
            text="Error"
            description="Error description"
         />
      </div>
   )
}

export default App
