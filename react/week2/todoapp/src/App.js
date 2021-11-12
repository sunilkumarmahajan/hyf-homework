import './App.css';
import RenderedTodos from './todo-app'

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];
function App() {
  return (
    <div className="App">

      <RenderedTodos todos={todos} />

    </div>
  );
}
export default App;
