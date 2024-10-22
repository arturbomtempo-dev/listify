import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TaskApp } from './components/Task/TaskApp';
import { BasePage } from './pages/BasePage';
import { Page404 } from './pages/Page404';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<TaskApp currentPage="ativos" />} />
                    <Route
                        path="/tarefas-concluidas"
                        element={<TaskApp currentPage="concluidos" />}
                    />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
