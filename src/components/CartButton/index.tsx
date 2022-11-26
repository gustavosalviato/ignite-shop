import { ShoppingCart } from "phosphor-react"
import { ComponentProps } from "react"
import { useCartContext } from "../../contexts/cartContext"
import { ButtonContainer } from "./styles"

type CartButtonProps = ComponentProps<typeof ButtonContainer> & {
    showQuantity: boolean
}

export const CartButton = ({ showQuantity = true, ...props }: CartButtonProps) => {
    const { cartQuantity } = useCartContext()

    return (
        <ButtonContainer {...props}>
            <ShoppingCart
                size={22}
                weight='fill'
            />

            {showQuantity && cartQuantity >= 1 && <span>{cartQuantity}</span>}


        </ButtonContainer>
    )

}