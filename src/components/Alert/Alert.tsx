import React from 'react';
import { IconNamesEnum } from '../SvgIcon/SvgIcon.constants';

import * as S from './Alert.style';

interface IProps {
    message: string;
    className?: string;
    iconName?: IconNamesEnum[keyof IconNamesEnum];
}

const Alert: React.FC<IProps> = ({ message, iconName, className }) => (
    <S.AlertContainer {...{ className }}>
        <S.ContentContainer>
            {iconName && <S.SvgIcon iconName={iconName} />}
            <span>{message}</span>
        </S.ContentContainer>
    </S.AlertContainer>
);

export default Alert;
