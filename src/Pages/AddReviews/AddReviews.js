import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Fade } from "react-reveal";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReviews = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = 'http://localhost:5000/reviews';
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
                toast.success('review added successfully', { position: toast.POSITION.TOP_RIGHT })
            });
    };

    const [user] = useAuthState(auth);
    return (
        <Fade left cascade>
            <div className="w-full max-w-xs mx-auto">
                <h2 className="text-2xl mb-5 ">Submit your review: </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            value={user.displayName}
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
                            className="input input-bordered w-full max-w-xs"
                            {...register("email")}
                        />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs"
                            placeholder="How many stars you want to give us"
                            type="number"
                            {...register("rating")}
                            min='1'
                            max='5'
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Feedback</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs"
                            {...register("feedback")}
          placeholder="Your feedback"
                        />
                    </div>
                    <input className='btn w-full max-w-xs mt-5' type="submit" value="Add" />
                </form >
            </div></Fade>
    );
};

export default AddReviews;