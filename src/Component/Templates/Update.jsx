import React, { useContext } from "react";
import { useForm } from "@formspree/react";
import { TodoContext } from "../Context/Context";
import { ToastContainer, toast } from "react-toastify";

const Update = () => {
  const { update1, setupdate1 } = useContext(TodoContext);
  const [state, handleSubmit, reset] = useForm("xblldpee");
  if (state.succeeded) {
    setupdate1(true);
    return (
      <p className="text-4xl text-zinc-500">Thank You For Supporting Us</p>
    );
  }
  // ##############
  return (
    <div className="w-screen h-screen bg-[#1f1e24] py-4 px-8">
      <h1 className="text-2xl font-semibold text-zinc-400">New Update...</h1>
      <h4 className="text-xl text-zinc-300">
        Dear Users We Have Created Some New Features .I Hope You Will Like It.
        Comment Down How This Update Is.
      </h4>
      <div className="w-full h-fit flex justify-center items-start">
        <form
          action=""
          className="w-[30%] h-[60%] flex flex-col justify-center items-center mt-[6%]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="UserName"
            id="UserName"
            className="w-[50%] mt-4 bg-transparent border-[1px] border-zinc-200 outline-none p-2 rounded-sm"
            placeholder="Write Your Name"
            required
          />
          <label
            htmlFor="Comment"
            className="text-xl capitalize text-zinc-300 mt-4 mb-3"
          >
            What you like about our app
          </label>
          <textarea
            name="Comment"
            id="Comment"
            cols="30"
            rows="10"
            className="bg-transparent outline-none border-[1px] border-zinc-300 w-full p-3 capitalize"
            placeholder="Comment here and tell us what we can improve"
            required
            maxLength="2000"
          ></textarea>
          <button
            type="Submit"
            className="bg-[#6556cd] py-2 px-6 rounded-sm mt-3"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
      {/* ##############toastcontainer   */}
    </div>
  );
};

export default Update;
