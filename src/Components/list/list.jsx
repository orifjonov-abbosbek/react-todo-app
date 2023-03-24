import React, { useContext } from "react";
import ListItem from "../listItem/listItem";
import { DataContext } from "../dataProvider/dataProvider";
import '../list/list.css'


export default function List() {
  const [todos, setTodos] = useContext(DataContext);

  const switchComplete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(newTodos);
  };

  const handleEditTodos = (editvalue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editvalue;
      }
    });
    setTodos(newTodos);
  };

  return (
    <ul className="list">
      {todos.map((todo, index) => (
        <ListItem
          todo={todo}
          key={index}
          id={index}
          checkComplete={switchComplete}
          handleEditTodos={handleEditTodos}
        />
      ))}
    </ul>
  );
}
