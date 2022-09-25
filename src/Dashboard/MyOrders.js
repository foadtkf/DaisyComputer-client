import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Fade } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import DeleteOrderModal from "./DeleteOrderModal";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [deletingProduct, setDeletingProduct] = useState(null);
  const [user] = useAuthState(auth);
  const { email } = user;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://daisycomputer-server.onrender.com/booking?email=${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });
  }, [email, orders, navigate]);
  return (
    <Fade left cascade>
      <div className="mb-10">
        <h1 className="text-2xl">My orders: {orders.length}</h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Payment</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{o.product.slice(0, 30)}</td>
                  <td>{o.quantity}</td>
                  <td>${o.price}</td>
                  <td>
                    {o.status === "" && (
                      <Link to={`/dashboard/payment/${o._id}`}>
                        {" "}
                        <button className="btn btn-sm btn-success">Pay</button>
                      </Link>
                    )}
                    {o.status === "paid" && (
                      <span className="text-success">Pending</span>
                    )}
                    {o.status === "ship" && (
                      <span className="text-success">Shipping</span>
                    )}
                  </td>
                  <td>
                    {o.status === "" && (
                      <label
                        onClick={() => setDeletingProduct(o)}
                        for="delete-order-modal"
                        className="btn btn-error btn-sm"
                      >
                        Delete
                      </label>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {deletingProduct && (
          <DeleteOrderModal
            deletingProduct={deletingProduct}
            setDeletingProduct={setDeletingProduct}
          ></DeleteOrderModal>
        )}
      </div>
    </Fade>
  );
};

export default MyOrders;
