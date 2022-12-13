import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';

import * as S from './Login.style';

const pieChart = require('./pieChart.svg');

interface IProps {
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Login: React.FC<IProps> = ({ setIsLoggedIn }) => {
    const { t } = useTranslation();
    t('123');
    return (
        <S.PageContainer>
            <S.FluidWidthContainer>
                <S.Column>
                    <span>
                        {/* <S.Heading>{t('login.compensationMadeEasy')}</S.Heading> */}
                        <S.Logo src={pieChart} alt="logo" />
                    </span>
                </S.Column>
                <S.Column>
                    <S.Section>
                        <span>
                            <S.Heading>{t('login.username')}</S.Heading>
                            <S.Input label={t('login.username')} />
                        </span>
                        <span>
                            <S.Heading>{t('login.password')}</S.Heading>
                            <S.Input label={t('login.password')} />
                        </span>

                        <S.CallForActionText>
                            {"Don'\t have an account?"}
                            <S.ClickHereText>{' Click Here '}</S.ClickHereText>
                            to learn more
                        </S.CallForActionText>
                        <Button
                            onClick={() => {
                                setIsLoggedIn(true);
                            }}
                            variant="contained"
                            sx={{ marginTop: '10rem', padding: '0.75rem' }}
                        >
                            Login
                        </Button>
                    </S.Section>
                </S.Column>
            </S.FluidWidthContainer>
        </S.PageContainer>
    );
};

export default Login;
