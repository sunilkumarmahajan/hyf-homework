import "./App.css";
import Timer from "./Timer";
import RenderTodos from "./ToDoList";
import Header from "./Header";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="App">
        <Timer />
        <RenderTodos />
      </div>
      
    </>
  );
}
export default App;