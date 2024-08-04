import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './routes/layout/layout';
import HomePage from './routes/homePage/homePage';
import ListPage from './routes/listPage/listPage';
import SinglePage from './routes/singlePage/singlePage';
import ErrorPage from './routes/errorPage/errorPage';
import Contact from './routes/contact/contact';
import Agents from './routes/agents/agents';

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: 'list',
                    element: <ListPage />
                },
                {
                    path: 'contact',
                    element: <Contact />
                },
                {
                    path: 'agents',
                    element: <Agents />
                },
                {
                    path: 'list/:id',
                    element: <SinglePage />
                },
                {
                    path: '*',
                    element: <ErrorPage />
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
};

export default App;
