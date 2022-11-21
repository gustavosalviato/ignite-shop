import { ShoppingCart } from "phosphor-react"
import Image from 'next/image'
import logoImg from '../../assets/logo.png'
import { HeaderContainer } from "./styles"
import { useCartContext } from "../../contexts/cartContext"

export const Header = () => {

    const { cartQuantity } = useCartContext()

    return (
        <HeaderContainer>
            <Image src={logoImg} alt="" />

            <button>
                <ShoppingCart
                    size={22}
                    weight='fill'
                />

                {cartQuantity >= 1 && <span>{cartQuantity}</span>}


            </button>
        </HeaderContainer>

    )
}