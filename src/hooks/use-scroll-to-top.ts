import { useEffect } from 'react';

// ----------------------------------------------------------------------

export function useScrollToTop(deps: React.DependencyList = []) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, deps);

  return null;
}
