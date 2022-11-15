import { GetServerSideProps } from "next"
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe"
import { ImageSuccessContainer, SuccessContainer } from "../../styles/pages/success"

interface SuccessProps {
    customerName: string;

    product: {
        name: string;
        imageUrl: string;
    }
}
export const Success = ({ customerName, product }: SuccessProps) => {
    return (
        <SuccessContainer>
            <h1>Compra efetuada!</h1>

            <ImageSuccessContainer>
                <Image
                    src={product.imageUrl}
                    width={120}
                    height={110}
                    alt='' />
            </ImageSuccessContainer>

            <p>Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa. </p>

            <Link href="/">
                Voltar ao catálogo
            </Link>

        </SuccessContainer>
    )
}

export default Success


export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const sessionId = query.session_id as string

    console.log(sessionId)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    console.log(session.line_items?.data[0].price?.product as Stripe.Product)

    const product = session.line_items?.data[0].price?.product as Stripe.Product

    return {
        props: {
            customerName: session.customer_details?.name,

            product: {
                name: product.name,
                imageUrl: product.images[0]
            }

        }
    }
} 