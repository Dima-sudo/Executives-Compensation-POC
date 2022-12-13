import React from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorBoundaryFallbackComponent from '../../components/ErrorBoundary/ErrorBoundary';
import Navbar from '../../components/Navbar/Navbar';

import * as S from './Layout.style';

const Layout = () => {
    const navItems = [
        { label: 'Overview', route: '/' },
        { label: 'Billing', route: '/billing' },
        { label: 'Report Configuration', route: '/report-configuration' },
    ];

    return (
        <S.Main>
            <ErrorBoundary
                FallbackComponent={ErrorBoundaryFallbackComponent}
                onReset={() => {
                    window.location.reload();
                }}
            >
                <Navbar {...{ navItems }} />
                <S.ContentContainer>
                    <S.FluidWidthContainer>
                        <Outlet />
                    </S.FluidWidthContainer>
                </S.ContentContainer>
                <S.FooterContainer>
                    <footer>Footer</footer>
                </S.FooterContainer>
            </ErrorBoundary>
        </S.Main>
    );
};

export default Layout;
