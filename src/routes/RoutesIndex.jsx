import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RoutesWeb } from './Routes';

const RoutesIndex = () => {
    return (
        <>
            <Router>
                <Routes>
                    {
                        RoutesWeb.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.component}
                            />
                        ))
                    }
                </Routes>
            </Router>
        </>
    )
}

export default RoutesIndex