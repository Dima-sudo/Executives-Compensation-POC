import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>
                Whoops. There might be a problem with this page, or it has not
                been built yet.
            </p>
            <p>
                {/* @ts-ignore */}
                <i>{error.statusText || error.message}</i>
            </p>
            <p>
                {/* @ts-ignore */}
                <div>{error.status}</div>
            </p>
        </div>
    );
};

export default ErrorPage;
