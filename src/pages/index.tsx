import { HomeContainer, Product } from "../styles/pages/home";
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Head from "next/head";
import { MouseEvent } from 'react'
import 'keen-slider/keen-slider.min.css'
import { Stripe } from "stripe";
import { CartButton } from "../components/CartButton";
import { IProduct, useCartContext } from "../contexts/cartContext";

interface HomeProps {
  products: IProduct[]
}

export const Home = ({ products }: HomeProps) => {

  const { AddProductToCart, checkIfItemAlreadyExistsInCart } = useCartContext()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  const handleAddProductToCart = (e: MouseEvent<HTMLButtonElement>, product: IProduct) => {
    e.preventDefault()

    AddProductToCart(product)
  }


  return (
    <>
      <Head>
        <title>Home | Gustavo Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen_slider">
        {products.map((product) => (
          <Product
            href={`product/${product.id}`}
            className="keen-slider__slide"
            key={product.id}
            prefetch={false}
          >
            <Image src={product.imageUrl} width={520} height={400} alt={""} />

            <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </div>


              <CartButton
                showQuantity={false}
                onClick={(e: any) => handleAddProductToCart(e, product)}
                color="green"
                size="large"
                disabled={checkIfItemAlreadyExistsInCart(product.id)}
              />
            </footer>
          </Product>
        ))}

      </HomeContainer>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {

    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount as number / 100),
      numberPrice: (price?.unit_amount / 100),
      defaultPriceId: price.id,
    }

  })

  return {
    props: {
      products
    },
  }
}
