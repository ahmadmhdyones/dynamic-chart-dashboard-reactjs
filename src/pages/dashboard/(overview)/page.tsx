import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { paths } from '@/helpers/map-routes';
import MetaTags from '@/components/common/meta-tags';

// ----------------------------------------------------------------------

export default function PageDashboardOverview() {
  return (
    <PageContainer>
      <MetaTags title='Overview | DCD Reactjs' />

      <Box component={'main'} id={paths.dashboard.root.id}>
        <Typography variant='h4'>Dashboard Overview</Typography>
      </Box>
    </PageContainer>
  );
}
