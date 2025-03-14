import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

// ----------------------------------------------------------------------

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: 16,
    padding: theme.spacing(1),
  },
}));

export const StyledDialogTitle = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 3),
  paddingBottom: theme.spacing(1),
}));

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  paddingBottom: theme.spacing(3),
}));

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  gap: theme.spacing(1),
  padding: theme.spacing(1.5, 3, 2),
}));
