import { useParams } from 'react-router';
import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { paths } from '@/helpers/map-routes';
import { SITE } from '@/configs/site.config';
import { RouteParams } from '@/helpers/map-params';
import { shortenStr } from '@/helpers/string.utils';
import MetaTags from '@/components/common/meta-tags';
import SectionChartForm from '@/sections/chart-form';
import type { PageChartEditParams } from '@/routes/types';
import { useChart } from '@/services/api/hooks/use-chart';
import ErrorContent from '@/components/common/error-content';

// ----------------------------------------------------------------------

function PageChartsEdit() {
  const { [RouteParams.ChartId]: chartId } = useParams<PageChartEditParams>();
  const { data: chart, error, isLoading } = useChart({ id: chartId! });

  const renderContent = () => {
    if (isLoading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
          <CircularProgress />
        </Box>
      );
    }

    if (error || !chart) {
      return <ErrorContent message={error?.message || 'Chart not found'} title='Chart not found' />;
    }

    return <SectionChartForm initialChartData={chart} mode='edit' />;
  };

  return (
    <PageContainer
      breadcrumbs={[
        { path: paths.dashboard.root.to(), title: 'Dashboard' },
        { path: paths.dashboard.charts.root.to(), title: 'Charts' },
        { path: paths.dashboard.charts.id.edit.to(chartId!), title: 'Edit Chart' },
      ]}
      title={`Edit Chart: ${chart?.config.title || 'Loading...'}`}
    >
      <MetaTags title={`Edit Chart${!isLoading ? `: ${chart?.config.title}` : ''} | ${shortenStr(SITE.name)}`} />

      <Box component='main' id={paths.dashboard.charts.id.edit.id}>
        {renderContent()}
      </Box>
    </PageContainer>
  );
}

export default PageChartsEdit;
