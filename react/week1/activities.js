import React from "react";
import ListItems from "./listitems";
function Header() {
  return <h1>Todo list</h1>;
}
function Activities(props) {
  return (
      <div>
      <Header />
      {props.TodoList.map((todo) => {
        return <ListItems task={todo.task} deadline={todo.deadline} />;
      })}
    </div>
  );
}
export default Activities; 