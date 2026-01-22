import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./firebase-";
import IncomeExpense from './pages/IncomeExpense';
import { ProtectedRoute } from './components/protectedRoute';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/income-expense" element={
                    <ProtectedRoute>
                    <IncomeExpense />
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    );
}