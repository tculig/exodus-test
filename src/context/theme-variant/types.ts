import { ThemeVariant } from 'tiho-component-library';

interface ThemeVariantContextType {
    readonly themeVariant: ThemeVariant;
    readonly toggleTheme: React.Dispatch<React.SetStateAction<ThemeVariant>>;
}

export type { ThemeVariant, ThemeVariantContextType };
