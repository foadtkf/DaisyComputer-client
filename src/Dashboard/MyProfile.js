import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Fade } from "react-reveal";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [updateUser, setUpdateUser] = useState([]);
  const { email } = user;
  const { register, handleSubmit, reset } = useForm();
  fetch(`https://daisycomputer-server.onrender.com/user/${email}`)
    .then((res) => res.json())
    .then((data) => {
      setUpdateUser(data);
    });

  const onSubmit = async (data) => {
    const email = user?.email;
    const currentUser = {
      education: data?.education,
      address: data?.address,
      phone: data?.phone,
      linkdein: data?.linkdein,
    };
    if (email) {
      fetch(`https://daisycomputer-server.onrender.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.result.acknowledged) {
            toast("Updated Successfully");
            reset();
          }
        });
    }
  };

  return (
    <Fade left cascade>
      <div>
        <h1 className="text-2xl font-serif font-bold text-center">
          My Informations
        </h1>
        <div className="bg-transparent mx-auto max-w-xs mb-5 rounded-2xl w-100 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={user.displayName}
                readOnly
                className="input input-bordered w-full max-w-xs"
                {...register("name")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                value={user.email}
                readOnly
                className="input input-bordered w-full max-w-xs"
                {...register("email")}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                value={updateUser?.address}
                placeholder="Your Address"
                className="input input-bordered w-full max-w-xs"
                {...register("address")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                value={updateUser?.phone}
                placeholder="Phone"
                className="input input-bordered w-full max-w-xs"
                {...register("phone")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Education</span>
              </label>
              <input
                type="text"
                value={updateUser?.education}
                placeholder="Education"
                className="input input-bordered w-full max-w-xs"
                {...register("education")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">LinkedIn ID url</span>
              </label>
              <input
                type="text"
                value={updateUser?.linkdein}
                placeholder="LinkedIn ID url"
                className="input input-bordered w-full max-w-xs"
                {...register("linkdein")}
              />
            </div>
            <input
              className="btn w-full max-w-xs my-5"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </Fade>
  );
};

export default MyProfile;
