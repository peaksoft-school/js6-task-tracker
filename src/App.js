import PasswordInput from "./Components/UI/PasswordInput"

function App() {
   return (
      <div className="App">
         <PasswordInput label="Password" type="password" />

         <PasswordInput label="Repeat Password" type="password" />
      </div>
   )
}

export default App
