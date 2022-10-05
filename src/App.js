import "./App.css";
import Btn from "./Components/UI/Button";
import NotificationItem from "./Components/UI/NotificationItem";
function App() {
  return (
    <div className="App">
      <Btn color="#0079BF" title="Sign up" />
      <NotificationItem />
    </div>
  );
}

export default App;
