import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext'; // Import useAuth here
import Counter from './Counter';
import Login from './Login';

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
