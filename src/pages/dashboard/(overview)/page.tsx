import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MetaTags from '@/components/common/meta-tags';
import { PageType } from '@/helpers/map-routes/pages.enum';

// ----------------------------------------------------------------------

export default function PageDashboardOverview() {
  return (
    <>
      <MetaTags title='Overview | DCD Reactjs' />
      <Box component='main' id={PageType.DashboardOverviewPage}>
        <Container>
          <Typography variant='h4'>Dashboard Overview</Typography>
        </Container>
      </Box>
    </>
  );
}
