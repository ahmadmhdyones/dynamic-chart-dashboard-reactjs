import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import { useTheme } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

export default function ChartGridItemSkeleton() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Responsive height calculation
  const chartHeight = isMobile ? 250 : isTablet ? 350 : 400;

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent sx={{ display: 'flex', flex: '1 0 auto', flexDirection: 'column', p: { sm: 2, xs: 1.5 } }}>
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Skeleton animation='wave' height={32} width='60%' />
          <Skeleton animation='wave' height={24} width={80} />
        </Box>

        <Box sx={{ flex: 1, height: chartHeight, mb: 1, minHeight: isMobile ? 200 : 300 }}>
          <Skeleton
            animation='wave'
            height='100%'
            sx={{ borderRadius: 1, transform: 'none' }}
            variant='rectangular'
            width='100%'
          />
        </Box>

        <Stack alignItems='center' direction='row' spacing={0.5} sx={{ mt: 1 }}>
          <Skeleton animation='wave' height={20} width={50} />
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {[...Array(4)].map((_, index) => (
              <Skeleton
                animation='wave'
                height={12}
                key={index}
                sx={{ borderRadius: '50%' }}
                variant='circular'
                width={12}
              />
            ))}
          </Box>
        </Stack>
      </CardContent>

      <CardActions sx={{ justifyContent: 'flex-end', px: 2, py: 1 }}>
        {[...Array(4)].map((_, index) => (
          <Skeleton
            animation='wave'
            height={32}
            key={index}
            sx={{ borderRadius: '50%', mx: 0.5 }}
            variant='circular'
            width={32}
          />
        ))}
      </CardActions>
    </Card>
  );
}
