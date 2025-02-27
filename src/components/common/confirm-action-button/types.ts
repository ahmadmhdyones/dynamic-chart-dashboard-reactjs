export interface ConfirmActionButtonProps {
  onConfirm: () => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmButtonColor?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
