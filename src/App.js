import "./App.css";
import MessageStatus from "./components/message/index.jsx";

function App() {
  const message = prompt("Enter message: ");
  return <MessageStatus message={message} />;
}

export default App;
