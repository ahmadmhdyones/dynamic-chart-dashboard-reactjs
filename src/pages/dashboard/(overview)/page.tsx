import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';

import { paths } from '@/helpers/map-routes';
import MetaTags from '@/components/common/meta-tags';

// ----------------------------------------------------------------------

function PageDashboardOverview() {
  return (
    <PageContainer title='Overview'>
      <MetaTags title='Overview | DCD Reactjs' />

      <Box component='main' id={paths.dashboard.root.id}>
        {/*  */}
      </Box>
    </PageContainer>
  );
}

export default PageDashboardOverview;
