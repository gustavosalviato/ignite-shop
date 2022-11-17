import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'
import logoImg from '../assets/logo.png'
import Image from 'next/image'
import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { CartContextProvider, useCartContext } from '../contexts/cartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [test, setTest] = useState(true)

  const { cartQuantity } = useCartContext()

  console.log(cartQuantity)
  return (
    <Container>
      <CartContextProvider>
        <Header>
          <Image src={logoImg} alt="" />


          <button>
            <ShoppingCart
              size={22}
              weight='fill' />

            {cartQuantity > 0 && <span>{cartQuantity}</span>}

          </button>
        </Header>


        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}
