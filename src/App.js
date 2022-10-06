import "./App.css";
import Button from "./Components/UI/Button";
import GrayButton from "./Components/UI/GrayButtons";
import iconButton from "./assets/icons/System.svg";

function App() {
  return (
    <div className="App">
      <Button
        fullWidth="240px"
        hover="#005688"
        active="#57AEE0"
        color="#0079BF"
      >
        Sign up
      </Button>

      <GrayButton iconButton={iconButton} fullWidth="200px">
        Estimation
      </GrayButton>

      <GrayButton iconButton={iconButton} fullWidth="60px" />
    </div>
  );
}

export default App;
