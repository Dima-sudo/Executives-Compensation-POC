import { styled } from '@mui/material/styles';
import ContainerComponent from '@mui/material/Container';

export const Main = styled('main')(() => ({
    fontFamily: 'sans-serif',
}));

export const ContentContainer = styled('div')(
    ({
        theme: {
            custom: { params, colors },
        },
    }) => ({
        '& > *': {
            minHeight: params.minMainContentContainerHeight,
        },
        backgroundColor: colors.gray50,
        paddingTop: params.navbarHeight,
    })
);

export const FluidWidthContainer = styled(ContainerComponent)(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        backgroundColor: colors.gray40,
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
    })
);

export const FooterContainer = styled(ContainerComponent)(() => ({}));
