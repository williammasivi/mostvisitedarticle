import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './global.css';
import Loading from './components/loading.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ExemplePagination from './pages/exemplePagination.jsx';

import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import PageViews from './components/PageViews/PageViews.jsx';
import WikiAfricaTopArticles from './components/africanArticlesList.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/app',
                element: <App />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/page-views',
                element: <PageViews />,
            },
            {
                path: '/loading',
                element: <Loading />,
            },
            {
                path: '/exemple_pagination',
                element: <ExemplePagination />,
            },
            {
                path: '/top-africa',
                element: <WikiAfricaTopArticles />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
