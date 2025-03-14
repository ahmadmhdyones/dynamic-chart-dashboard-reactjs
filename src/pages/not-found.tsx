import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from '@/helpers/map-routes';
import MetaTags from '@/components/common/meta-tags';

// ----------------------------------------------------------------------

function PageNotFound() {
  return (
    <Box
      component='main'
      id={paths.page404.id}
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        padding: 3,
        textAlign: 'center',
      }}
    >
      <MetaTags description='Sorry, the page you are looking for does not exist.' title='404 Not Found' />

      <Typography component='div' gutterBottom variant='h1'>
        404
      </Typography>
      <Typography component='h2' gutterBottom variant='h4'>
        Page Not Found
      </Typography>
      <Typography sx={{ marginBottom: 4 }} variant='body1'>
        Sorry, the page you're looking for doesn't exist. You can return to the homepage.
      </Typography>
      <Link href='/'>
        <Button sx={{ textTransform: 'none' }} variant='contained'>
          Go to Homepage
        </Button>
      </Link>
    </Box>
  );
}

export default PageNotFound;
