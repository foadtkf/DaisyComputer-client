import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useSWR from "swr";
import Loading from "../../shared/Loading.js";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useQuery } from "react-query";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ResourceDetail = () => {
  const [user, loading] = useAuthState(auth);
  const [btnDisable, setBtnDisable] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [purchaseQuantity, setPurchaseQuantity] = useState("");
  const baseUrl = `https://marley-electronics.herokuapp.com/product/${id}`;
  const [total, setTotal] = useState(0);
  const {
    data: data,
    isLoading,
    refetch,
  } = useQuery(["order", id], () =>
    fetch(`https://marley-electronics.herokuapp.com/product/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  let minquantity = 50;
  const handleButton = (event) => {
    setPurchaseQuantity(event.target.value);
    console.log(purchaseQuantity);
    if (
      parseInt(purchaseQuantity) >= minquantity &&
      parseInt(purchaseQuantity) <= data.quantity
    ) {
      setError("");
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
      setError(
        "Order quantity must be greater than minimum quantity and less than available quantity"
      );
    }
  };

  let totalQantity;

  const onSubmit = (e) => {
    // console.log(e.target.value)
    totalQantity = data.quantity - purchaseQuantity;
    const totalPrice = parseFloat(purchaseQuantity) * parseFloat(data.price);
    const parseTotalQ = parseInt(totalQantity);
    const booking = {
      myInputQuantity: purchaseQuantity,
      product: data.name,
      status: "",
      quantity: parseTotalQ,
      email: user.email,
      address: e.address,
      phone: e.phone,
      total: totalPrice,
    };

    console.log(totalQantity);
    fetch(`https://marley-electronics.herokuapp.com/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ parseTotalQ }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          fetch(`https://marley-electronics.herokuapp.com/booking`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(booking),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Order Placed Successsfully");
                reset();
              }
            });
        } else {
          toast.error("Cannot Place order.Please try again.");
        }
      });
  };

  return (
    <div>
      {/* <h1>{data.name}</h1> */}
      <div className="card lg:card-side bg-neutral rounded-xl  shadow-2xl shadow-black mx-12 my-12">
        <figure>
          <img
            className="object-contain h-96 w-96 mx-10"
            src={data.url}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-base-100">
            Product Name: {data.name}
          </h2>
          <p className="text-base-100">Description: {data.description}</p>
          <p className="text-base-100">Price: {data.price}</p>
          <p className="text-base-100">Available: {data.quantity} Unit</p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-1 justify-items-center mt-2"
          >
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                {/* <span className="label-text">Your Email</span> */}
              </label>
              <label className="input-group">
                <span>Product</span>
                <input
                  type="text"
                  placeholder={data.name}
                  value={data.name}
                  disabled
                  className="input input-bordered  w-full max-w-xs"
                />
              </label>
            </div>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                {/* <span className="label-text">Enter amount</span> */}
              </label>
              <label className="input-group">
                <span>Price</span>
                <input
                  type="number"
                  disabled
                  value={data.price}
                  placeholder={data.price}
                  className="input input-bordered  w-full max-w-xs"
                />
                <span>USD</span>
              </label>
            </div>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                {/* <span className="label-text">Enter amount</span> */}
              </label>
              <label className="input-group">
                <span>Available</span>
                <input
                  type="number"
                  disabled
                  value={data.quantity}
                  // placeholder={(data.quantity)}
                  className="input input-bordered  w-full max-w-xs"
                />
                <span>Unit</span>
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-base-100">
                  Enter Quantity (Minimum 50)
                </span>
              </label>
              <label className="input-group">
                <input
                  type="Number"
                  min={parseInt(50)}
                  // value="50"
                  name="quantity"
                  max={parseInt(data.quantity)}
                  placeholder="50"
                  onInput={handleButton}
                  onKeyUpCapture={handleButton}
                  onKeyDownCapture={handleButton}
                  className="input input-bordered w-full max-w-xs"
                />
                <span>UNIT</span>
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-base-100">Address</span>
              </label>
              <input
                type="text"
                placeholder="Your Address"
                name="address"
                className="input input-bordered w-full max-w-xs"
                {...register("address")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-base-100">Phone</span>
              </label>
              <input
                type="number"
                placeholder="Your Phone Number"
                name="phone"
                className="input input-bordered w-full max-w-xs"
                {...register("phone")}
              />
            </div>

            <div className="card-actions justify-end">
              <input
                type="submit"
                value="Order"
                disabled={btnDisable}
                className="btn btn-neutral bg-base-100 text-neutral hover:bg-secondary rounded-lg px-16"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetail;