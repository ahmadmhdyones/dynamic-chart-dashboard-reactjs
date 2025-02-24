import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { PageType } from '@/helpers/map-routes/pages.enum';

// ----------------------------------------------------------------------

export default function PageChartsEdit() {
  return (
    <Box component='main' id={PageType.ChartsEditPage}>
      <Container>
        <Typography variant='h4'>Charts Edit</Typography>
      </Container>
    </Box>
  );
}
