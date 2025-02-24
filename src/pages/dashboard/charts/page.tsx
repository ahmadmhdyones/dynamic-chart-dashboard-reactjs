import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

import { paths } from '@/helpers/map-routes';
import MetaTags from '@/components/common/meta-tags';

// ----------------------------------------------------------------------

function PageCharts() {
  return (
    <PageContainer>
      <MetaTags title='Charts | DCD Reactjs' />

      <Box component='main' id={paths.dashboard.charts.root.id}>
        <Box component='section'>
          <Box alignItems='center' display='flex' justifyContent='space-between' mb={2}>
            <Typography variant='h6'>Total items: 51</Typography>

            <Button component={Link} href={paths.dashboard.charts.new.to()} startIcon={<AddIcon />} variant='contained'>
              Create New
            </Button>
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
}

export default PageCharts;
