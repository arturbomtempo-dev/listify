import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasePage from './pages/BasePage';
import { PendingTasks } from './pages/PendingTasks';
import { CompletedTasks } from './pages/CompletedTasks';
import { Page404 } from './pages/Page404';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BasePage />}>
                    <Route index element={<PendingTasks />}></Route>
                    <Route path="/tarefas-concluidas" element={<CompletedTasks />}></Route>
                    <Route path="*" element={<Page404 />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}