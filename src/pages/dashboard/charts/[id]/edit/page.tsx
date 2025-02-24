import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import MetaTags from '@/components/common/meta-tags';
import { PageType } from '@/helpers/map-routes/pages.enum';

// ----------------------------------------------------------------------

export default function PageChartsEdit() {
  return (
    <PageContainer>
      <MetaTags title={`Charts Edit ${'chart_id'} | DCD Reactjs`} />

      <Box component='main' id={PageType.ChartsEditPage}>
        <Typography variant='h4'>Charts Edit</Typography>
      </Box>
    </PageContainer>
  );
}
