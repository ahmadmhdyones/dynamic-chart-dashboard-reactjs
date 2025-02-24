import { Suspense } from 'react';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';

import useMediaQuery from '@mui/material/useMediaQuery';

import Logo from '@/components/ui/logo';
import { SITE } from '@/configs/site.config';
import PageLoader from '@/components/ui/page-loader';
import { getStrShortcut } from '@/utils/string-utils';
import { NAVIGATION } from '@/configs/navigation.config';

// ----------------------------------------------------------------------

interface Props {
  readonly children: React.ReactNode;
}

function App({ children }: Props) {
  const matches = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <Suspense fallback={<PageLoader />}>
      <ReactRouterAppProvider
        branding={{
          logo: <Logo disabledLink />,
          title: matches ? SITE.name : getStrShortcut(SITE.name),
        }}
        navigation={NAVIGATION}
      >
        {children}
      </ReactRouterAppProvider>
    </Suspense>
  );
}

export default App;
