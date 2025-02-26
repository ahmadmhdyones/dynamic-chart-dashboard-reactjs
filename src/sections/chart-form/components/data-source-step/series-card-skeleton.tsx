import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

// ----------------------------------------------------------------------

function SeriesCardSkeleton() {
  return (
    // TODO: fix skeleton wave animation
    <Box sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, height: '100%', p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Skeleton animation='wave' height={30} width='70%' />
        <Skeleton animation='wave' height={30} width={30} />
      </Box>
      <Skeleton animation='wave' height={20} sx={{ mb: 2 }} width='40%' />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        <Skeleton animation='wave' height={24} width={120} />
        <Skeleton animation='wave' height={24} width={100} />
        <Skeleton animation='wave' height={24} width={140} />
      </Box>
      <Box sx={{ alignItems: 'center', display: 'flex', mt: 2 }}>
        <Skeleton animation='wave' height={24} sx={{ mr: 1 }} width={24} />
        <Skeleton animation='wave' height={16} width={180} />
      </Box>
    </Box>
  );
}

export default SeriesCardSkeleton;
