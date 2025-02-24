import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { PageType } from '@/helpers/map-routes/pages.enum';

// ----------------------------------------------------------------------

export default function PageDashboardOverview() {
  return (
    <Box component='main' id={PageType.DashboardOverviewPage}>
      <Container>
        <Typography variant='h4'>Dashboard Overview</Typography>
      </Container>
    </Box>
  );
}
