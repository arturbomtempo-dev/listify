import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ErrorTitle } from '../../assets/styles/pages/Page404/Page404.style';

export function Page404() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/erro-404');
    }, []);
    
    return (
        <ErrorTitle>Erro 404</ErrorTitle>
    );
}