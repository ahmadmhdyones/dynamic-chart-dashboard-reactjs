import React from 'react';
import { Link } from 'react-router';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

// ----------------------------------------------------------------------

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  iconColor: string;
  iconBgColor: string;
  buttonText: string;
  buttonIcon: React.ReactNode;
  buttonLink: string;
  isLoading?: boolean;
}

function StatsCard({
  buttonIcon,
  buttonLink,
  buttonText,
  icon,
  iconBgColor,
  iconColor,
  isLoading = false,
  title,
  value,
}: StatsCardProps) {
  return (
    <Card>
      <CardContent>
        <Stack alignItems='center' direction='row' justifyContent='space-between'>
          <Box>
            <Typography color='text.secondary' variant='overline'>
              {title}
            </Typography>
            <Typography variant='h4'>{isLoading ? '...' : value}</Typography>
          </Box>
          <Box
            sx={{
              bgcolor: iconBgColor,
              borderRadius: '50%',
              color: iconColor,
              p: 1.5,
            }}
          >
            {icon}
          </Box>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Button component={Link} endIcon={buttonIcon} size='small' to={buttonLink}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}

export default StatsCard;
