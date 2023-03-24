import React, { useContext, useState } from "react";
import { DataContext } from "../dataProvider/dataProvider";
import '../bottomSide/footer.css'

export default function Footer() {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const newTodosComplete = () => {
    return todos.filter((todo) => todo.complete === false);
  };

  const deleteTodo = () => {
    setTodos(newTodosComplete());
    setCheckAll(false);
  };

  return (
    <>
        <div className="footer-wrapper">
          <label htmlFor="all">
            <input
              type="checkbox"
              name="all"
              id="all"
              onChange={handleCheckAll}
              checked={checkAll}
            />
            ALL
          </label>
          <p>You have {newTodosComplete().length} to do</p>
          <button className="delete-btn" id="delete" onClick={deleteTodo}>
            Delete
          </button>
        </div>
    </>
  );
}
