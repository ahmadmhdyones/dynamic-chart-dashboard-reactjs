import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { SITE } from '@/configs/site.config';
import MetaTags from '@/components/common/meta-tags';
import { PageType } from '@/helpers/map-routes/pages.enum';
// ----------------------------------------------------------------------

export default function PageHome() {
  return (
    <>
      <MetaTags />
      <Box component='main' id={PageType.HomePage}>
        <Container>
          <Typography variant='h4'>{SITE.name}</Typography>
        </Container>
      </Box>
    </>
  );
}
