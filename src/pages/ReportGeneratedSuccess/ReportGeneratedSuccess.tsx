import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import * as S from './ReportGeneratedSuccess.style';

const ReportGeneratedSuccess = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <S.FlexContainer>
            <S.BubbleSuccessMessage>
                <S.TextContainer>
                    {t('reportGenerated.reportGenerated')}
                </S.TextContainer>
                <S.Button
                    onClick={() => {
                        navigate('/reports/1234');
                    }}
                    variant="contained"
                >
                    {t('reportGenerated.takeMeThere')}
                </S.Button>
            </S.BubbleSuccessMessage>
        </S.FlexContainer>
    );
};

export default ReportGeneratedSuccess;
