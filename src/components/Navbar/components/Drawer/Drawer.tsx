import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
// import MailIcon from '@mui/icons-material/Mail';

import * as S from './Drawer.style';

interface Item {
    label: string;
    route: string;
}

interface IProps {
    isOpen: boolean;
    onClose?: () => void;
    items: Item[];
}

const Drawer: React.FC<IProps> = ({ items, isOpen, onClose = () => null }) => {
    const navigate = useNavigate();

    return (
        <S.Drawer anchor="left" open={isOpen} onClose={onClose}>
            <List>
                {items.map(({ label, route }) => (
                    <ListItem
                        key={label}
                        disablePadding
                        onClick={() => navigate(route)}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>{' '}
        </S.Drawer>
    );
};

export default Drawer;
