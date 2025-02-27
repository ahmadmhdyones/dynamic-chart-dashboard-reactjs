import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import CardContent from '@mui/material/CardContent';

// ----------------------------------------------------------------------

export default function ChartGridItemSkeleton() {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent sx={{ flex: '1 0 auto', p: 2 }}>
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Skeleton animation='wave' height={32} width='60%' />
          <Skeleton animation='wave' height={24} width={80} />
        </Box>

        <Box sx={{ height: 400, mb: 1 }}>
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
    </Card>
  );
}
