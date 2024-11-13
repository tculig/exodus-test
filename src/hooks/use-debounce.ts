import { useEffect, useState } from 'react';

/**
 * https://usehooks.com/useDebounce/
 */
const useDebounce = <F>(value: F, delay = 0): F => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export { useDebounce };
