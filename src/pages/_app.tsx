import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'
import { ShoppingCart } from 'phosphor-react'
import { CartContextProvider, useCartContext } from '../contexts/cartContext'
import { Header } from '../components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container >
    </CartContextProvider>

  )
}
