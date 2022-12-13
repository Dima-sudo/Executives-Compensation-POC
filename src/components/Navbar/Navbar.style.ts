import { styled } from '@mui/material/styles';
import ButtonComponent from '@mui/material/Button';
import AppBarComponent from '@mui/material/AppBar';
import ToolbarComponent from '@mui/material/Toolbar';

export const NavItem = styled(ButtonComponent)(({ theme }) => ({
    borderRadius: theme.custom.params.borderRadius,
    color: theme.custom.colors.white,
    display: 'block',
    marginInline: '1rem',
}));

export const AppBar = styled(AppBarComponent)(
    ({
        theme: {
            custom: { colors, params },
        },
    }) => ({
        height: params.navbarHeight,
        position: 'fixed',
        borderBottom: `5px solid ${colors.green40}`,
    })
);

export const Toolbar = styled(ToolbarComponent)(() => ({
    height: '100%',
}));
