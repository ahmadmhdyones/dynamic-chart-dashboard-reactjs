import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';

import type { ChartTypeOption } from '@/types/chart.types';

import type { ChartType } from '@/models';

// ----------------------------------------------------------------------

interface Props {
  options: ChartTypeOption[];
  selectedType: ChartType;
  onTypeChange: (type: ChartType) => void;
}

function ChartTypeStep({ onTypeChange, options, selectedType }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ChartType;
    onTypeChange(value);
  };

  return (
    <Box sx={{ py: 2 }}>
      <Typography gutterBottom variant='h6'>
        Select Chart Type
      </Typography>
      <Typography color='text.secondary' sx={{ mb: 3 }} variant='body2'>
        Choose the type of chart that best represents your data.
      </Typography>

      <RadioGroup aria-label='chart-type' name='chart-type' onChange={handleChange} value={selectedType}>
        <Grid container spacing={2}>
          {options.map(option => (
            <Grid item key={option.value} md={4} sm={6} xs={12}>
              <Card
                onClick={() => onTypeChange(option.value)}
                sx={{
                  '&:hover': { borderColor: 'primary.main', boxShadow: 2 },
                  'border': '1px solid',
                  'borderColor': selectedType === option.value ? 'primary.main' : 'divider',
                  'boxShadow': selectedType === option.value ? 3 : 1,
                  'cursor': 'pointer',
                  'height': '100%',
                  'position': 'relative',
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
                          position: 'absolute',
                          px: 4,
                          py: 1.5,
                          right: 0,
                          top: 0,
                        }}
                        variant='button'
                      >
                        Coming Soon
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
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </Box>
  );
}

export default ChartTypeStep;
