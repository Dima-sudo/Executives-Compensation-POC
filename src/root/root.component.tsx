/* eslint-disable no-unused-vars */
import React, { StrictMode, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import useAppRouter from './hooks/useAppRouter';

import { ITheme, theme as CustomTheme } from '../theme';
import '../normalize.css';
import Login from '../components/Login/Login';

declare module '@mui/material/styles' {
    interface Theme {
        custom: ITheme;
    }
    interface ThemeOptions {
        custom: ITheme;
    }
}
const Root = () => {
    const queryClient = new QueryClient();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { router } = useAppRouter();
    const theme = createTheme({
        custom: CustomTheme,
        palette: {
            primary: {
                // light: will be calculated from palette.primary.main,
                main: CustomTheme.colors.green60,
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
            },
        },
    });

    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider {...{ theme }}>
                    {isLoggedIn ? (
                        <RouterProvider {...{ router }} />
                    ) : (
                        <Login setIsLoggedIn={setIsLoggedIn} />
                    )}
                </ThemeProvider>
            </QueryClientProvider>
        </StrictMode>
    );
};

export default Root;
