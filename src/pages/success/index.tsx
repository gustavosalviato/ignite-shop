import { GetServerSideProps } from "next"
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe"
import { ImagesContainer, ImageContainer, SuccessContainer } from "../../styles/pages/success"

interface SuccessProps {
    customerName: string;

    product: {
        name: string;
        imageUrl: string;
    }

    productsImages: string[]
}
export const Success = ({ customerName, productsImages, product }: SuccessProps) => {

    return (
        <>
            <Head>
                <title>Compra efetuada | Gustavo Shop</title>
                <meta name="robots" content="noindex" />

            </Head>
            <SuccessContainer>
                <h1>Compra efetuada!</h1>

                <ImagesContainer>

                    {productsImages.map((image, i) => (
                        <ImageContainer key={i}>
                            <Image
                                src={image}
                                width={120}
                                height={110}
                                alt='' />
                        </ImageContainer>
                    ))}



                </ImagesContainer>
                <p>Uhuul <strong>{customerName}</strong>, sua compra de <strong>{productsImages.length} </strong> camisetas já está a caminho da sua casa.</p>

                <Link href="/">
                    Voltar ao catálogo
                </Link>

            </SuccessContainer>
        </>

    )
}
export default Success


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    const sessionId = query.session_id as string;

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["line_items", "line_items.data.price.product"],
    });

    const customerName = session.customer_details?.name;
    const productsImages = session.line_items?.data.map((item) => {
        const product = item.price?.product as Stripe.Product;
        return product.images[0];
    });

    return {
        props: {
            customerName,
            productsImages,
        },
    };
};