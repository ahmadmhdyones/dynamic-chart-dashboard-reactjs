import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from '@mui/icons-material/Delete';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DownloadIcon from '@mui/icons-material/FileDownload';

import type { Chart } from '@/types/chart.types';

import { getFrequencyLabel } from '@/helpers/charts.utils';
import ChartPreview from '@/components/charts/chart-preview';
import ConfirmActionButton from '@/components/common/confirm-action-button';

// ----------------------------------------------------------------------

interface Props {
  chart: Chart;
  onEdit?: (chart: Chart) => void;
  onDelete?: (chart: Chart) => void;
  onFullscreen?: (chart: Chart) => void;
  onDownload?: (chart: Chart) => void;
}

export default function ChartGridItem({ chart, onDelete, onDownload, onEdit, onFullscreen }: Props) {
  const {
    config: { title },
    series,
    timeFrequency,
  } = chart;

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent sx={{ flex: '1 0 auto', p: 2 }}>
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography noWrap title={title} variant='h6'>
            {title || 'Untitled Chart'}
          </Typography>
          <Chip color='primary' label={`${getFrequencyLabel(timeFrequency)}`} size='small' variant='outlined' />
        </Box>

        <Box sx={{ height: 400, mb: 1 }}>
          <ChartPreview chart={chart} height={500} showPlaceholders={false} />
        </Box>

        <Stack alignItems='center' direction='row' spacing={0.5} sx={{ mt: 1 }}>
          <Stack alignItems='center' direction='row' spacing={0.5}>
            <Typography color='text.secondary' variant='body2'>
              Series:
            </Typography>
          </Stack>
          {series.map(s => (
            <Tooltip key={s.id} title={s.label || s.id}>
              <Box
                sx={{
                  bgcolor: s.color,
                  borderRadius: '50%',
                  height: 12,
                  opacity: s.opacity,
                  width: 12,
                }}
              />
            </Tooltip>
          ))}
        </Stack>
      </CardContent>

      <CardActions sx={{ justifyContent: 'flex-end', px: 2, py: 1 }}>
        {onDownload && (
          <Tooltip title='Download Data'>
            <IconButton onClick={() => onDownload(chart)} size='small'>
              <DownloadIcon fontSize='small' />
            </IconButton>
          </Tooltip>
        )}
        {onFullscreen && (
          <Tooltip title='View Fullscreen'>
            <IconButton onClick={() => onFullscreen(chart)} size='small'>
              <FullscreenIcon fontSize='small' />
            </IconButton>
          </Tooltip>
        )}
        {onEdit && (
          <Tooltip title='Edit'>
            <IconButton onClick={() => onEdit(chart)} size='small'>
              <EditIcon fontSize='small' />
            </IconButton>
          </Tooltip>
        )}
        {onDelete && (
          <ConfirmActionButton
            description='Are you sure you want to delete this chart?'
            onConfirm={() => onDelete(chart)}
            title='Delete Chart'
          >
            <Tooltip title='Delete'>
              <IconButton size='small'>
                <DeleteIcon fontSize='small' />
              </IconButton>
            </Tooltip>
          </ConfirmActionButton>
        )}
      </CardActions>
    </Card>
  );
}
