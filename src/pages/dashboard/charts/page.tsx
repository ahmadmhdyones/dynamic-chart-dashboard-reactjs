import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';

import { paths } from '@/helpers/map-routes';
import { SITE } from '@/configs/site.config';
import { shortenStr } from '@/helpers/string.utils';
import MetaTags from '@/components/common/meta-tags';
import SectionChartsList from '@/sections/charts-list';

// ----------------------------------------------------------------------

function PageCharts() {
  return (
    <PageContainer
      breadcrumbs={[
        { path: paths.dashboard.root.to(), title: 'Dashboard' },
        { path: paths.dashboard.charts.root.to(), title: 'Charts' },
      ]}
    >
      <MetaTags title={`Charts | ${shortenStr(SITE.name)}`} />

      <Box component='main' id={paths.dashboard.charts.root.id}>
        <SectionChartsList />
      </Box>
    </PageContainer>
  );
}

export default PageCharts;
