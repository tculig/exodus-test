import { Fragment } from 'react';
import * as Styled from './styles';
import { Dropdown, DropdownProps } from 'tiho-component-library';
import { ReactComponent as WindowsIcon } from '../../images/windows-icon.svg';
import { ReactComponent as MacIcon } from '../../images/mac-icon.svg';
import { ReactComponent as M1Icon } from '../../images/m1-icon.svg';
import { ReactComponent as DebIcon } from '../../images/deb-icon.svg';
import { ReactComponent as LinuxIcon } from '../../images/linux-icon.svg';
import { ReactComponent as StarIcon } from '../../images/star.svg';
import { ReactComponent as AppStoreIcon } from '../../images/app-store-icon.svg';
import { ReactComponent as GooglePlayIcon } from '../../images/google-play-icon.svg';
import { ReactComponent as DesktopIcon } from '../../images/desktop.svg';
import { ReactComponent as MobileIcon } from '../../images/mobile.svg';
import { ReactComponent as PuzzleIcon } from '../../images/puzzle.svg';
import { ReactComponent as BitcoinImage } from '../../images/bitcoin.svg';

const dropdowns: DropdownProps[] = [
  {
    text: "Download Desktop",
    icon: <DesktopIcon />,
    items: [
      {
        title: "Download Windows (64-bit)",
        href: "#windows",
        icon: <WindowsIcon style={{ opacity: "0.3" }} />,
      },
      {
        title: "Download Mac (Intel)",
        href: "#mac",
        icon: <MacIcon style={{ opacity: "0.3" }} />,
      },
      {
        title: "Download Mac (Apple Silicon)",
        href: "#max-m1",
        icon: <M1Icon style={{ opacity: "0.3" }} />,
      },
      {
        title: "Download Linux (.deb)",
        href: "#linux-deb",
        icon: <DebIcon style={{ opacity: "0.3" }} />,
      },
      {
        title: "Download Linux (.zip)",
        href: "#linux-zip",
        icon: <LinuxIcon style={{ opacity: "0.3" }} />,
      }
    ],
    footer: (
      <span>
        By downloading Exodus, you agree to the{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="/terms/"
          aria-label="Terms of Use"
        >
          Terms of Use
        </a>{' '}
        and{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="/privacy/"
          aria-label="Privacy Policy"
        >
          Privacy Policy
        </a>
        .
      </span>
    )
  },
  {
    text: "Download Mobile",
    icon: <MobileIcon />,
    items: [
      {
        title: <Styled.RatingContainer>
          <StarIcon height="16px" />
          <Styled.StarRating>4.6</Styled.StarRating>
        </Styled.RatingContainer>,
        href: "#app-store",
        icon: <AppStoreIcon />,
      },
      {
        title: <Styled.RatingContainer>
          <StarIcon height="16px" />
          <Styled.StarRating>4.5</Styled.StarRating>
        </Styled.RatingContainer>,
        href: "#google-play",
        icon: <GooglePlayIcon />,
      }
    ]
  },
  {
    text: "Download Extension",
    icon: <PuzzleIcon />,
    href: "",
  },
]
interface HeaderProps {
  readonly variant?: "full" | "short";
}
const Header = ({ variant = "full" }: HeaderProps) => {
  return (
    <header>
      <Styled.Container $variant={variant}>
        {variant === "full" ? (
          <>
            <Styled.ImageContainer>
              <BitcoinImage style={{ width: "100%", height: "100%" }} />
            </Styled.ImageContainer>
            <Styled.Header1>
              Exodus Bitcoin Wallet
            </Styled.Header1>
            <Styled.Header2 >
              Send, Receive, and Swap With Exodus' Free and Secure BTC Wallet
            </Styled.Header2>
          </>
        ) : null}
        {variant === "short" ? (
          <Styled.ShortTitle>
            Get Exodus for Desktop,
            <span>&nbsp;Mobile, and Trezor</span>
            <span>&nbsp;to Send, Receive,</span>
            <span>&nbsp;and Swap Bitcoin.</span>
          </Styled.ShortTitle>
        ) : null}
        <nav aria-label="Download Options">
          <Styled.ButtonContainer>
            {dropdowns.map((dropdownData, index) => {
              return (
                <Fragment key={index}>
                  {Dropdown(dropdownData)}
                </Fragment>
              )

            })}
          </Styled.ButtonContainer>
        </nav>
      </Styled.Container>
    </header>
  )
}

export default Header