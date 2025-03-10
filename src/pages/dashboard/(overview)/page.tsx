import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';

import { paths } from '@/helpers/map-routes';
import { SITE } from '@/configs/site.config';
import { shortenStr } from '@/helpers/string.utils';
import MetaTags from '@/components/common/meta-tags';
import SectionRecentCharts from '@/sections/recent-charts';
import SectionDashboardOverview from '@/sections/dashboard-overview';

// ----------------------------------------------------------------------

function PageDashboardOverview() {
  return (
    <PageContainer breadcrumbs={[{ path: paths.dashboard.root.to(), title: 'Dashboard' }]} title='Overview'>
      <MetaTags title={`Overview | ${shortenStr(SITE.name)}`} />

      <Box component='main' id={paths.dashboard.root.id}>
        <SectionDashboardOverview />
        <SectionRecentCharts />
      </Box>
    </PageContainer>
  );
}

export default PageDashboardOverview;
