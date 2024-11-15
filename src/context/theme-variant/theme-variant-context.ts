import { createContext } from 'react';
import { ThemeVariantContextType } from './types';

const ThemeVariantContext = createContext<ThemeVariantContextType | undefined>(undefined);

export { ThemeVariantContext };
