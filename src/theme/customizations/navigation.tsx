import { alpha } from '@mui/material/styles';
import { dividerClasses } from '@mui/material/Divider';
import { menuItemClasses } from '@mui/material/MenuItem';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import type { Theme, Components } from '@mui/material/styles';

import { gray, brand } from '../theme-primitives';

// ----------------------------------------------------------------------

export const navigationCustomizations: Components<Theme> = {
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
      }),
    },
  },
  MuiLink: {
    defaultProps: {
      underline: 'none',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '&::before': {
          backgroundColor: theme.palette.text.secondary,
          bottom: 0,
          content: '""',
          height: '1px',
          left: 0,
          opacity: 0.3,
          position: 'absolute',
          transition: 'width 0.3s ease, opacity 0.3s ease',
          width: '100%',
        },
        '&:focus-visible': {
          borderRadius: '2px',
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: '4px',
        },
        '&:hover::before': {
          width: 0,
        },
        'color': theme.palette.text.primary,
        'fontWeight': 500,
        'position': 'relative',
        'textDecoration': 'none',
        'width': 'fit-content',
      }),
    },
  },
  MuiMenu: {
    styleOverrides: {
      list: {
        [`&.${dividerClasses.root}`]: {
          margin: '0 -8px',
        },
        gap: '0px',
      },
      paper: ({ theme }) => ({
        [`& .${buttonBaseClasses.root}`]: {
          '&.Mui-selected': {
            backgroundColor: alpha(theme.palette.action.selected, 0.3),
          },
        },
        background: 'hsl(0, 0%, 100%)',
        backgroundImage: 'none',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        boxShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
        marginTop: '4px',
        ...theme.applyStyles('dark', {
          background: gray[900],
          boxShadow: 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
        }),
      }),
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        [`&.${menuItemClasses.focusVisible}`]: {
          backgroundColor: 'transparent',
        },
        [`&.${menuItemClasses.selected}`]: {
          [`&.${menuItemClasses.focusVisible}`]: {
            backgroundColor: alpha(theme.palette.action.selected, 0.3),
          },
        },
        borderRadius: theme.shape.borderRadius,
        padding: '6px 8px',
      }),
    },
  },
};
