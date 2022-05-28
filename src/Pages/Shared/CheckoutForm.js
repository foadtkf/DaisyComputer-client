import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionID, setTransactionID] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const { _id, name, email, total } = order;
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ total }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [total]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    //confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      console.log(paymentIntent);
      setTransactionID(paymentIntent.id);
      setSuccess("Your payment is completed");
      const payment = {
        order: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`http://localhost:5000/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      }).then((res) =>
        res.json().then((data) => {
          setProcessing(false);
        })
      );
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#FFEE00",
                "::placeholder": {
                  color: "#FFEE00",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing && (
          <div className="w-16 h-16 border-b-2 border-amber-900 rounded-full animate-spin mx-auto"></div>
        )}
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <div className="text-green-500">
          <p>{success}</p>
          <p>
            Your transaction id:{" "}
            <span className="text-purple-500 font-bold">{transactionID}</span>{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
