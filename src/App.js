import SnackBar from "./Components/UI/SnackBar"

function App() {
   return (
      <div>
         <SnackBar
            status="error"
            text="Error"
            description="Error description"
         />
      </div>
   )
}

export default App
