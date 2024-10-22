import { Outlet } from 'react-router-dom';
import { Container } from '../../components/Common/Container';
import { Footer } from '../../components/Common/Footer';

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
