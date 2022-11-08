import { HomeContainer, Product } from "../styles/pages/home";
import Image from 'next/image'
import camiseta1 from '../assets/camiseta1.png'
import camiseta2 from '../assets/camiseta2.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={400} alt={""} />

        <footer>
          <strong>Camiseta</strong>
          <span>R$ 100,00</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta2} width={520} height={400} alt={""} />

        <footer>
          <strong>Camiseta</strong>
          <span>R$ 100,00</span>
        </footer>
      </Product>


    </HomeContainer>
  )
}
