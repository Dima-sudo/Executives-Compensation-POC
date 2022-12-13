import React from 'react';
import MockChart from '../../mocks/components/MockChart/MockChart';

import * as S from './Report.style';

const Report = () => (
    <div>
        <S.Section title="Compensation Breakdown">
            <S.FlexContainer>
                <MockChart chartType="doughnut" />
                <MockChart chartType="doughnut" />
            </S.FlexContainer>
        </S.Section>
        <S.Section title="Competitors">
            <MockChart chartType="barline" />
        </S.Section>
        <S.Section title="Strengths">
            <MockChart chartType="bar" />
        </S.Section>
        <S.Section title="Industry">
            <MockChart chartType="scatter" />
        </S.Section>
    </div>
);

export default Report;
