import { useEffect, useRef } from 'react';

function useClickOutside<T extends HTMLElement>(callback: () => void) {
    const ref = useRef<T>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // Check if the click is outside the referenced element
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }

        // Attach the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [callback]);

    return ref;
}

export default useClickOutside;
