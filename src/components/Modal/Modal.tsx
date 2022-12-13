import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(
    (
        props: TransitionProps & {
            children: React.ReactElement;
        },
        ref: React.Ref<unknown>
    ) => <Slide direction="up" ref={ref} {...props} />
);

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    title: React.ReactNode;
    message: React.ReactNode;
    labelLeft: string;
    labelRight: string;
    onClickRight?: () => void;
}

const Modal: React.FC<IProps> = ({
    isOpen,
    onClose,
    title,
    message,
    labelLeft,
    labelRight,
    onClickRight,
    ...rest
}) => (
    <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        {...rest}
    >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                {message}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose}>{labelLeft}</Button>
            <Button
                onClick={() => {
                    onClose();
                    onClickRight?.();
                }}
            >
                {labelRight}
            </Button>
        </DialogActions>
    </Dialog>
);

export default Modal;
