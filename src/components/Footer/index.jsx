import {
    FooterText,
    StyledFooter,
    SeparationLine,
    FooterLink,
} from '../../assets/styles/Footer/Footer.style';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <StyledFooter>
            <SeparationLine />
            <FooterText>
                Copyright &copy; {currentYear}{' '}
                <FooterLink href="https://gfcodes.vercel.app/" target="_blank">
                    GF Codes
                </FooterLink>
                . Todos os direitos reservados.
            </FooterText>
        </StyledFooter>
    );
}
