import { ThemeVariantContext } from '../context/theme-variant';
import { ThemeVariantContextType } from '../context/theme-variant/types';
import { useContext } from 'react';

const useThemeVariant = (): ThemeVariantContextType => {
    const context = useContext(ThemeVariantContext);

    if (context === undefined) {
        throw new Error('useThemeVariant must be used within a ThemeVariantProvider');
    }

    return context;
};

export { useThemeVariant };
