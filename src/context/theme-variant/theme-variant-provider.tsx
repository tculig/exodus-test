import { useCallback, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';

import { ThemeVariantContext } from './theme-variant-context';
import { getLocalStorage, setLocalStorage } from '../../utils';
import { ThemeVariant } from './types';

const ThemeVariantProvider: FC<PropsWithChildren> = ({ children }) => {
    const [themeVariant, setThemeVariant] = useState(getLocalStorage<ThemeVariant>('tihoExodusthemeVariant') ?? "dark");

    const toggleTheme = useCallback(() => {
        setThemeVariant(old => {
            const newVersion = old === "dark" ? "light" : "dark";
            setLocalStorage('tihoExodusthemeVariant', newVersion);
            return newVersion;
        });
    }, [])

    return <ThemeVariantContext.Provider value={{ themeVariant, toggleTheme }}>{children}</ThemeVariantContext.Provider>;
};

export { ThemeVariantProvider };
