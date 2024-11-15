import { ThemeVariant } from 'tiho-component-library';

interface ThemeVariantContextType {
    readonly themeVariant: ThemeVariant;
    readonly toggleTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export type { ThemeVariant, ThemeVariantContextType };
