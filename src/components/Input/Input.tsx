import React from 'react';

import * as S from './Input.style';

interface IProps {
    label?: string;
    className?: string;
    defaultValue?: string;
    variant?: 'outlined' | 'filled' | 'standard';
    sx?: object;
}

const Input: React.FC<IProps> = ({ label, className, ...rest }) => (
    <S.Input className={className} label={label} variant="filled" {...rest} />
);

export default Input;
