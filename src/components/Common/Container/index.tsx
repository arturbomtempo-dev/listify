import { StyledContainer } from '../../../assets/styles/Common/Container/Container.style';
import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

export function Container({ children }: ContainerProps) {
    return <StyledContainer>{children}</StyledContainer>;
}
