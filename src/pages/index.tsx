import { HomeContainer, Product } from "../styles/pages/home";
import Image from 'next/image'
import camiseta1 from '../assets/camiseta1.png'
import camiseta2 from '../assets/camiseta2.png'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen_slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={400} alt={""} />

        <footer>
          <strong>Camiseta</strong>
          <span>R$ 100,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={400} alt={""} />

        <footer>
          <strong>Camiseta</strong>
          <span>R$ 100,00</span>
        </footer>
      </Product>


      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={400} alt={""} />

        <footer>
          <strong>Camiseta</strong>
          <span>R$ 100,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={400} alt={""} />

        <footer>
          <strong>Camiseta</strong>
          <span>R$ 100,00</span>
        </footer>
      </Product>


    </HomeContainer>
  )
}
