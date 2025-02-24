import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
import Grow from '@mui/material/Grow';
import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import Logo from '@/components/ui/logo';
import { SITE } from '@/configs/site.config';
import { getStrShortcut } from '@/utils/string-utils';

// ----------------------------------------------------------------------

export default function AppLoader() {
  return (
    <Fade in timeout={800}>
      <Box
        sx={{
          alignItems: 'center',
          bgcolor: theme => alpha(theme.palette.background.default, 0.9),
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
        }}
      >
        <Stack alignItems='center' spacing={2}>
          <Zoom in timeout={1000}>
            <Logo disabledLink size={64} />
          </Zoom>

          <Slide direction='up' in timeout={1200}>
            <Typography component='div' variant='h6'>
              {getStrShortcut(SITE.name)}
            </Typography>
          </Slide>

          <Grow in timeout={1400}>
            <CircularProgress size={40} thickness={4} />
          </Grow>
        </Stack>
      </Box>
    </Fade>
  );
}
