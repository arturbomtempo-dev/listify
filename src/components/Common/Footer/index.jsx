import {
    FooterLink,
    FooterText,
    SeparationLine,
    StyledFooter,
} from '../../../assets/styles/Common/Footer/Footer.style';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <StyledFooter>
            <SeparationLine />
            <FooterText>
                Copyright &copy; {currentYear}{' '}
                <FooterLink href="https://spacefordevelopment.vercel.app/" target="_blank">
                    Space For Development
                </FooterLink>
                . Todos os direitos reservados.
            </FooterText>
        </StyledFooter>
    );
}
