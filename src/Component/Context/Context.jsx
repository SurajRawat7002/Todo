import { createContext, useEffect, useState } from "react";
import { set } from "react-hook-form";
export const TodoContext = createContext();
const Context = (props) => {
  const [tasks, settasks] = useState([]);
  //load task from localstorage when the app start
  useEffect(() => {
    const savedtasks = localStorage.getItem("tasks");
    if (savedtasks) {
      settasks(JSON.parse(savedtasks));
    }
  }, []);
  //save tasks to localstorage when tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TodoContext.Provider value={{ tasks, settasks }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default Context;
