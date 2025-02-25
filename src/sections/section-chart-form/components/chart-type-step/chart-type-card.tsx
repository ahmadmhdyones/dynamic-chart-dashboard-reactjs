import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

import type { ChartTypeOption } from '@/types/chart.types';

// ----------------------------------------------------------------------

interface ChartTypeCardProps {
  option: ChartTypeOption;
  selected: boolean;
  onSelect: () => void;
}

function ChartTypeCard({ onSelect, option, selected }: ChartTypeCardProps) {
  return (
    <Card
      sx={{
        border: '1px solid',
        borderColor: selected ? 'primary.main' : 'divider',
        boxShadow: selected ? 3 : 1,
        height: '100%',
        transition: 'all 0.2s',
      }}
    >
      <CardActionArea
        disabled={!option.supported}
        onClick={onSelect}
        sx={{
          height: '100%',
          opacity: option.supported ? 1 : 0.5,
          p: 2,
        }}
      >
        <Box
          sx={{
            alignItems: 'flex-start',
            display: 'flex',
            height: '100%',
            justifyContent: 'space-between',
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Box sx={{ alignItems: 'center', display: 'flex', mb: 1 }}>
              <Box sx={{ color: selected ? 'primary.main' : 'inherit', mr: 1 }}>{option.icon}</Box>
              <Typography color={selected ? 'primary.main' : 'inherit'} variant='h6'>
                {option.label}
              </Typography>
            </Box>
            <Typography color={selected ? 'text.primary' : 'text.secondary'} variant='body2'>
              {option.description}
            </Typography>
            {!option.supported && (
              <Typography color='error' sx={{ mt: 1 }} variant='caption'>
                Coming soon
              </Typography>
            )}
          </CardContent>
          <Radio checked={selected} />
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default ChartTypeCard;
