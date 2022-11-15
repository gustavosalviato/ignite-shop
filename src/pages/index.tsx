import { HomeContainer, Product } from "../styles/pages/home";
import Image from 'next/image'
import camiseta1 from '../assets/camiseta1.png'
import camiseta2 from '../assets/camiseta2.png'
import { useKeenSlider } from 'keen-slider/react'
import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import { Stripe } from "stripe";

import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: {
    id: number,
    name: string,
    imageUrl: string,
    price: number,
  }[]

}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen_slider">
      {products.map((product) => (
        <Product
          href={`product/${product.id}`}
          className="keen-slider__slide"
          key={product.id }
        >
          <Image src={product.imageUrl} width={520} height={400} alt={""} />

          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
      ))}

    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  console.log(response.data)

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price



    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }

  })

  return {
    props: {
      products
    }
  }
}
