import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import type { BaseSeriesConfig } from '@/types/series-config.types';

// ----------------------------------------------------------------------

interface Props {
  selectedSeries: BaseSeriesConfig[];
  onRemoveSeries: (seriesId: BaseSeriesConfig['id']) => void;
}

function SelectedSeriesList({ onRemoveSeries, selectedSeries }: Props) {
  if (selectedSeries.length === 0) {
    return null;
  }

  return (
    <Paper sx={{ bgcolor: 'success.lighter', mb: 3, p: 2 }}>
      <Box sx={{ alignItems: 'center', display: 'flex', mb: 2 }}>
        <CheckCircleIcon sx={{ color: 'success.main', mr: 1 }} />
        <Typography sx={{ color: 'success.dark' }} variant='subtitle1'>
          Series Added to Chart ({selectedSeries.length})
        </Typography>
      </Box>

      {/* TODO: make it collapsible and expanded by default */}
      <Grid container spacing={2}>
        {selectedSeries.map(series => (
          <Grid item key={series.id} md={6} xs={12}>
            <Box
              sx={{
                '&:hover': { borderColor: 'primary.light', boxShadow: 2 },
                'alignItems': 'center',
                'bgcolor': 'background.paper',
                'border': '1px solid',
                'borderColor': 'divider',
                'borderLeft': '4px solid',
                'borderLeftColor': series.color,
                'borderRadius': 1,
                'boxShadow': 1,
                'display': 'flex',
                'justifyContent': 'space-between',
                'p': 1.5,
                'transition': 'all 0.2s',
              }}
            >
              <Box sx={{ overflow: 'hidden' }}>
                <Box sx={{ alignItems: 'center', display: 'flex', mb: 0.5 }}>
                  <Box
                    sx={{
                      bgcolor: series.color,
                      borderRadius: '50%',
                      height: 16,
                      mr: 1,
                      width: 16,
                    }}
                  />
                  <Tooltip title={series.data!.title}>
                    <Typography
                      noWrap
                      sx={{ maxWidth: { lg: '300px', md: '200px', sm: '250px', xs: '180px' } }}
                      variant='subtitle2'
                    >
                      {series.data!.title}
                    </Typography>
                  </Tooltip>
                </Box>
                <Typography color='text.secondary' sx={{ pl: 3 }} variant='caption'>
                  ID: {series.id}
                </Typography>
              </Box>
              <Tooltip title='Remove from chart'>
                <IconButton
                  onClick={() => onRemoveSeries(series.id)}
                  size='small'
                  sx={{
                    '&:hover': { bgcolor: 'error.lighter' },
                    'color': 'error.main',
                  }}
                >
                  <ClearIcon fontSize='small' />
                </IconButton>
              </Tooltip>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default SelectedSeriesList;
