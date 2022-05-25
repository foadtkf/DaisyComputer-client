import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Flip } from "react-reveal";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const AddReviews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success('review added successfully',{position: toast.POSITION.TOP_RIGHT})
      });
  };
  
  const [user, loading] = useAuthState(auth);
  console.log(user)
  return (
<Flip top>
    <div className="w-96 mx-auto"  style={{minHeight:'100vh'}}>
    <h2 className="text-4xl text-teal-500">Submit your review: </h2>
      <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2 w-100 rounded h-10 text-black" {...register("name")} value={user.displayName} required/>
        
        <input
          className="mb-2 rounded h-10 text-black"
          {...register("rating")}
          placeholder="Rating"
          type="number"
        required/>
        <textarea
          className="mb-2 rounded text-black"
          {...register("feedback")}
          placeholder="Feedback"
        required/>
<input type="submit" value="Submit" class="btn" />
      </form>
      <ToastContainer/>
    </div></Flip>
  );
};

export default AddReviews;
