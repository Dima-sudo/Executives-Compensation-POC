import * as React from 'react';
import Box from '@mui/material/Box';
import StepperComponent from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

interface IProps {
    steps: string[];
    activeStepIndex: number;
}

const Stepper: React.FC<IProps> = ({ steps, activeStepIndex }) => (
    <Box sx={{ width: '100%' }}>
        <StepperComponent activeStep={activeStepIndex} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </StepperComponent>
    </Box>
);

export default Stepper;
