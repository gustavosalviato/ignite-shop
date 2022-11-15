import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_PUBLIC_KEY as string, {
    apiVersion: "2022-08-01",
    appInfo: {
        name: 'Nova Empresa',
    },
})