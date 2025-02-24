import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { PageType } from '@/helpers/map-routes/pages.enum';

// ----------------------------------------------------------------------

export default function PageSettings() {
  return (
    <Box component='main' id={PageType.SettingsPage}>
      <Container>
        <Typography variant='h4'>Settings</Typography>
      </Container>
    </Box>
  );
}
