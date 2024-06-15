import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Outlet } from 'react-router-dom';

export function BasePage() {
    return (
        <main>
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    );
}
