const getLocalStorage = <T = unknown>(key: string): T | null => {
    if (!key) return null;

    try {
        const sessionString = window.localStorage.getItem(key);
        return sessionString ? (JSON.parse(sessionString) as T) : null;
    } catch (error: unknown) {
        return null;
    }
};

const setLocalStorage = (key: string, data: unknown): void => {
    if (typeof data === 'string') {
        window.localStorage.setItem(key, data);
    } else {
        window.localStorage.setItem(key, JSON.stringify(data));
    }
};

const removeLocalStorageItem = (key: string): void => {
    window.localStorage.removeItem(key);
};

export { getLocalStorage, setLocalStorage, removeLocalStorageItem };
