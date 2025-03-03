import { useEffect } from 'react';

// ----------------------------------------------------------------------

export function useScrollToTop(deps: React.DependencyList = []) {
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return null;
}
