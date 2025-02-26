import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import ChartPreview from './chart-preview';
import type { ChartPreviewProps } from './chart-preview';

// ----------------------------------------------------------------------

function ChartPreviewCard(props: ChartPreviewProps) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant='h6'>
          {props.chartTitle || 'Chart Preview'}
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Box sx={{ height: 400 }}>
          <ChartPreview {...props} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ChartPreviewCard;
