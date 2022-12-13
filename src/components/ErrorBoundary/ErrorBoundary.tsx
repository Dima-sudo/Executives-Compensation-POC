import React from 'react';

import { FallbackProps } from 'react-error-boundary';

const ErrorBoundary: React.FC<FallbackProps> = ({
    error,
    resetErrorBoundary,
}) => (
    <div role="alert">
        <p>
            Whoops. There might be a problem with this page, or it has not been
            built yet.
        </p>
        {error?.message && <pre>{error?.message}</pre>}

        {resetErrorBoundary && (
            <button type="button" onClick={resetErrorBoundary}>
                Try again
            </button>
        )}
    </div>
);

export default ErrorBoundary;
