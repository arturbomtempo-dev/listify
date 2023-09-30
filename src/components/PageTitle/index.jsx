import { StyledPageTitle } from '../../assets/styles/components/PageTitle/PageTitle.style';

export function PageTitle({ titleText }) {
    return (
        <StyledPageTitle>
            {titleText}
        </StyledPageTitle>
    );
}