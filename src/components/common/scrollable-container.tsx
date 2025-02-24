import Box from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';

// ----------------------------------------------------------------------

interface Props {
  children: React.ReactNode;
  height?: string | number;
  sx?: SxProps<Theme>;
}

function ScrollableContainer({ children, height = '400px', sx = {} }: Props) {
  return (
    <Box
      sx={{
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.3)',
          },
          'backgroundColor': 'rgba(0,0,0,0.2)',
          'borderRadius': '8px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'rgba(0,0,0,0.05)',
          borderRadius: '8px',
        },
        height,
        'overflow': 'auto',
        'pr': 1,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default ScrollableContainer;
