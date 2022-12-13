import { styled, keyframes } from '@mui/material/styles';
import ContainerComponent from '@mui/material/Container';
import InputComponent from '../Input/Input';
import SectionComponent from '../Section/Section';

export const PageContainer = styled(ContainerComponent)(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        backgroundColor: colors.gray40,
        minWidth: '100%',
    })
);

export const FluidWidthContainer = styled(ContainerComponent)(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        height: '100vh',
        boxSizing: 'border-box',
        backgroundColor: colors.gray40,
        display: 'flex',
    })
);

const infiniteSpin = keyframes`
from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    }
    to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
    }`;

export const Logo = styled('img')(() => ({
    width: '35.75rem',
    animation: `${infiniteSpin} linear 25s infinite`,
}));

export const Column = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
}));
export const Heading = styled('h3')(
    ({
        theme: {
            custom: {
                colors,
                shadows: { textShadows },
            },
        },
    }) => ({
        color: colors.gray100,
        marginBottom: '1rem',
        fontFamily: 'sans-serif',
        textShadow: textShadows.slight,
        fontSize: '2rem',
    })
);

export const Input = styled(InputComponent)(() => ({
    marginBottom: '2rem',
    width: '100%',
}));

export const Section = styled(SectionComponent)(() => ({
    padding: '1rem',
    width: '100%',
    '& > div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '20rem',
    },
}));

export const CallForActionText = styled('div')(() => ({
    fontFamily: 'sans-serif',
    fontSize: '1rem',
}));

export const ClickHereText = styled('span')(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        fontFamily: 'sans-serif',
        fontSize: '1rem',
        color: colors.blue40,
        cursor: 'pointer',
    })
);
