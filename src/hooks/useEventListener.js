import { useRef, useEffect } from 'react';

const useEventListener = (eventName, handler, element) => {
  const saveHandler = useRef();

  useEffect(() => {
    saveHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;
    const eventListner = (event) => saveHandler.current(event);
    element.addEventListener(eventName, eventListner);
    return () => {
      element.removeEventListener(eventName, eventListner);
    };
  }, [eventName, element]);
};

export default useEventListener;
