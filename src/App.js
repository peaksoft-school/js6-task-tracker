import "./App.css";
import NotificationItem from "./Components/UI/NotificationItem";
// import boardPNG from "./assets/images/Rectangle 58.png";
function App() {
  return (
    <div className="App">
      <NotificationItem
        titleBoard="Title of the board"
        nameColumn="Name of the column"
      />
    </div>
  );
}

export default App;
