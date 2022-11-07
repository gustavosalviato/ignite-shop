import { useRouter } from 'next/router'

export const Product = () => {
    const { query } = useRouter()
    console.log(query)
    return (
        <div>
            Product
        </div>
    )
}

export default Product