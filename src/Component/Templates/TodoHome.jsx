import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import image from "../../Images/dark-back.jpeg";
import { Link } from "react-router-dom";
import { TodoContext } from "../Context/Context";
const TodoHome = () => {
  const { tasks, settasks } = useContext(TodoContext);
  const dlttask = (idx) => {
    settasks(tasks.filter((val, i) => i !== idx));
  };
  const time = new Date();
  // ##########for details of task
  const [detail, setdetail] = useState(false);
  // ################functionality for complete task
  const compTask = (index) => {
    settasks(
      tasks.map((task, i) =>
        i === index ? { ...task, line: !task.line } : task
      )
    );
  };
  return (
    <div className="w-screen h-screen bg-white">
      {/* // ############for background */}
      <div
        className="w-full h-[34%] bg-red-300 relative p-[5%] flex justify-between items-center md:h-[42%]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-4xl font-semibold text-zinc-300 md:text-6xl">
          Your <br /> Things
        </h1>
        <h1 className="text-2xl text-zinc-300 w-fit text-center md:text-4xl">
          Task <br />
          <span className="text-zinc-400 text-xl md:text-3xl">
            {tasks.length}
          </span>
        </h1>
        <h1 className="absolute bottom-10 text-zinc-500 font-semibold md:text-3xl">
          {time.toLocaleDateString()}
        </h1>
      </div>
      {/* for inbox  */}
      <div
        className={`w-full p-[5%] max-h-[42%] overflow-y-auto md:w-[80%] md:mx-auto md:px-[3%] md:py-[2%]`}
      >
        <h1 className="text-2xl text-zinc-600 font-semibold mb-5">Inbox</h1>
        {/* ###########here we will apyly map to show task  */}
        {tasks.length > 0 ? (
          tasks.map((val, idx) => {
            return (
              <div
                key={idx}
                className={`w-full flex items-center mb-7 justify-between border-b border-zinc-400 relative min-h-[10vh] transition-all duration-500`}
              >
                <i
                  className="ri-check-double-line text-2xl text-green-500 font-semibold flex justify-center items-center "
                  onClick={() => {
                    compTask(idx);
                  }}
                ></i>
                <i
                  className="ri-delete-bin-line text-2xl text-red-500 font-semibold flex justify-center items-center "
                  onClick={() => {
                    dlttask(idx);
                  }}
                ></i>
                <div className=" w-[60%] flex flex-col">
                  <h2 className="text-zinc-800 font-bold text-xl md:text-2xl">
                    {val.title}
                  </h2>
                  <p
                    className="text-md w-full text-zinc-500 font-semibold md:text-xl break-words
                    "
                  >
                    {val.desc}
                  </p>
                </div>
                <h1 className="text-zinc-500 font-semibold text-sm w-[15%] md:text-xl">
                  {val.time}
                </h1>
                {val.line ? (
                  <div className="w-full bg-zinc-400 absolute h-1"></div>
                ) : null}
              </div>
            );
          })
        ) : (
          <h1 className="text-zinc-500 font-semibold text-center text-3xl">
            No Task Available
          </h1>
        )}

        {/* **************************** */}
      </div>
      {/* ####for add task  */}
      <div className="w-full px-[5%] flex items-center justify-center gap-20 h-fit absolute bottom-3 md:mb-0">
        <button
          className="text-3xl bg-red-500 px-4 py-[2.5%] rounded-md md:py-[1%] md:px-8"
          onClick={() => {
            settasks([]);
          }}
        >
          Reset
        </button>
        <Link
          to="/task"
          className="bg-blue-600 px-[10%] py-2 rounded-md md:py-[1%] md:px-[5%] text-white"
        >
          <i className="ri-add-large-fill text-3xl"></i>
        </Link>
      </div>
    </div>
  );
};

export default TodoHome;
