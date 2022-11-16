import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'
import logoImg from '../assets/logo.png'
import Image from 'next/image'
import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [test, setTest] = useState(true)
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />


        <button>
          <ShoppingCart
            size={22}
            weight='fill' />

          {test && <span>1</span>}

        </button>
      </Header>


      <Component {...pageProps} />
    </Container>
  )
}
