import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasePage from './pages/BasePage';
import { TaskApp } from './components/TaskApp';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<TaskApp currentPage="ativos" />} />
                    <Route path="/tarefas-concluidas" element={<TaskApp currentPage="concluidos" />} />
                    <Route path="*" element={<TaskApp currentPage="ativos" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}