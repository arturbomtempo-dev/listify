import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Outlet } from 'react-router-dom';

export default function BasePage() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    );
}