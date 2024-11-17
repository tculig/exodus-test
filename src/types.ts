export interface NavItem {
    title: string;
    description: string;
    href: string;
    iconOffset: number;
    iconBgGradient: string;
    iconBoxShadowColor: string;
    target?: string;
}
export type NavItems = Record<string, Record<string, NavItem[]>>;
