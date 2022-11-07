import { styled } from "../../styles"

const Button = styled('button', {
    backgroundColor: "$tomato",
    padding: '16px',
    border: '0',
})

export const Product = () => {
    return (
        <Button>
            Product
        </Button>
    )
}

export default Product