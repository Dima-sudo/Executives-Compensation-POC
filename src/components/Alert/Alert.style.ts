import { styled } from '@mui/material/styles';
import SvgIconComponent from '../SvgIcon/SvgIcon';

export const AlertContainer = styled('div')(
    ({
        theme: {
            custom: { colors, params },
        },
    }) => ({
        padding: '1rem 1.5rem',
        border: `1px solid ${colors.blue40}`,
        color: colors.blue40,
        borderRadius: params.borderRadius,
    })
);

export const SvgIcon = styled(SvgIconComponent)(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        '& svg': {
            color: colors.blue40,
        },
        marginRight: '1rem',
    })
);

export const ContentContainer = styled('span')(() => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    lineHeight: 'initial',

    '& button': {
        padding: 0,
    },
}));
