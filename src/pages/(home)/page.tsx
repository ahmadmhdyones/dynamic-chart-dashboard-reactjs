import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { SITE } from '@/configs/site.config';
import { paths } from '@/helpers/map-routes';
import MetaTags from '@/components/common/meta-tags';

// ----------------------------------------------------------------------

export default function PageHome() {
  return (
    <PageContainer>
      <MetaTags />

      <Box component={'main'} id={paths.root.id}>
        <Typography variant='h4'>{SITE.name}</Typography>
        <Typography variant='body1'>{SITE.description}</Typography>
      </Box>
    </PageContainer>
  );
}
