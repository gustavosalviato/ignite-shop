import { ImageSuccessContainer, SuccessContainer } from "../../styles/pages/success"

export const Success = () => {
    return (
        <SuccessContainer>
            <h1>Compra efetuada!</h1>

            <ImageSuccessContainer>
              teste
            </ImageSuccessContainer>

            <p>Uhuul <strong>Diego Fernandes</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa. </p>

            <a>Voltar ao catálogo</a>
        </SuccessContainer>
    )
}

export default Success