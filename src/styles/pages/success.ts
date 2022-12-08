import { cursorTo } from "readline";
import { styled } from "..";

export const SuccessContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    margin: '0 auto',


    h1: {
        fontSize: '3.2rem',
        color: '$gray100',
    },

    p: {
        width: '100%',
        maxWidth: '59rem',
        marginTop: '3.2rem',
        color: '$gray300',
        fontSize: '2.4rem',
        textAlign: 'center',
        lineHeight: '1.4',

    },

    a: {
        display: 'block',
        marginTop: '8rem',
        fontSize: '2rem',
        fontWeight: '700',
        color: '$green500',
        transition: '0.4s',
        textDecoration: 'none',

        '&:hover': {
            color: '$green300',
        }

    }
})

export const ImageContainer = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",
    width: '14rem',
    height: '14rem',

    display: 'flex',
    justifyContent: 'center',
    borderRadius: '50%',
    alignItems: 'center',
    position: 'relative',

    marginTop: '6.4rem',

    img: {
        objectFit: 'cover',
    }
})


export const ImagesContainer = styled('div', {
    display: 'flex',
    marginBottom: '4.8rem',
    alignItems: 'center',

    "div + div": {
        marginLeft: 'calc(-140px / 2)',
    }
})
