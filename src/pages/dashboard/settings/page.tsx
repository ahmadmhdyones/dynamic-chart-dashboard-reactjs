import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import MetaTags from '@/components/common/meta-tags';
import { PageType } from '@/helpers/map-routes/pages.enum';

// ----------------------------------------------------------------------

export default function PageSettings() {
  return (
    <PageContainer>
      <MetaTags title='Settings | DCD Reactjs' />

      <Box component='main' id={PageType.SettingsPage}>
        <Typography variant='h4'>Settings</Typography>
      </Box>
    </PageContainer>
  );
}
