import { Suspense } from 'react';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';

import Logo from '@/components/ui/logo';
import { SITE } from '@/configs/site.config';
import PageLoader from '@/components/ui/page-loader';
import { getStrShortcut } from '@/utils/string-utils';
import { useResponsive } from '@/hooks/use-responsive';
import { NAVIGATION } from '@/configs/navigation.config';

// ----------------------------------------------------------------------

interface Props {
  readonly children: React.ReactNode;
}

function App({ children }: Props) {
  const isMobile = useResponsive('down', 'sm');

  return (
    <Suspense fallback={<PageLoader />}>
      <ReactRouterAppProvider
        branding={{
          logo: <Logo disabledLink />,
          title: isMobile ? getStrShortcut(SITE.name) : SITE.name,
        }}
        navigation={NAVIGATION}
      >
        {children}
      </ReactRouterAppProvider>
    </Suspense>
  );
}

export default App;
