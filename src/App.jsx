import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext'; // Import useAuth here

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <PrivateRoute path="/" element={<Counter />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};


const PrivateRoute = ({ element, ...rest }) => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default App;
