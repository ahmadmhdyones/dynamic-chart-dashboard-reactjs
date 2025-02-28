import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';

import { paths } from '@/helpers/map-routes';
import MetaTags from '@/components/common/meta-tags';
import SectionChartsList from '@/sections/charts-list';

// ----------------------------------------------------------------------

function PageCharts() {
  return (
    <PageContainer>
      <MetaTags title='Charts | DCDR' />

      <Box component='main' id={paths.dashboard.charts.root.id}>
        <SectionChartsList />
      </Box>
    </PageContainer>
  );
}

export default PageCharts;
