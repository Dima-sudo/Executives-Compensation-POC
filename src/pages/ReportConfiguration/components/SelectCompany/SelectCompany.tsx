import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';

import * as S from './SelectCompany.style';

const SelectCompany = () => {
    const { t } = useTranslation();

    return (
        <>
            <S.FlexContainer>
                <S.Input label={t('configuration.findCompanyById')} />
                <S.Input label={t('configuration.findCompanyByIndustry')} />
            </S.FlexContainer>

            <Button>{`+ ${t('configuration.newCompany')}`}</Button>
        </>
    );
};

export default SelectCompany;
