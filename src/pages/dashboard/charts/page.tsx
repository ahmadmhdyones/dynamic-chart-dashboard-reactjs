import { Link } from 'react-router';
import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

import { paths } from '@/helpers/map-routes';
import MetaTags from '@/components/common/meta-tags';

// ----------------------------------------------------------------------

function PageCharts() {
  return (
    <PageContainer>
      <MetaTags title='Charts | DCDR' />

      <Box component='main' id={paths.dashboard.charts.root.id}>
        {/* TODO: move to a component */}
        <Box component='section'>
          <Box alignItems='center' display='flex' justifyContent='space-between' mb={2}>
            <Typography variant='h6'>Total items: 51</Typography>

            <Button component={Link} sx={{ gap: 1 }} to={paths.dashboard.charts.new.to()} variant='contained'>
              <AddIcon />
              <Typography variant='button'>Create New</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
}

export default PageCharts;
