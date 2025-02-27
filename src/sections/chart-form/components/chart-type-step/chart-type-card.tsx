import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import type { ChartTypeOption } from '@/types/chart.types';

// ----------------------------------------------------------------------

interface Props {
  description: ChartTypeOption['description'];
  disabled: boolean;
  icon: ChartTypeOption['icon'];
  isSelected: boolean;
  label: ChartTypeOption['label'];
  onClick: VoidFunction;
}

function ChartTypeCard({ description, disabled, icon, isSelected, label, onClick }: Props) {
  return (
    <Card
      onClick={disabled ? undefined : onClick}
      sx={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        height: '100%',
        opacity: disabled ? 0.5 : 1,
        position: 'relative',
        transition: 'all 0.2s ease-in-out',
        ...(isSelected && {
          borderColor: 'primary.main',
          borderWidth: 2,
          boxShadow: theme => `0 0 0 2px ${theme.palette.primary.main}`,
        }),
      }}
    >
      {disabled && (
        <Chip color='warning' label='Coming Soon' size='small' sx={{ position: 'absolute', right: 8, top: 8 }} />
      )}

      <CardContent>
        <Stack alignItems='center' spacing={2}>
          <Box
            sx={{
              alignItems: 'center',
              color: isSelected ? 'primary.main' : 'text.secondary',
              display: 'flex',
              height: 60,
              justifyContent: 'center',
              width: 60,
            }}
          >
            {icon}
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography color={isSelected ? 'primary.main' : 'text.primary'} gutterBottom variant='subtitle1'>
              {label}
            </Typography>
            <Typography color='text.secondary' variant='body2'>
              {description}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ChartTypeCard;
