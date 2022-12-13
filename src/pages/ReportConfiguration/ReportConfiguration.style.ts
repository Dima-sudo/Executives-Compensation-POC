import { styled } from '@mui/material/styles';

import ButtonComponent from '@mui/material/Button';
import SectionComponent from '../../components/Section/Section';

export const PageContainer = styled('div')(() => ({}));

export const StepperContainer = styled('div')(() => ({
    padding: '1rem 0',
    margin: '2rem 0',
}));

export const Button = styled(ButtonComponent)(
    ({
        theme: {
            custom: { params },
        },
    }) => ({
        borderRadius: params.borderRadius,
        marginLeft: '1rem',
    })
);

export const FormFooter = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'flex-end',
}));

export const FormBodyContainer = styled('div')(() => ({
    marginBottom: '2rem',
}));

export const Section = styled(SectionComponent)(() => ({
    minHeight: '51.5rem',

    // Section content container
    '& > div:nth-child(2)': {
        display: 'flex',
        flexDirection: 'column',

        // Configuration report footer
        '& > div:nth-child(2)': {
            marginTop: 'auto',
        },
    },
}));
