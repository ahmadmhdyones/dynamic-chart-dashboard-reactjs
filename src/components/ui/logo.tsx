import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import type { BoxProps } from '@mui/material/Box';

import { paths } from '@/helpers/map-routes';

// ----------------------------------------------------------------------

export interface Props extends BoxProps {
  size?: number;
  disabledLink?: boolean;
}

function Logo({ disabledLink = false, ref, size = 36, sx, ...other }: Props) {
  const logo = (
    <Box
      component='img'
      ref={ref}
      src='/logo/logo-dark.svg'
      sx={{ cursor: 'pointer', height: size, width: size, ...sx }}
      {...other}
    />
  );

  if (disabledLink) return logo;

  return (
    <Link href={paths.root.to()} sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
}

export default Logo;
