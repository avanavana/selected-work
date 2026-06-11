import { useCallback, useLayoutEffect, useRef, useState } from 'react';

function useDimensions<T extends HTMLElement>() {
  const elementRef = useRef<T | null>(null);
  const [ node, setNode ] = useState<T | null>(null);
  const [ dimensions, setDimensions ] = useState<DOMRect | null>(null);

  const ref = useCallback((element: T | null) => {
    elementRef.current = element;
    setNode((currentNode) => (currentNode === element ? currentNode : element));
  }, []);

  useLayoutEffect(() => {
    if (!node) {
      setDimensions(null);
      return;
    }

    const observedNode = node;

    function updateDimensions() {
      setDimensions(observedNode.getBoundingClientRect());
    }

    updateDimensions();

    const observer = new ResizeObserver(updateDimensions);
    observer.observe(observedNode);

    return () => {
      observer.disconnect();
    };
  }, [ node ]);

  return { ref, dimensions };
}

export { useDimensions };
