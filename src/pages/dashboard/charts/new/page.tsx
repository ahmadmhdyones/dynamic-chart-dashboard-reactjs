import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';

import { paths } from '@/helpers/map-routes';
import MetaTags from '@/components/common/meta-tags';
import SectionChartForm from '@/sections/chart-form';

// ----------------------------------------------------------------------

function PageChartsNew() {
  return (
    <PageContainer
      breadcrumbs={[
        { path: paths.dashboard.root.to(), title: 'Dashboard' },
        { path: paths.dashboard.charts.root.to(), title: 'Charts' },
        { path: paths.dashboard.charts.new.to(), title: 'Create New Chart' },
      ]}
      title=''
    >
      <MetaTags title='Create New Chart | DCDR' />

      <Box component='main' id={paths.dashboard.charts.new.id}>
        <SectionChartForm />
      </Box>
    </PageContainer>
  );
}

export default PageChartsNew;
