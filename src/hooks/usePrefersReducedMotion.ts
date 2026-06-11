import { useSyncExternalStore } from 'react';

const NO_REDUCED_MOTION_PREFERENCE = '(prefers-reduced-motion: no-preference)';

function canReadMotionPreference() {
  return (
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
  );
}

function subscribe(onStoreChange: () => void) {
  if (!canReadMotionPreference()) {
    return () => undefined;
  }

  const mediaQueryList = window.matchMedia(NO_REDUCED_MOTION_PREFERENCE);

  function handleChange() {
    onStoreChange();
  }

  mediaQueryList.addEventListener('change', handleChange);

  return () => {
    mediaQueryList.removeEventListener('change', handleChange);
  };
}

function getSnapshot() {
  return canReadMotionPreference()
    ? !window.matchMedia(NO_REDUCED_MOTION_PREFERENCE).matches
    : false;
}

function getServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export { usePrefersReducedMotion };
