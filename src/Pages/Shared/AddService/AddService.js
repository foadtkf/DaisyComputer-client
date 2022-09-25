import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Flip } from "react-reveal";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../Loading";

const AddService = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    const url = `https://daisycomputer-server.onrender.com/products`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        toast.success("item added successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  if (loading) <Loading></Loading>;
  return (
    <Flip top>
      <div
        className="w-96 mx-auto bg-transparent"
        style={{ minHeight: "100vh" }}
      >
        <h2 className="text-4xl text-teal-500">Please add an item: </h2>
        <form
          className="flex flex-col bg-transparent "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="mb-2 rounded h-10 w-100 text-black"
            {...register("name")}
            placeholder="Name"
            required
          />
          <input
            className="mb-2 rounded h-10 text-black"
            {...register("price")}
            placeholder="Price"
            type="number"
            required
          />
          <input
            className="mb-2 rounded h-10 text-black"
            {...register("quantity")}
            placeholder="Quantity"
            type="number"
            required
          />
          <input
            className="mb-2 rounded h-10 text-black"
            {...register("minquantity")}
            placeholder="Minimum Quantity"
            type="number"
            required
          />
          <textarea
            className="mb-2 rounded text-black"
            {...register("description")}
            placeholder="Description"
            required
          />
          <input
            className="mb-2 rounded h-10 text-black"
            {...register("img")}
            placeholder="Image url"
            type="text"
            required
          />
          <input
            className="mb-2 rounded h-10 text-black"
            {...register("brand")}
            placeholder="Brand"
            type="text"
            required
          />
          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    </Flip>
  );
};

export default AddService;
