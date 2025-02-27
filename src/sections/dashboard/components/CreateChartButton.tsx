import { Link } from 'react-router';

import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { paths } from '@/helpers/map-routes';

// ----------------------------------------------------------------------

interface CreateChartButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  iconPosition?: 'start' | 'end';
  text?: string;
}

function CreateChartButton({
  fullWidth = false,
  iconPosition = 'start',
  size = 'medium',
  text = 'Create New Chart',
  variant = 'contained',
}: CreateChartButtonProps) {
  const icon = <AddCircleIcon fontSize={size === 'small' ? 'small' : 'medium'} />;

  return (
    <Button
      component={Link}
      fullWidth={fullWidth}
      size={size}
      to={paths.dashboard.charts.new.to()}
      variant={variant}
      {...(iconPosition === 'start' ? { startIcon: icon } : { endIcon: icon })}
    >
      {text}
    </Button>
  );
}

export default CreateChartButton;
