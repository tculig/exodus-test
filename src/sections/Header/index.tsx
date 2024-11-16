import { Fragment } from 'react';
import * as Styled from './styles';
import { Dropdown, DropdownProps } from 'tiho-component-library';
import WindowsIcon from '../../images/windows-icon.svg';
import MacIcon from '../../images/mac-icon.svg';
import M1Icon from '../../images/m1-icon.svg';
import DebIcon from '../../images/deb-icon.svg';
import LinuxIcon from '../../images/linux-icon.svg';
import StarIcon from '../../images/star.svg';
import AppStoreIcon from '../../images/app-store-icon.svg';
import GooglePlayIcon from '../../images/google-play-icon.svg';
import DesktopIcon from '../../images/desktop.svg';
import MobileIcon from '../../images/mobile.svg';
import PuzzleIcon from '../../images/puzzle.svg';

const dropdowns: DropdownProps[] = [
  {
    text: "Download Desktop",
    icon: <DesktopIcon />,
    items: [
      {
        title: "Download Windows (64-bit)",
        href: "#windows",
        icon: <WindowsIcon width="24px" height="24px" style={{ opacity: "0.3" }} />,
      },
      {
        title: "Download Mac (Intel)",
        href: "#mac",
        icon: <MacIcon width="24px" height="24px" style={{ opacity: "0.3" }} />,
      },
      {
        title: "Download Mac (Apple Silicon)",
        href: "#max-m1",
        icon: <M1Icon width="24px" height="24px" style={{ opacity: "0.3" }} />,
      },
      {
        title: "Download Linux (.deb)",
        href: "#linux-deb",
        icon: <DebIcon width="24px" height="24px" style={{ opacity: "0.3" }} />,
      },
      {
        title: "Download Linux (.zip)",
        href: "#linux-zip",
        icon: <LinuxIcon width="24px" height="24px" style={{ opacity: "0.3" }} />,
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
        icon: <AppStoreIcon height="24px" />,
      },
      {
        title: <Styled.RatingContainer>
          <StarIcon height="16px" />
          <Styled.StarRating>4.5</Styled.StarRating>
        </Styled.RatingContainer>,
        href: "#google-play",
        icon: <GooglePlayIcon height="24px" />,
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
  data: {
    bitcoinSvg: {
      url: string
    }
  },
  variant?: "full" | "short";
}
const Header = ({ data, variant = "full" }: HeaderProps) => {
  return (
    <header>
      <Styled.Container $variant={variant}>
        {variant === "full" ? (
          <>
            <img
              src={data.bitcoinSvg.url}
              alt="Bitcoin (BTC)"
              loading="eager"
              width="80px"
              height="80px"
            />
            <Styled.Header1 className="break-sm">
              Exodus Bitcoin Wallet
            </Styled.Header1>
            <Styled.Header2 className="x-break-sm">
              Send, Receive, and Swap With Exodus' Free and Secure BTC Wallet
            </Styled.Header2>
          </>
        ) : null}
        {variant === "short" ? (
          <Styled.ShortTitle>
            Get Exodus for Desktop,
            <span className="x-break-sm">&nbsp;Mobile, and Trezor</span>
            <span className="x-break-sm">&nbsp;to Send, Receive,</span>
            <span className="x-break-sm">&nbsp;and Swap Bitcoin.</span>
          </Styled.ShortTitle>
        ) : null}
        <nav aria-label="Download Options">
          <Styled.ButtonContainer className="break-sm">
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