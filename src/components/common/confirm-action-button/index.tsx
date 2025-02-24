import { useState, cloneElement, isValidElement } from 'react';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import DialogContentText from '@mui/material/DialogContentText';

import type { ConfirmActionButtonProps } from './types';
import { StyledDialog, StyledDialogTitle, StyledDialogContent, StyledDialogActions } from './styles';

// ----------------------------------------------------------------------

export default function ConfirmActionButton({
  cancelButtonText = 'Cancel',
  children,
  confirmButtonColor = 'primary',
  confirmButtonText = 'Confirm',
  description = 'Are you sure you want to perform this action?',
  maxWidth = 'xs',
  onConfirm,
  title = 'Confirm Action',
}: ConfirmActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };

  const triggerElement = isValidElement(children)
    ? cloneElement(children, {
        onClick: handleOpen,
        ...(isValidElement(children) &&
          (children.props as { onClick?: (e: React.MouseEvent) => void }).onClick && {
            onClick: (e: React.MouseEvent) => {
              handleOpen(e);
              (children.props as { onClick: (e: React.MouseEvent) => void }).onClick(e);
            },
          }),
      })
    : children;

  return (
    <>
      {triggerElement}

      <StyledDialog
        fullWidth
        maxWidth={maxWidth}
        onClose={handleClose}
        open={isOpen}
        TransitionProps={{ timeout: 200 }}
      >
        <StyledDialogTitle>
          <Typography component='h2' variant='h6'>
            {title}
          </Typography>
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{
              color: theme => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </StyledDialogTitle>

        <StyledDialogContent>
          <DialogContentText sx={{ color: 'text.secondary' }}>{description}</DialogContentText>
        </StyledDialogContent>

        <StyledDialogActions>
          <Button
            onClick={handleClose}
            sx={{
              minWidth: 100,
            }}
            variant='outlined'
          >
            {cancelButtonText}
          </Button>
          <Button color={confirmButtonColor} onClick={handleConfirm} sx={{ minWidth: 100 }} variant='contained'>
            {confirmButtonText}
          </Button>
        </StyledDialogActions>
      </StyledDialog>
    </>
  );
}
