import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

import { useNavigate } from 'react-router-dom';
import * as S from './Navbar.style';
import { NavItem } from './Navbar.types';
import SvgIcon from '../SvgIcon/SvgIcon';
import { IconNamesEnum } from '../SvgIcon/SvgIcon.constants';
import Drawer from './components/Drawer/Drawer';

interface IProps {
    navItems: NavItem[];
}

const Navbar: React.FC<IProps> = ({ navItems }) => {
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleMenuClick = () => {
        setIsDrawerOpen((currentState) => !currentState);
    };

    const handleDrawerCLose = () => {
        setIsDrawerOpen(false);
    };

    const drawerItems = [
        {
            label: 'My Reports',
            route: '/reports/my-reports',
        },
        {
            label: 'Profile',
            route: '/profile',
        },
        {
            label: 'Insights',
            route: '/insights',
        },
        {
            label: 'Payment History',
            route: '/payment-history',
        },
    ];

    return (
        <>
            <S.AppBar position="absolute">
                <S.Toolbar>
                    <SvgIcon
                        iconName={IconNamesEnum.HAMBURGER}
                        onClick={handleMenuClick}
                    />

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {navItems.map(({ label, route }: NavItem) => (
                            <S.NavItem
                                key={label}
                                onClick={() => navigate(route)}
                            >
                                {label}
                            </S.NavItem>
                        ))}
                    </Box>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                    />
                </S.Toolbar>
            </S.AppBar>

            <Drawer
                items={drawerItems}
                isOpen={isDrawerOpen}
                onClose={handleDrawerCLose}
            />
        </>
    );
};
export default Navbar;
