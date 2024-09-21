
import './App.css';
import ChatSpace from './components/ChatSpace/ChatSpace';
import Header from "./components/Header/Header";
import TypeArea from './components/TypeArea/TypeArea';
function App() {
  return (
    <div className="App">
     <div className="container">
      <Header></Header>
      <ChatSpace></ChatSpace>
      <TypeArea></TypeArea>
      </div>
    </div>
  );
}

export default App;
