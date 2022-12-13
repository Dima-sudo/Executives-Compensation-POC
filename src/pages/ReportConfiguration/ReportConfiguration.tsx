import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Stepper from '../../components/Stepper/Stepper';

import SelectCompany from './components/SelectCompany/SelectCompany';
import SelectComparisonGroup from './components/SelectComparisonGroup/SelectComparisonGroup';
import SelectComparisonPeers from './components/SelectComparisonPeers/SelectComparisonPeers';
import SelectBenchmarkPosition from './components/SelectBenchmarkPosition/SelectBenchmarkPosition';
import Summary from './components/Summary/Summary';

import * as S from './ReportConfiguration.style';
import Modal from '../../components/Modal/Modal';

const ReportConfiguration = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const steps = [
        t('configuration.selectCompany'),
        t('configuration.selectDataForComparison'),
        t('configuration.selectComparisonPeers'),
        t('configuration.selectManagementPosition'),
        t('configuration.summaryAndReview'),
    ];

    const stepsIndexMap = [
        <SelectCompany />,
        <SelectComparisonGroup />,
        <SelectComparisonPeers />,
        <SelectBenchmarkPosition />,
        <Summary />,
    ];

    const handleNextStep = () => {
        setActiveStep((currentStep) => currentStep + 1);
    };

    const handlePreviousStep = () => {
        setActiveStep((currentStep) => currentStep - 1);
    };

    const isNextDisabled = activeStep >= steps.length - 1;
    const isPreviousDisabled = activeStep <= 0;

    const isLastStep = isNextDisabled && activeStep === 4;

    return (
        <>
            <S.PageContainer>
                <S.StepperContainer>
                    <Stepper steps={steps} activeStepIndex={activeStep} />
                </S.StepperContainer>

                <S.Section title={t('configuration.compensationComparison')}>
                    <S.FormBodyContainer>
                        {stepsIndexMap[activeStep]}
                    </S.FormBodyContainer>

                    <S.FormFooter>
                        <S.Button
                            disabled={isPreviousDisabled}
                            variant="outlined"
                            onClick={handlePreviousStep}
                        >
                            {t('configuration.previous')}
                        </S.Button>
                        <S.Button
                            disabled={isNextDisabled && !isLastStep}
                            variant="contained"
                            onClick={
                                isLastStep
                                    ? () => setIsModalOpen(true)
                                    : handleNextStep
                            }
                        >
                            {isLastStep
                                ? t('configuration.finish')
                                : t('configuration.next')}
                        </S.Button>
                    </S.FormFooter>
                </S.Section>
            </S.PageContainer>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={t('configuration.almostReadyTitle')}
                message={t('configuration.checkAllValues')}
                labelLeft={t('configuration.cancel')}
                labelRight={t('configuration.finish')}
                onClickRight={() => {
                    navigate('/reports/success');
                }}
            />
        </>
    );
};

export default ReportConfiguration;
