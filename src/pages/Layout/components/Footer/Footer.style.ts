import { styled } from '@mui/material/styles';

export const FooterContainer = styled('footer')(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        backgroundColor: colors.gray90,
        display: 'flex',
        color: colors.gray40,
    })
);

export const Column = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'center',
    flex: 1,
    textAlign: 'center',
    padding: '1.5rem',
}));

export const FooterItem = styled('span')(() => ({
    paddingBottom: '0.5rem',
}));

export const DisclaimerContainer = styled('footer')(
    ({
        theme: {
            custom: { colors, params },
        },
    }) => ({
        backgroundColor: colors.gray110,
        display: 'flex',
        flexDirection: 'column',
        color: colors.gray40,
        padding: '1.5rem',
        borderTopLeftRadius: params.borderRadius,
        borderTopRightRadius: params.borderRadius,
    })
);

export const DisclaimerParagraph = styled('footer')(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        color: colors.gray40,
        marginBottom: '1rem',
    })
);
