import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleData }) {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    handleData(data);
    reset();
  };
  return (
    <div className="flex align-center justify-center flex-col shrink-0 w-1/2 gap-2 bg-[#dadada5b] p-5 rounded-md mt-5">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          type="text"
          placeholder="cover-image url"
          {...register("cover")}
        />
        <input type="text" placeholder="title" {...register("title")} />
        <input type="text" placeholder="description" {...register("desc")} />
        <input
          type="text"
          placeholder="profile-image url"
          {...register("profile")}
        />
        <input type="text" placeholder="author" {...register("auth")} />
        <input
          type="submit"
          value="Generate Card"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
      </form>
    </div>
  );
}

export default Form;
