import { styled } from '@mui/material/styles';

import SectionComponent from '../../components/Section/Section';

export const Section = styled(SectionComponent)(() => ({
    marginBottom: '1.5rem',
}));

export const FlexContainer = styled('div')(() => ({
    display: 'flex',

    '& div': {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
    },
}));
