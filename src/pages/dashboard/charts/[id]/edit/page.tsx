import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';

import { paths } from '@/helpers/map-routes';
import MetaTags from '@/components/common/meta-tags';

// ----------------------------------------------------------------------

function PageChartsEdit() {
  return (
    <PageContainer
      breadcrumbs={[
        { path: paths.dashboard.root.to(), title: 'Dashboard' },
        { path: paths.dashboard.charts.root.to(), title: 'Charts' },
        { path: paths.dashboard.charts.id.edit.to('chart_id'), title: 'Edit' },
      ]}
      title={`Charts Edit ${'chart_id'}`}
    >
      <MetaTags title={`Charts Edit ${'chart_id'} | DCD Reactjs`} />

      <Box component='main' id={paths.dashboard.charts.id.edit.id}>
        {/*  */}
      </Box>
    </PageContainer>
  );
}

export default PageChartsEdit;
