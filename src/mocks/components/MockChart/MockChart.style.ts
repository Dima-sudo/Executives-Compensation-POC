import { styled } from '@mui/material/styles';

export const ChartContainer = styled('div')<{ isFullWidth?: boolean }>(
    ({ isFullWidth }) => ({
        width: isFullWidth ? '100%' : 'initial',
    })
);
