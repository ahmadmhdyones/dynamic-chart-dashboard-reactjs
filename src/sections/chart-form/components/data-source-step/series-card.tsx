import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';

import type { IFredSeries } from '@/services/api/fred.types';

// ----------------------------------------------------------------------

interface Props {
  series: IFredSeries;
  isSelected: boolean;
  onSelect: (series: IFredSeries) => void;
}

function SeriesCard({ isSelected, onSelect, series }: Props) {
  return (
    <Card
      onClick={() => onSelect(series)}
      sx={{
        '&:hover': { borderColor: 'primary.main', boxShadow: 2 },
        'border': '1px solid',
        'borderColor': isSelected ? 'primary.main' : 'divider',
        'boxShadow': isSelected ? 3 : 1,
        'cursor': 'pointer',
        'display': 'flex',
        'flexDirection': 'column',
        'height': '100%',
        'mb': 2,
        'transition': 'all 0.2s',
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 2 }}>
        <Box sx={{ alignItems: 'flex-start', display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Box sx={{ width: '85%' }}>
            <Typography
              component='div'
              noWrap
              sx={{ fontSize: '1rem', fontWeight: 600 }}
              title={series.title}
              variant='h6'
            >
              {series.title}
            </Typography>
          </Box>
          <FormControlLabel
            control={<Checkbox checked={isSelected} onChange={() => onSelect(series)} />}
            label=''
            onClick={e => e.stopPropagation()}
            sx={{ m: 0 }}
            value={series.id}
          />
        </Box>

        <Typography color='text.secondary' sx={{ mb: 1.5 }} variant='body2'>
          Series ID: {series.id}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
          <Chip label={`Frequency: ${series.frequency_short}`} size='small' variant='outlined' />
          <Chip label={`Units: ${series.units_short}`} size='small' variant='outlined' />
          <Chip label={`Adjustment: ${series.seasonal_adjustment_short}`} size='small' variant='outlined' />
        </Box>

        {series.notes ? (
          <Box sx={{ alignItems: 'center', display: 'flex', mt: 2 }}>
            <Tooltip title={series.notes}>
              <IconButton size='small'>
                <InfoIcon fontSize='small' />
              </IconButton>
            </Tooltip>
            <Typography color='text.secondary' sx={{ display: 'inline', fontSize: '0.75rem' }} variant='body2'>
              Additional information available
            </Typography>
          </Box>
        ) : (
          <Box sx={{ alignItems: 'center', display: 'flex', mt: 2 }}>
            <IconButton disabled size='small'>
              <InfoIcon color='disabled' fontSize='small' />
            </IconButton>
            <Typography color='text.disabled' sx={{ display: 'inline', fontSize: '0.75rem' }} variant='body2'>
              No additional information available
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default SeriesCard;
