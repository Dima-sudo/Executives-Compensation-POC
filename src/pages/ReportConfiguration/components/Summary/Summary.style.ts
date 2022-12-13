import { styled } from '@mui/material/styles';

import SvgIcon from '../../../../components/SvgIcon/SvgIcon';

export const ColoredContainer = styled('div')(
    ({
        theme: {
            custom: { params },
        },
    }) => ({
        backgroundColor: '#e6f5fc',
        borderRadius: params.borderRadius,
        padding: '1rem',
        height: '100%',
    })
);

export const Header = styled('div')(() => ({
    display: 'flex',
}));

export const HeaderItem = styled('span')(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        display: 'flex',
        alignItems: 'center',
        lineHeight: 'initial',
        flex: 1,

        '& button': {
            padding: 0,
            marginRight: '1rem',
        },

        '& svg': {
            color: colors.blue60,
        },
    })
);

export const TextBold = styled('span')(() => ({
    fontWeight: 800,
    lineHeight: 'initial',
}));

export const FlexContainer = styled('div')(() => ({
    display: 'flex',
}));

export const FlexItem = styled('div')(() => ({
    flex: 1,
}));

export const Key = styled('span')(() => ({
    marginRight: '0.5rem',
    textTransform: 'capitalize',
    lineHeight: 'initial',
}));

export const LiCircle = styled(SvgIcon)(() => ({
    marginRight: '0.5rem',
}));

export const ListItemContainer = styled('span')(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: '0.25rem',
        '& > button > svg': {
            color: `${colors.blue60}`,
        },

        '& button': {
            padding: 0,
        },
    })
);

export const PositionContainer = styled('div')(() => ({
    marginBottom: '1rem',
}));

export const PositionKeyWrapper = styled('span')(() => ({
    marginRight: '0.25rem',
}));
