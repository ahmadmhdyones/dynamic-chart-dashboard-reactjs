import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';

import { paths } from '@/helpers/map-routes';
import MetaTags from '@/components/common/meta-tags';

// ----------------------------------------------------------------------

function PageChartsEdit() {
  // TODO: add params type
  // TODO: get chart id from url params
  // TODO: fetch chart data
  // TODO: pass chart data to the section

  return (
    <PageContainer
      breadcrumbs={[
        { path: paths.dashboard.root.to(), title: 'Dashboard' },
        { path: paths.dashboard.charts.root.to(), title: 'Charts' },
        { path: paths.dashboard.charts.id.edit.to('chart_id'), title: 'Edit' },
      ]}
      title={`Charts Edit ${'chart_id'}`}
    >
      <MetaTags title={`Charts Edit ${'chart_id'} | DCDR`} />

      <Box component='main' id={paths.dashboard.charts.id.edit.id}>
        {/* TODO: Add charts edit section here */}
      </Box>
    </PageContainer>
  );
}

export default PageChartsEdit;
