import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import MetaTags from '@/components/common/meta-tags';
import { PageType } from '@/helpers/map-routes/pages.enum';

// ----------------------------------------------------------------------

export default function PageCharts() {
  return (
    <PageContainer>
      <MetaTags title='Charts | DCD Reactjs' />

      <Box component='main' id={PageType.ChartsPage}>
        <Typography variant='h4'>Charts</Typography>
      </Box>
    </PageContainer>
  );
}
