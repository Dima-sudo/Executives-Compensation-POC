import { styled, keyframes } from '@mui/material/styles';

import { Button as ButtonComponent } from '@mui/material';

export const PageContainer = styled('div')(() => ({}));

const bounceInForward = keyframes`
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
    }
    38% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
        opacity: 1;
    }
    55% {
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    72% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    81% {
        -webkit-transform: scale(0.84);
        transform: scale(0.84);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    89% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    95% {
        -webkit-transform: scale(0.95);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
`;

export const BubbleSuccessMessage = styled('div')(
    ({
        theme: {
            custom: {
                colors,
                shadows: { boxShadows },
            },
        },
    }) => ({
        backgroundColor: colors.green30,
        color: colors.blue60,
        boxShadow: boxShadows.boxShadow3,
        fontSize: '2rem',
        borderRadius: '50%',
        width: '32rem',
        height: '32rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        animation: `${bounceInForward} 1.2s both`,
    })
);

export const FlexContainer = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const TextContainer = styled('span')(() => ({
    marginBottom: '3rem',
}));

export const Button = styled(ButtonComponent)(() => ({
    padding: '0.75rem',
    width: '15rem',
}));
