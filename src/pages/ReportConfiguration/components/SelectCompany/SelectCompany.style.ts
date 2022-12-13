import { styled } from '@mui/material/styles';

import InputComponent from '../../../../components/Input/Input';

export const Input = styled(InputComponent)(() => ({
    flex: 1,
}));

export const FlexContainer = styled('div')(() => ({
    display: 'flex',
    '& :not(:last-child)': {
        marginRight: '1.5rem',
    },
    marginBottom: '1rem',
}));
