import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasePage from './pages/BasePage';
import { TaskApp } from './components/TaskApp';
import { Navigate } from 'react-router-dom'; 

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<TaskApp currentPage="ativos" />} />
                    <Route path="/tarefas-concluidas" element={<TaskApp currentPage="concluidos" />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}