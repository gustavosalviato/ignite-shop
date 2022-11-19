import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'
import logoImg from '../assets/logo.png'
import Image from 'next/image'
import { ShoppingCart } from 'phosphor-react'
import { CartContextProvider, useCartContext } from '../contexts/cartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  const { cartQuantity } = useCartContext()

  return (
    <>
      <CartContextProvider>
        <Container>
          <Header>
            <Image src={logoImg} alt="" />

            <div>{`teste ${cartQuantity}`}</div>
            <button>
              <ShoppingCart
                size={22}
                weight='fill' />


            </button>
          </Header>


          <Component {...pageProps} />
        </Container >
      </CartContextProvider>
    </>

  )
}
