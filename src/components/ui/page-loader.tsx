import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

// ----------------------------------------------------------------------

function PageLoader() {
  return (
    <Box
      sx={{
        height: '4px',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: theme => theme.zIndex.modal + 1,
      }}
    >
      <LinearProgress />
    </Box>
  );
}

export default PageLoader;
