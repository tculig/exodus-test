import { useI18next } from 'gatsby-plugin-react-i18next';
import { useEffect, useState } from 'react';
import { NavItems } from 'types';

const getNavTranslations = (language: string): NavItems | undefined => {
    switch (language) {
        case 'en':
            return {
                Products: {
                    '': [
                        {
                            title: 'Web3 Wallet',
                            description: 'Explore the world of Web3 and DeFi',
                            href: '/',
                            iconOffset: -900,
                            iconBgGradient: 'linear-gradient(315deg,#2246ec,#4566ed)',
                            iconBoxShadowColor: '#4566ed4d',
                        },
                        {
                            title: 'Mobile Wallet',
                            description: 'Control your wealth anywhere',
                            href: '/',
                            iconOffset: -250,
                            iconBgGradient: 'linear-gradient(315deg,#602a52,#c27ed5)',
                            iconBoxShadowColor: '#83488040',
                        },
                        {
                            title: 'Desktop Wallet',
                            description: 'Swap and transfer digital assets',
                            href: '/',
                            iconOffset: -50,
                            iconBgGradient: 'linear-gradient(315deg,#420be6,#a16bb3)',
                            iconBoxShadowColor: '#6f39cd4d',
                        },
                        {
                            title: 'Trezor Hardware Wallet',
                            description: 'Advanced security made easy',
                            href: '/',
                            iconOffset: 0,
                            iconBgGradient: 'linear-gradient(144deg,#11aae2,#016197)',
                            iconBoxShadowColor: '#83488040',
                        },
                        {
                            title: 'Earn Crypto Rewards',
                            description: 'Manage staking rewards for multiple assets',
                            href: '/',
                            iconOffset: -1100,
                            iconBgGradient: 'linear-gradient(315deg,#556ff2,#00bfff)',
                            iconBoxShadowColor: '#556ff24d',
                        },
                    ],
                    ENTERPRISE: [
                        {
                            title: 'XO Swap',
                            description: 'Boost growth with a premium crypto swap engine',
                            href: '/',
                            iconOffset: 0,
                            iconBgGradient: 'linear-gradient(315deg,#420be6,#a16bb3)',
                            iconBoxShadowColor: '#6f39cd4d',
                        },
                        {
                            title: 'Passkeys Wallet & SDK',
                            description: 'Reduce drop-off with one-click web3 onboarding',
                            href: '/',
                            iconOffset: -1150,
                            iconBgGradient: 'linear-gradient(315deg,#d4377f,#ff95b3)',
                            iconBoxShadowColor: '#d4377f40',
                        },
                        {
                            title: 'Wallet-as-a-Service (WaaS)',
                            description: 'Grow your platform with a custom web3 wallet',
                            href: '/',
                            iconOffset: -1250,
                            iconBgGradient: 'linear-gradient(232deg,#ff9d56,#f163a4)',
                            iconBoxShadowColor: '#df1efe40',
                        },
                    ],
                },
                Support: {
                    '': [
                        {
                            title: '24/7 Customer Support',
                            description: 'Support engineers are standing by to help',
                            href: '/',
                            iconOffset: -350,
                            iconBgGradient: 'linear-gradient(315deg,#420be6,#a16bb3)',
                            iconBoxShadowColor: '#6f39cd4d',
                        },
                        {
                            title: 'Crypto Assets',
                            description: 'Info on supported assets, crypto rewards, and more',
                            href: '/',
                            target: '_blank',
                            iconOffset: -400,
                            iconBgGradient: 'linear-gradient(315deg,#602a52,#c27ed5)',
                            iconBoxShadowColor: '#83488040',
                        },
                    ],
                },
                Learn: {
                    '': [
                        {
                            title: 'Knowledge Base',
                            description: 'Common questions and blockchain education',
                            href: '/',
                            iconOffset: -1300,
                            iconBgGradient: 'linear-gradient(135deg,#58d98c,#599270)',
                            iconBoxShadowColor: '#58d98c4d',
                        },
                        {
                            title: 'YouTube',
                            description: 'Crypto education and tutorials',
                            href: '/',
                            iconOffset: -450,
                            iconBgGradient: 'linear-gradient(315deg,#556ff2,#00bfff)',
                            iconBoxShadowColor: '#556ff24d',
                        },
                        {
                            title: 'Newsletter',
                            description: 'Sign-up for product updates and crypto highlights',
                            href: '/',
                            iconOffset: -750,
                            iconBgGradient: 'linear-gradient(315deg, #1a1d40, #6859b3)',
                            iconBoxShadowColor: '#6859b340',
                        },
                    ],
                },
                Company: {
                    '': [
                        {
                            title: 'About Us',
                            description: 'Learn more about Exodus',
                            href: '/',
                            iconOffset: -300,
                            iconBgGradient: 'linear-gradient(315deg,#420be6,#a16bb3)',
                            iconBoxShadowColor: '#6f39cd4d',
                        },
                        {
                            title: 'Investors',
                            description: 'Read about news, media, events and more',
                            href: '/',
                            iconOffset: -850,
                            iconBgGradient: 'linear-gradient(315deg,#1a1d40,#6859b3)',
                            iconBoxShadowColor: '#6859b340',
                        },
                        {
                            title: 'Careers',
                            description: 'See our open positions',
                            href: '/',
                            iconOffset: -150,
                            iconBgGradient: 'linear-gradient(315deg,#2246ec,#4566ed)',
                            iconBoxShadowColor: '#4566ed4d',
                        },
                        {
                            title: 'Contact Us',
                            description: 'Get in touch',
                            href: '/',
                            iconOffset: -200,
                            iconBgGradient: 'linear-gradient(315deg,#556ff2,#00bfff)',
                            iconBoxShadowColor: '#556ff24d',
                        },
                        {
                            title: 'Brand Guidelines',
                            description: 'Exodus media kit',
                            href: '/',
                            iconOffset: -550,
                            iconBgGradient: 'linear-gradient(144deg,#11aae2,#016197)',
                            iconBoxShadowColor: '#077eb54d',
                        },
                        {
                            title: 'Security',
                            description: 'How we keep your crypto safe',
                            href: '/',
                            iconOffset: -1000,
                            iconBgGradient: 'linear-gradient(150deg,#67d1a5,#489998)',
                            iconBoxShadowColor: '#67d1a54d',
                        },
                        {
                            title: 'Intellectual Property',
                            description: 'Exodus Trademarks',
                            href: '/',
                            iconOffset: -1050,
                            iconBgGradient: 'linear-gradient(150deg,#9887ff,#3c6ce8)',
                            iconBoxShadowColor: '#9887ff4d',
                        },
                    ],
                },
            };
        case 'es':
            return {
                Productos: {
                    '': [
                        {
                            title: 'Billetera Web3',
                            description: 'Explora el mundo de Web3 y DeFi',
                            href: '/',
                            iconOffset: -900,
                            iconBgGradient: 'linear-gradient(315deg,#2246ec,#4566ed)',
                            iconBoxShadowColor: '#4566ed4d',
                        },
                        {
                            title: 'Billetera Móvil',
                            description: 'Controla tu riqueza desde cualquier lugar',
                            href: '/',
                            iconOffset: -250,
                            iconBgGradient: 'linear-gradient(315deg,#602a52,#c27ed5)',
                            iconBoxShadowColor: '#83488040',
                        },
                        {
                            title: 'Billetera de Escritorio',
                            description: 'Intercambia y transfiere activos digitales',
                            href: '/',
                            iconOffset: -50,
                            iconBgGradient: 'linear-gradient(315deg,#420be6,#a16bb3)',
                            iconBoxShadowColor: '#6f39cd4d',
                        },
                        {
                            title: 'Billetera de Hardware Trezor',
                            description: 'Seguridad avanzada hecha fácil',
                            href: '/',
                            iconOffset: 0,
                            iconBgGradient: 'linear-gradient(144deg,#11aae2,#016197)',
                            iconBoxShadowColor: '#83488040',
                        },
                        {
                            title: 'Gana Recompensas Cripto',
                            description: 'Administra recompensas de staking para múltiples activos',
                            href: '/',
                            iconOffset: -1100,
                            iconBgGradient: 'linear-gradient(315deg,#556ff2,#00bfff)',
                            iconBoxShadowColor: '#556ff24d',
                        },
                    ],
                    EMPRESA: [
                        {
                            title: 'XO Swap',
                            description: 'Impulsa el crecimiento con un motor de intercambio cripto premium',
                            href: '/',
                            iconOffset: 0,
                            iconBgGradient: 'linear-gradient(315deg,#420be6,#a16bb3)',
                            iconBoxShadowColor: '#6f39cd4d',
                        },
                        {
                            title: 'Billetera Passkeys & SDK',
                            description: 'Reduce la deserción con incorporación a Web3 de un clic',
                            href: '/',
                            iconOffset: -1150,
                            iconBgGradient: 'linear-gradient(315deg,#d4377f,#ff95b3)',
                            iconBoxShadowColor: '#d4377f40',
                        },
                        {
                            title: 'Billetera como Servicio (WaaS)',
                            description: 'Haz crecer tu plataforma con una billetera Web3 personalizada',
                            href: '/',
                            iconOffset: -1250,
                            iconBgGradient: 'linear-gradient(232deg,#ff9d56,#f163a4)',
                            iconBoxShadowColor: '#df1efe40',
                        },
                    ],
                },
                Apoyo: {
                    '': [
                        {
                            title: 'Soporte al Cliente 24/7',
                            description: 'Los ingenieros de soporte están listos para ayudar',
                            href: '/',
                            iconOffset: -350,
                            iconBgGradient: 'linear-gradient(315deg,#420be6,#a16bb3)',
                            iconBoxShadowColor: '#6f39cd4d',
                        },
                        {
                            title: 'Activos Cripto',
                            description: 'Información sobre activos soportados, recompensas cripto y más',
                            href: '/',
                            target: '_blank',
                            iconOffset: -400,
                            iconBgGradient: 'linear-gradient(315deg,#602a52,#c27ed5)',
                            iconBoxShadowColor: '#83488040',
                        },
                    ],
                },
                Aprender: {
                    '': [
                        {
                            title: 'Base de Conocimientos',
                            description: 'Preguntas comunes y educación sobre blockchain',
                            href: '/',
                            iconOffset: -1300,
                            iconBgGradient: 'linear-gradient(135deg,#58d98c,#599270)',
                            iconBoxShadowColor: '#58d98c4d',
                        },
                        {
                            title: 'YouTube',
                            description: 'Educación y tutoriales sobre cripto',
                            href: '/',
                            iconOffset: -450,
                            iconBgGradient: 'linear-gradient(315deg,#556ff2,#00bfff)',
                            iconBoxShadowColor: '#556ff24d',
                        },
                        {
                            title: 'Boletín Informativo',
                            description: 'Suscríbete para actualizaciones de productos y destacados cripto',
                            href: '/',
                            iconOffset: -750,
                            iconBgGradient: 'linear-gradient(315deg,#1a1d40,#6859b3)',
                            iconBoxShadowColor: '#6859b340',
                        },
                    ],
                },
                Compañía: {
                    '': [
                        {
                            title: 'Sobre Nosotros',
                            description: 'Aprende más sobre Exodus',
                            href: '/',
                            iconOffset: -300,
                            iconBgGradient: 'linear-gradient(315deg,#420be6,#a16bb3)',
                            iconBoxShadowColor: '#6f39cd4d',
                        },
                        {
                            title: 'Inversores',
                            description: 'Lee sobre noticias, medios, eventos y más',
                            href: '/',
                            iconOffset: -850,
                            iconBgGradient: 'linear-gradient(315deg,#1a1d40,#6859b3)',
                            iconBoxShadowColor: '#6859b340',
                        },
                        {
                            title: 'Carreras',
                            description: 'Ver nuestras posiciones abiertas',
                            href: '/',
                            iconOffset: -150,
                            iconBgGradient: 'linear-gradient(315deg,#2246ec,#4566ed)',
                            iconBoxShadowColor: '#4566ed4d',
                        },
                        {
                            title: 'Contáctanos',
                            description: 'Ponte en contacto',
                            href: '/',
                            iconOffset: -200,
                            iconBgGradient: 'linear-gradient(315deg,#556ff2,#00bfff)',
                            iconBoxShadowColor: '#556ff24d',
                        },
                        {
                            title: 'Guías de Marca',
                            description: 'Kit de medios de Exodus',
                            href: '/',
                            iconOffset: -550,
                            iconBgGradient: 'linear-gradient(144deg,#11aae2,#016197)',
                            iconBoxShadowColor: '#077eb54d',
                        },
                        {
                            title: 'Seguridad',
                            description: 'Cómo mantenemos tu cripto seguro',
                            href: '/',
                            iconOffset: -1000,
                            iconBgGradient: 'linear-gradient(150deg,#67d1a5,#489998)',
                            iconBoxShadowColor: '#67d1a54d',
                        },
                        {
                            title: 'Propiedad Intelectual',
                            description: 'Marcas registradas de Exodus',
                            href: '/',
                            iconOffset: -1050,
                            iconBgGradient: 'linear-gradient(150deg,#9887ff,#3c6ce8)',
                            iconBoxShadowColor: '#9887ff4d',
                        },
                    ],
                },
            };
        default:
            return undefined;
    }
};
export const useNavItems = () => {
    const { language } = useI18next();
    const [navItems, setNavItems] = useState<NavItems | undefined>(getNavTranslations(language));

    useEffect(() => {
        switch (language) {
            case 'en':
                setNavItems(getNavTranslations(language));
                break;
            case 'es':
                setNavItems(getNavTranslations(language));
                break;
            default:
                setNavItems(undefined);
        }
    }, [language]);

    return navItems;
};
