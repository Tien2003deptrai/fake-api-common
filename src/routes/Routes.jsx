// import { lazy } from 'react';
// const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
// Routing configuration with descriptions
export const RoutesWeb = [
    {
        path: '/login',
        component: <Login />,
        text: 'Admin Dashboard'
    },
    {
        path: '/register',
        component: <Register />,
        text: 'Setting Dashboard'
    },
];
