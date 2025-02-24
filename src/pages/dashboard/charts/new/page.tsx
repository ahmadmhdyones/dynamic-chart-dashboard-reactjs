import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import MetaTags from '@/components/common/meta-tags';
import { PageType } from '@/helpers/map-routes/pages.enum';

// ----------------------------------------------------------------------

export default function PageChartsNew() {
  return (
    <PageContainer>
      <MetaTags title='Create New Chart | DCD Reactjs' />

      <Box component='main' id={PageType.ChartsNewPage}>
        <Typography variant='h4'>Charts New</Typography>
      </Box>
    </PageContainer>
  );
}
