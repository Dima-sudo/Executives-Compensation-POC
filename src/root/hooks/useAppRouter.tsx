/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout, Error } from '../../pages';

const Overview = lazy(() => import('../../pages/Overview/Overview'));
const Billing = lazy(() => import('../../pages/Billing/Billing'));
const ReportConfiguration = lazy(
    () => import('../../pages/ReportConfiguration/ReportConfiguration')
);
const Report = lazy(() => import('../../pages/Report/Report'));

const ReportGeneratedSuccess = lazy(
    () => import('../../pages/ReportGeneratedSuccess/ReportGeneratedSuccess')
);

const MyReports = lazy(() => import('../../pages/MyReports/MyReports'));

interface Route {
    path: string;
    element: ReactNode;
    errorElement?: ReactNode;
    children?: any;
}

const useAppRouter = () => {
    const routeData = [
        {
            path: '/',
            element: <Overview />,
        },
        {
            path: '/billing',
            element: <Billing />,
        },
        {
            path: '/report-configuration',
            element: <ReportConfiguration />,
        },
        {
            path: '/reports/:reportId',
            element: <Report />,
        },
        {
            path: '/reports/success',
            element: <ReportGeneratedSuccess />,
        },
        {
            path: '/reports/my-reports',
            element: <MyReports />,
        },
    ];

    const routes: Route[] = [
        {
            path: '/',
            element: <Layout />,
            errorElement: <Error />,
            children: routeData.map(({ path, element }) => ({
                path,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        {element}
                    </Suspense>
                ),
            })),
        },
    ];

    const router = createBrowserRouter(routes);

    return { router, routeData };
};

export default useAppRouter;
