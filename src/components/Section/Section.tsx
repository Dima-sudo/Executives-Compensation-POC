import React, { ReactNode } from 'react';

import * as S from './Section.style';

interface IProps {
    title?: ReactNode;
    content?: ReactNode;
    children?: ReactNode;
    className?: string;
}

const Section: React.FC<IProps> = ({
    title,
    content,
    children,
    className,
    ...rest
}) => (
    <S.Section className={className} {...rest}>
        {title && <S.Title>{title}</S.Title>}
        <S.Content>{children}</S.Content>
    </S.Section>
);

export default Section;
