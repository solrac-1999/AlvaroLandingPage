"use client";

import { useState } from "react";
import Link from "next/link";
import apiClient from "@/util/api";
import config from "@/config";

// This component is used to create Stripe Checkout Sessions
// It calls the /api/stripe/create-checkout route with the priceId, successUrl and cancelUrl
// By default, it doesn't force users to be authenticated. But if they are, it will prefill the Checkout data with their email and/or credit card. You can change that in the API route
// You can also change the mode to "subscription" if you want to create a subscription instead of a one-time payment
const ButtonCheckout = ({
  priceId,
  mode = "payment",
}: {
  priceId: string;
  mode?: "payment" | "subscription";
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePayment = async () => {
    setIsLoading(true);

    try {
      const { url }: { url: string } = await apiClient.post(
        "/stripe/create-checkout",
        {
          priceId,
          successUrl: window.location.href,
          cancelUrl: window.location.href,
          mode,
        }
      );

      window.location.href = url;
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  //TMP return
  return (
    <Link
      className="btn btn-block group bg-primary text-primary-content hover:bg-primary-focus"
      href={"#cta"}
    >
      <img
        src="/favicon.svg"
        alt="Icon"
        className="w-7 h-7 fill-white group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200"
      />
      Registrate
    </Link>
  );

  return (
    <button
      className="btn btn-block group bg-primary hover:bg-primary-focus"
      onClick={() => handlePayment()}
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        <img
          src="/favicon.svg"
          alt="Icon"
          className="w-10 h-10 fill-white group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200"
        />
      )}
      Subscripción {config?.appName}
    </button>
  );
};

export default ButtonCheckout;
