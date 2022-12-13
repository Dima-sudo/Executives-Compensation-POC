import React from 'react';
import { ITheme } from '../../theme';
import { IconNamesEnum, Icons } from './SvgIcon.constants';
import * as S from './SvgIcon.style';

interface IProps {
    iconName: IconNamesEnum[keyof IconNamesEnum];
    width?: `${string}rem`;
    height?: `${string}rem`;
    color?: keyof ITheme['colors'];
    isButton?: boolean;
    onClick?: () => void;
    className?: string;
}

const SvgIcon: React.FC<IProps> = ({
    iconName,
    isButton = true,
    width,
    height,
    color,
    onClick,
    className,
    ...rest
}) =>
    isButton ? (
        <S.IconButton
            {...{ width, height, onClick, className }}
            fill={color}
            color="inherit"
            {...rest}
        >
            {/* @ts-ignore */}
            {Icons[iconName]}
        </S.IconButton>
    ) : (
        <S.Wrapper {...{ width, height, onClick }} fill={color} {...rest}>
            {/* @ts-ignore */}
            {Icons[iconName]}
        </S.Wrapper>
    );

export default SvgIcon;
