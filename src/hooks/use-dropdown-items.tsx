import { useI18next } from 'gatsby-plugin-react-i18next';
import { useEffect, useState } from 'react';
import { DropdownProps } from 'tiho-component-library';
import { ReactComponent as WindowsIcon } from '../images/windows-icon.svg';
import { ReactComponent as MacIcon } from '../images/mac-icon.svg';
import { ReactComponent as M1Icon } from '../images/m1-icon.svg';
import { ReactComponent as DebIcon } from '../images/deb-icon.svg';
import { ReactComponent as LinuxIcon } from '../images/linux-icon.svg';
import { ReactComponent as StarIcon } from '../images/star.svg';
import { ReactComponent as AppStoreIcon } from '../images/app-store-icon.svg';
import { ReactComponent as GooglePlayIcon } from '../images/google-play-icon.svg';
import { ReactComponent as DesktopIcon } from '../images/desktop.svg';
import { ReactComponent as MobileIcon } from '../images/mobile.svg';
import { ReactComponent as PuzzleIcon } from '../images/puzzle.svg';
import styled from 'styled-components';

const RatingContainer = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const StarRating = styled.span`
    color: ${({ theme }) => theme.colors.text.emphasis};
    display: block;
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    padding-left: 4px;
`;

const getDropdownTranslactions = (language: String): DropdownProps[] | undefined => {
    switch (language) {
        case 'en':
            return ([{
                text: 'Download Desktop',
                icon: <DesktopIcon />,
                items: [
                    {
                        title: 'Download Windows (64-bit)',
                        href: '#windows',
                        icon: <WindowsIcon style={{ opacity: '0.3' }} />,
                    },
                    {
                        title: 'Download Mac (Intel)',
                        href: '#mac',
                        icon: <MacIcon style={{ opacity: '0.3' }} />,
                    },
                    {
                        title: 'Download Mac (Apple Silicon)',
                        href: '#max-m1',
                        icon: <M1Icon style={{ opacity: '0.3' }} />,
                    },
                    {
                        title: 'Download Linux (.deb)',
                        href: '#linux-deb',
                        icon: <DebIcon style={{ opacity: '0.3' }} />,
                    },
                    {
                        title: 'Download Linux (.zip)',
                        href: '#linux-zip',
                        icon: <LinuxIcon style={{ opacity: '0.3' }} />,
                    },
                ],
                footer: (
                    <span>
                        By downloading Exodus, you agree to the{' '}
                        <a target="_blank" rel="noreferrer noopener" href="/terms/" aria-label="Terms of Use">
                            Terms of Use
                        </a>{' '}
                        and{' '}
                        <a target="_blank" rel="noreferrer noopener" href="/privacy/" aria-label="Privacy Policy">
                            Privacy Policy
                        </a>
                        .
                    </span>
                ),
            },
            {
                text: 'Download Mobile',
                icon: <MobileIcon />,
                items: [
                    {
                        title: (
                            <RatingContainer>
                                <StarIcon height="16px" />
                                <StarRating>4.6</StarRating>
                            </RatingContainer>
                        ),
                        href: '#app-store',
                        icon: <AppStoreIcon />,
                        ariaLabel: "App Store link"
                    },
                    {
                        title: (
                            <RatingContainer>
                                <StarIcon height="16px" />
                                <StarRating>4.5</StarRating>
                            </RatingContainer>
                        ),
                        href: '#google-play',
                        icon: <GooglePlayIcon />,
                        ariaLabel: "Google Play link"
                    },
                ],
            },
            {
                text: 'Download Extension',
                icon: <PuzzleIcon />,
                href: '',
            },
            ]);
        case 'es':
            return ([{
                text: 'Descargar escritorio',
                icon: <DesktopIcon />,
                items: [
                    {
                        title: 'Descargar Windows (64 bits)',
                        href: '#windows',
                        icon: <WindowsIcon style={{ opacity: '0.3' }} />,
                    },
                    {
                        title: 'Descargar Mac (Intel)',
                        href: '#mac',
                        icon: <MacIcon style={{ opacity: '0.3' }} />,
                    },
                    {
                        title: 'Descargar Mac (Apple Silicon)',
                        href: '#max-m1',
                        icon: <M1Icon style={{ opacity: '0.3' }} />,
                    },
                    {
                        title: 'Descargar Linux (.deb)',
                        href: '#linux-deb',
                        icon: <DebIcon style={{ opacity: '0.3' }} />,
                    },
                    {
                        title: 'Descargar Linux (.zip)',
                        href: '#linux-zip',
                        icon: <LinuxIcon style={{ opacity: '0.3' }} />,
                    },
                ],
                footer: (
                    <span>
                        Al descargar Exodus, aceptas las{' '}
                        <a target="_blank" rel="noreferrer noopener" href="/terms/" aria-label="Condiciones de uso">
                            Condiciones de uso
                        </a>{' '}
                        y{' '}
                        <a target="_blank" rel="noreferrer noopener" href="/privacy/" aria-label="política de privacidad">
                            política de privacidad
                        </a>
                        .
                    </span>
                ),
            },
            {
                text: 'Descargar Móvil',
                icon: <MobileIcon />,
                items: [
                    {
                        title: (
                            <RatingContainer>
                                <StarIcon height="16px" />
                                <StarRating>4.6</StarRating>
                            </RatingContainer>
                        ),
                        href: '#app-store',
                        icon: <AppStoreIcon />,
                        ariaLabel: "App Store link"
                    },
                    {
                        title: (
                            <RatingContainer>
                                <StarIcon height="16px" />
                                <StarRating>4.5</StarRating>
                            </RatingContainer>
                        ),
                        href: '#google-play',
                        icon: <GooglePlayIcon />,
                        ariaLabel: "Google Play link"
                    },
                ],
            },
            {
                text: 'Descargar extensión',
                icon: <PuzzleIcon />,
                href: '',
            },
            ]);
        default:
            return undefined;
    }
}
export const useDropdownItems = () => {
    const { language } = useI18next();
    const [dropdownItems, setDropdownItems] = useState<DropdownProps[] | undefined>(getDropdownTranslactions(language));


    useEffect(() => {
        setDropdownItems(getDropdownTranslactions(language))
    }, [language]);

    return dropdownItems;
};
