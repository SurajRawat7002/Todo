import React, { useContext, useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import todo from "../../Images/todo.jpg";
import { useForm } from "react-hook-form";
import { TodoContext } from "../Context/Context";
import { ToastContainer, toast } from "react-toastify";
const Task = () => {
  // ##################function for toastify

  const notify = () => {
    toast("Task Added",{
      autoClose:900
    })
  };
  // #################functionality for task updation
  const { tasks, settasks } = useContext(TodoContext);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data.Time);
    const newTask = {
      title: data.Title,
      desc: data.Desc,
      time: data.Time,
      line: false,
      notified: false,
    };
    const updatedTask = [...tasks, newTask];
    settasks(updatedTask);
    reset();
    notify();
  };
  return (
    <div className="w-screen h-screen bg-[#1f1e24] p-[3%]">
      <nav className="w-full flex justify-between items-center md:justify-center md:gap-80">
        <i
          className="ri-arrow-left-line text-4xl text-zinc-400 md:text-4xl"
          onClick={() => {
            navigate("/");
          }}
        ></i>
        <h1 className="text-3xl text-zinc-300 md:text-4xl">Add New Task</h1>
        <i className="ri-todo-line text-4xl text-zinc-400"></i>
      </nav>
      <div className="w-[15%] h-[7%] rounded-full mt-14 mx-auto md:h-[15%] md:w-[12%]">
        <img
          src={todo}
          alt=""
          className="w-full h-full object-cover object-center rounded-full"
        />
      </div>
      <div className="w-full mt-[20%] md:mt-[10%] md:w-[70%] md:mx-auto">
        <form
          action=""
          className="w-full flex flex-col gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <select
            className="select text-zinc-200 w-full bg-transparent outline-none border-b md:text-xl"
            {...register("Title", { required: true })}
          >
            <option value="Business">Business</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
            <option value="Exercise">Exercise</option>
            <option value="Art">Art</option>
            <option value="Passion">Passion</option>
          </select>
          <input
            type="text"
            className="w-full mt-4 border-b outline-none"
            placeholder="Write Your Task"
            {...register("Desc", { required: true })}
          />
          <input
            type="text"
            name=""
            id=""
            className="w-full mt-4 bg-transparent border-b outline-none"
            placeholder="Set Your Time"
            {...register("Time", { required: true })}
          />
          <button
            type="submit"
            className="bg-[#6556cd] w-full text-2xl py-3 md:w-[30%] md:mx-auto rounded-md"
          >
            Add Your Task
          </button>
        </form>
      </div>
      {/* ######################TostContainer for Messages / */}
      <ToastContainer
      autoClose={900}
      />
    </div>
  );
};
<input type="datetime-local" name="" id="" className="text-zinc-400 w-full" />;

export default Task;
