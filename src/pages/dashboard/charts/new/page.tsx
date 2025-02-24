import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MetaTags from '@/components/common/meta-tags';
import { PageType } from '@/helpers/map-routes/pages.enum';

// ----------------------------------------------------------------------

export default function PageChartsNew() {
  return (
    <>
      <MetaTags title='Create New Chart | DCD Reactjs' />
      <Box component='main' id={PageType.ChartsNewPage}>
        <Container>
          <Typography variant='h4'>Charts New</Typography>
        </Container>
      </Box>
    </>
  );
}
