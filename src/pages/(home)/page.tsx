import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { SITE } from '@/configs/site.config';
import { PageType } from '@/helpers/map-routes/pages.enum';

// ----------------------------------------------------------------------

export default function PageHome() {
  return (
    <Container component='main' id={PageType.HomePage}>
      <Typography variant='h4'>{SITE.name}</Typography>
    </Container>
  );
}
