import { styled } from '@mui/material/styles';

export const Section = styled('section')(
    ({
        theme: {
            custom: { colors, shadows, params },
        },
    }) => ({
        borderRadius: params.borderRadius,
        backgroundColor: colors.white,
        boxShadow: shadows.boxShadows.boxShadow2,
        color: colors.textDefault,
        transition: params.transitionDefault,
        display: 'flex',
        flexDirection: 'column',

        '&:hover': {
            boxShadow: shadows.boxShadows.boxShadow3,
            transition: params.transitionDefault,
        },
    })
);

export const Title = styled('div')(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        fontSize: '1.5rem',
        padding: '1.5rem 1rem',
        borderBottom: `1px solid ${colors.gray50}`,
    })
);

export const Content = styled('div')(() => ({
    padding: '1.5rem 1rem',
    flex: 1,
}));
