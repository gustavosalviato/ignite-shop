import { styled } from ".."

export const ProductsContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'stretch',

    maxWidth: 1180,
    margin: '0 auto',
    gap: '7.2rem',
})

export const ImageContainer = styled('main', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    height: '65.6rem',
    borderRadius: 8,
    padding: '0.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }

})

export const ProductContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',

    strong: {
        fontSize: '3.2rem',
        color: '$gray300',
    },

    span: {
        marginTop: '1.6rem',
        fontSize: '3.2rem',
        color: '$green300'
    },

    p: {
        marginTop: '4.0rem',
        color: '$gray300',
        lineHeight: '1.6',
        fontSize: '1.8rem',

    },

    button: {
        marginTop: 'auto',
        borderRadius: '8px',
        color: '#FFF',
        padding: '1.6rem',
        backgroundColor: '$green500',
        fontSize: '1.8rem',
        transition: '0.4s',
        border: '0',

        '&:disabled': {
            cursor: 'not-allowed',
            opacity: '0.6',
        },


        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
        }

    }
})                          