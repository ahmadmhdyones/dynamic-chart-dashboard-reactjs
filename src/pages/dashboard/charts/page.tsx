import { PageContainer } from '@toolpad/core/PageContainer';

import MetaTags from '@/components/common/meta-tags';
import SectionChartsList from '@/sections/charts-list';

// ----------------------------------------------------------------------

function PageCharts() {
  return (
    <PageContainer>
      <MetaTags title='Charts | DCDR' />

      <SectionChartsList />
    </PageContainer>
  );
}

export default PageCharts;
