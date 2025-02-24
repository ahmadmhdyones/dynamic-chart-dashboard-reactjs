import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';

import { paths } from '@/helpers/map-routes';
import MetaTags from '@/components/common/meta-tags';

// ----------------------------------------------------------------------

function PageSettings() {
  return (
    <PageContainer>
      <MetaTags title='Settings | DCDR' />

      <Box component='main' id={paths.dashboard.settings.id}>
        {/*  */}
      </Box>
    </PageContainer>
  );
}

export default PageSettings;
