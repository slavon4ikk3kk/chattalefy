import {useState} from 'react'
import './App.css';
import ChatSpace from './components/ChatSpace/ChatSpace';
import Header from "./components/Header/Header";
import TypeArea from './components/TypeArea/TypeArea';
function App() {
     const [messages, setMessages] = useState([]);
  return (
    <div className="App">
     <div className="container">
      <Header></Header>
      <ChatSpace messages={messages}></ChatSpace>
      <TypeArea messages={messages} setMessages={setMessages}></TypeArea>
      </div>
    </div>
  );
}

export default App;
