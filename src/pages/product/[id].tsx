import { ImageContainer, ProductContainer, ProductsContainer } from "../../styles/pages/product"


export const Product = () => {
    return (
        <ProductsContainer>
            <ImageContainer>
                <img src="" alt="" />
            </ImageContainer>

            <ProductContainer>
                <strong>Camiseta X</strong>
                <span>7,90</span>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio vel voluptatibus atque similique nostrum, asperiores sapiente reprehenderit molestiae quam aperiam, voluptates numquam. Molestiae, similique architecto quisquam veritatis velit nobis.</p>

                <button>Comprar Agora</button>
            </ProductContainer>
        </ProductsContainer>
    )
}

export default Product