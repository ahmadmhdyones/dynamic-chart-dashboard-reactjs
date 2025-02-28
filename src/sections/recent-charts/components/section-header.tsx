import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import CreateChartButton from '@/components/charts/CreateChartButton';

// ----------------------------------------------------------------------

interface Props {
  title: string;
}

function SectionHeader({ title }: Props) {
  return (
    <Box sx={{ mb: 3, mt: 2 }}>
      <Stack alignItems='center' direction='row' justifyContent='space-between'>
        <Typography variant='h5'>{title}</Typography>
        <CreateChartButton />
      </Stack>
    </Box>
  );
}

export default SectionHeader;
