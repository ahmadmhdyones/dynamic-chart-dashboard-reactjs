import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';

import { useTheme } from '@mui/material/styles';

import Logo from '@/components/ui/logo';
import { SITE } from '@/configs/site.config';
import { useAppSelector } from '@/stores/hooks';
import AppLoader from '@/components/ui/app-loader';
import { shortenStr } from '@/helpers/string.utils';
import PageLoader from '@/components/ui/page-loader';
import { configToast } from '@/configs/global.config';
import { useResponsive } from '@/hooks/use-responsive';
import { NAVIGATION } from '@/configs/navigation.config';
import { selectorsApp } from '@/stores/slices/slice-app';

// ----------------------------------------------------------------------

interface Props {
  readonly children: React.ReactNode;
}

function App({ children }: Props) {
  const theme = useTheme();
  const isMobile = useResponsive('down', 'sm');
  const isAppLoading = useAppSelector(selectorsApp.getIsAppLoading);

  return (
    <Suspense fallback={<PageLoader />}>
      <ReactRouterAppProvider
        branding={{
          logo: <Logo disabledLink />,
          title: isMobile ? shortenStr(SITE.name) : SITE.name,
        }}
        navigation={NAVIGATION}
        theme={theme} // TODO: FIX: dark/light mode isn't working in custom toolpad theme
      >
        {isAppLoading && <AppLoader />}
        {children}
      </ReactRouterAppProvider>

      <Toaster
        position={configToast.position}
        reverseOrder={configToast.reverseOrder}
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
