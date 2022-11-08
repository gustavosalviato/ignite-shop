import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    gap: '4.8rem',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: '65.6rem',
    padding: '0.4rem',
})


export const Product = styled('a', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '0.8rem',

    position: 'relative',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
    userSelect: 'none',

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.4rem',
        left: '0.4rem',
        right: '0.4rem',
        padding: '3.2rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        strong: {
            fontSize: '$lg'
        },

        span: {
            fontSize: '$xl',
            color: '$green300',
            fontweight: 'bold',
        }
    },

    '&:hover': {
        footer: {
            opacity: 1,
            transform: 'translateY(0%)',

        }
    }

})

