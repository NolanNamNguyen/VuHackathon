import { useCallback } from 'react';
import { debounce } from 'lodash';

const useDebounce = (invokeFunction, delay = 500) => {
  useCallback(
    debounce((funcParam) => invokeFunction(funcParam), delay),
    [],
  );
};

export default useDebounce;
