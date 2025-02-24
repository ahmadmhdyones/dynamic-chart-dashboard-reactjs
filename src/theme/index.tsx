import CssBaseline from '@mui/material/CssBaseline';
import type { PaletteMode } from '@mui/material/styles';
import { createTheme, useColorScheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { typography } from './typography';
import { getDesignTokens } from './theme-primitives';
import { inputsCustomizations, navigationCustomizations } from './customizations';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { mode } = useColorScheme();

  const theme = createTheme({
    ...getDesignTokens(mode as PaletteMode),
    components: {
      ...inputsCustomizations,
      ...navigationCustomizations,
    },
    typography,
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
