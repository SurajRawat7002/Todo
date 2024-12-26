import { createContext, useEffect, useState } from "react";
import { set } from "react-hook-form";
export const TodoContext = createContext();
const Context = (props) => {
  const [tasks, settasks] = useState([]);
  const [update1, setupdate1] = useState(false)
  //load task from localstorage when the app start
  useEffect(() => {
    const savedtasks = localStorage.getItem("tasks");
    const savedupdate1=localStorage.getItem("update1");
    if (savedtasks) {
      settasks(JSON.parse(savedtasks));
    }
    if(savedupdate1){
      setupdate1(JSON.parse(savedupdate1))
    }
  }, []);
  //save tasks to localstorage when tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("update1",JSON.stringify(update1))
  }, [tasks,update1]);
  // ##################permission for Notification
  return (
    <TodoContext.Provider value={{ tasks, settasks ,update1,setupdate1}}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default Context;

