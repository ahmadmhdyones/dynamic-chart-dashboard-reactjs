import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';

import { useTheme } from '@mui/material/styles';

import Logo from '@/components/ui/logo';
import { SITE } from '@/configs/site.config';
import PageLoader from '@/components/ui/page-loader';
import { configToast } from '@/configs/global.config';
import { useResponsive } from '@/hooks/use-responsive';
import { getStrShortcut } from '@/helpers/string.utils';
import { NAVIGATION } from '@/configs/navigation.config';

// ----------------------------------------------------------------------

interface Props {
  readonly children: React.ReactNode;
}

function App({ children }: Props) {
  const theme = useTheme();
  const isMobile = useResponsive('down', 'sm');

  return (
    <Suspense fallback={<PageLoader />}>
      <ReactRouterAppProvider
        branding={{
          logo: <Logo disabledLink />,
          title: isMobile ? getStrShortcut(SITE.name) : SITE.name,
        }}
        navigation={NAVIGATION}
        theme={theme} // TODO: FIX: dark/light mode isn't working in custom toolpad theme
      >
        {children}
      </ReactRouterAppProvider>

      <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{
          duration: configToast.duration,
          error: { style: { borderLeft: `4px solid ${theme.palette.error.main}` } },
          style: { background: theme.palette.background.paper, color: theme.palette.text.primary },
          success: { style: { borderLeft: `4px solid ${theme.palette.success.main}` } },
        }}
      />
    </Suspense>
  );
}

export default App;
