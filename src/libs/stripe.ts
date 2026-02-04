// Stripe stub implementation
import Stripe from "stripe";

const createCheckout = async (params: {
  priceId: string;
  mode: "payment" | "subscription";
  successUrl: string;
  cancelUrl: string;
  clientReferenceId?: string;
  user?: { customerId?: string; email?: string };
  couponId?: string | null;
}): Promise<string> => {
  console.log("Stripe checkout not configured");
  return "https://example.com/checkout";
};

const createCustomerPortal = async (params: {
  customerId: string;
  returnUrl: string;
}): Promise<string> => {
  console.log("Stripe portal not configured");
  return "https://example.com/portal";
};

const findCheckoutSession = async (sessionId: string) => {
  console.log("Stripe session not configured");
  return null;
};

export { createCheckout, createCustomerPortal, findCheckoutSession };

