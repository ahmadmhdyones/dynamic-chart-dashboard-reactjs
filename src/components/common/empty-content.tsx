import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { SxProps } from '@mui/material/styles';
import { InboxOutlined } from '@mui/icons-material';

// ----------------------------------------------------------------------

type EmptyContentProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  sx?: SxProps;
};

export default function EmptyContent({
  description = 'No data available at the moment',
  icon = <InboxOutlined sx={{ color: 'text.secondary', fontSize: 60 }} />,
  sx,
  title = 'No Data',
}: EmptyContentProps) {
  return (
    <Box sx={{ p: 3, textAlign: 'center', ...sx }}>
      {icon && <Box sx={{ mb: 2 }}>{icon}</Box>}

      <Typography color='text.secondary' gutterBottom variant='h6'>
        {title}
      </Typography>

      {description && (
        <Typography color='text.secondary' variant='body2'>
          {description}
        </Typography>
      )}
    </Box>
  );
}
