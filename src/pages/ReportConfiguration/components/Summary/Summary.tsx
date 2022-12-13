import React from 'react';
import { useTranslation } from 'react-i18next';
import SvgIcon from '../../../../components/SvgIcon/SvgIcon';
import { IconNamesEnum } from '../../../../components/SvgIcon/SvgIcon.constants';
import { summary } from '../../../../mocks/Configuration/summary';

import * as S from './Summary.style';

const Summary = () => {
    const { t } = useTranslation();
    return (
        <S.ColoredContainer>
            <S.Header>
                <S.HeaderItem>
                    <SvgIcon iconName={IconNamesEnum.INFO} />
                    <span>
                        {t('configuration.compensationComparisonFor')}:
                        <S.TextBold>{summary.companyName}</S.TextBold>
                    </span>
                </S.HeaderItem>
                <S.HeaderItem>
                    <SvgIcon iconName={IconNamesEnum.INFO} />
                    <span>{t('configuration.companiesForComparison')}:</span>
                </S.HeaderItem>
            </S.Header>

            <S.FlexContainer>
                <S.FlexItem>
                    <ul>
                        <S.PositionContainer>
                            <S.HeaderItem>
                                <SvgIcon iconName={IconNamesEnum.GRAPH} />
                                <S.PositionKeyWrapper>
                                    {t('configuration.forTitle')}:
                                </S.PositionKeyWrapper>
                                <S.TextBold>
                                    {summary.positionForComparison}
                                </S.TextBold>
                            </S.HeaderItem>
                        </S.PositionContainer>

                        {Object.entries(summary.compensationBreakdown).map(
                            ([key, value]) => (
                                <S.ListItemContainer {...{ key }}>
                                    <S.LiCircle
                                        iconName={IconNamesEnum.CIRCLE}
                                        width="0.5rem"
                                    />
                                    <S.Key>{key}:</S.Key>
                                    <S.TextBold>{value}</S.TextBold>
                                </S.ListItemContainer>
                            )
                        )}
                    </ul>
                </S.FlexItem>

                <S.FlexItem>
                    <ul>
                        {summary.companiesForComparison.map(
                            (companyName: string) => (
                                <S.ListItemContainer key={companyName}>
                                    <S.LiCircle
                                        iconName={IconNamesEnum.CIRCLE}
                                        width="0.5rem"
                                    />
                                    <S.Key>{companyName}</S.Key>
                                    <S.TextBold>Ltd.</S.TextBold>
                                </S.ListItemContainer>
                            )
                        )}
                    </ul>
                </S.FlexItem>
            </S.FlexContainer>
        </S.ColoredContainer>
    );
};

export default Summary;
