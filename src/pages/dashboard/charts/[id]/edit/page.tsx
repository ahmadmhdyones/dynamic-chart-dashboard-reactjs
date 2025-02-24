import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MetaTags from '@/components/common/meta-tags';
import { PageType } from '@/helpers/map-routes/pages.enum';

// ----------------------------------------------------------------------

export default function PageChartsEdit() {
  return (
    <>
      <MetaTags title={`Charts Edit ${'chart_id'} | DCD Reactjs`} />
      <Box component='main' id={PageType.ChartsEditPage}>
        <Container>
          <Typography variant='h4'>Charts Edit</Typography>
        </Container>
      </Box>
    </>
  );
}
