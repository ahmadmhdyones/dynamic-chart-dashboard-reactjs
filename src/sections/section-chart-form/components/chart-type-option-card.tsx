import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';

import type { ChartTypeStepProps } from '@/sections/section-chart-form/components/chart-type-step';

// ----------------------------------------------------------------------

interface Props extends Omit<ChartTypeStepProps, 'options'> {
  option: ChartTypeStepProps['options'][number];
}

function ChartTypeOptionCard({ onTypeChange, option, selectedType }: Props) {
  return (
    <Card
      onClick={() => onTypeChange(option.value)}
      sx={{
        '&:hover': { borderColor: 'primary.main', boxShadow: 2 },
        'border': '1px solid',
        'borderColor': selectedType === option.value ? 'primary.main' : 'divider',
        'boxShadow': selectedType === option.value ? 3 : 1,
        'cursor': 'pointer',
        'height': '100%',
        'transition': 'all 0.2s',
        ...(!option.supported && { opacity: 0.5, pointerEvents: 'none' }),
      }}
    >
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ color: 'primary.main' }}>{option.icon}</Box>
          {!option.supported ? (
            <Box
              component={Typography}
              sx={{
                backgroundColor: 'primary.light',
                borderRadius: 1,
                color: 'primary.contrastText',
                padding: 1,
              }}
              variant='caption'
            >
              Not Supported
            </Box>
          ) : (
            <FormControlLabel
              control={<Radio disabled={!option.supported} />}
              label=''
              sx={{ m: 0 }}
              value={option.value}
            />
          )}
        </Box>
        <Typography component='div' sx={{ mt: 2 }} variant='h6'>
          {option.label}
        </Typography>
        <Typography color='text.secondary' sx={{ mt: 1 }} variant='body2'>
          {option.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ChartTypeOptionCard;
