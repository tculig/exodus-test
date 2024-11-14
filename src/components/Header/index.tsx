import React, { Fragment, useState } from 'react';
import * as Styled from './styles';
import useClickOutside from '../../hooks/use-click-outside';

const DropdownToggle = ({ svgSrc, text, items, footer, href }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  return (
    <Styled.Dropdown
      show={true}
      $isOpen={isOpen}
      ref={ref}
    >
      <Styled.DropdownToggle onClick={() => setIsOpen((oldIsOpen) => !oldIsOpen)}>
        <Styled.ToggleIconContainer>
          <img
            src={svgSrc}
            alt={text}
            loading="eager"
            width="24px"
            height="24px"
          />
        </Styled.ToggleIconContainer>
        <Styled.ToggleLabel>{text}</Styled.ToggleLabel>
        <Styled.CarretContainer>
          {items ? (
            <Styled.Caret $isOpen={isOpen} />
          ) : null}
        </Styled.CarretContainer>
      </Styled.DropdownToggle>
      {items ? (
        <Styled.DropdownMenu>
          {items.map(({ title, href, icon }, index) => (
            <Styled.DropdownItem key={index} href={href}>
              {icon}
              {title}
            </Styled.DropdownItem>
          ))}
          {footer ? <Styled.Footer>{footer}</Styled.Footer> : null}
        </Styled.DropdownMenu>
      ) : null}
    </Styled.Dropdown>
  )
};
interface DropdownItem {
  title: string | React.ReactNode,
  href: string,
  icon: React.ReactNode,
}
interface DropdownProps {
  text: string,
  svgSrc: string,
  items?: DropdownItem[],
  href?: string,
  footer?: React.ReactNode,
}
const dropdowns: DropdownProps[] = [
  {
    text: "Download Desktop",
    svgSrc: "../../images/desktop.svg",
    items: [
      {
        title: "Download Windows (64-bit)",
        href: "#windows",
        icon: <img
          src="../../images/windows-icon.svg"
          alt=""
          width="24px"
          height="24px"
          style={{ opacity: "0.3" }}
        />,
      },
      {
        title: "Download Mac (Intel)",
        href: "#mac",
        icon: <img
          src="../../images/mac-icon.svg"
          alt=""
          width="24px"
          height="24px"
          style={{ opacity: "0.3" }}
        />,
      },
      {
        title: "Download Mac (Apple Silicon)",
        href: "#max-m1",
        icon: <img
          src="../../images/m1-icon.svg"
          alt=""
          width="24px"
          height="24px"
          style={{ opacity: "0.3" }}
        />,
      },
      {
        title: "Download Linux (.deb)",
        href: "#linux-deb",
        icon: <img
          src="../../images/deb-icon.svg"
          alt=""
          width="24px"
          height="24px"
          style={{ opacity: "0.3" }}
        />,
      },
      {
        title: "Download Linux (.zip)",
        href: "#linux-zip",
        icon: <img
          src="../../images/linux-icon.svg"
          alt=""
          width="24px"
          height="24px"
          style={{ opacity: "0.3" }}
        />,
      }
    ],
    footer: (
      <span>By downloading Exodus, you agree to the <a target="_blank" rel="noreferrer noopener" href="/terms/">Terms of Use</a> and <a target="_blank" rel="noreferrer noopener" href="/privacy/">Privacy Policy</a></span>
    )
  },
  {
    text: "Download Mobile",
    svgSrc: "../../images/mobile.svg",
    items: [
      {
        title: <Styled.RatingContainer>
          <img
            src="../../images/star.svg"
            alt=""
            height="16px"
          />
          <Styled.StarRating>4.6</Styled.StarRating>
        </Styled.RatingContainer>,
        href: "#app-store",
        icon: <img
          src="../../images/app-store-icon.svg"
          alt=""
          height="24px"
        />,
      },
      {
        title: <Styled.RatingContainer>
          <img
            src="../../images/star.svg"
            alt=""
            height="16px"
          />
          <Styled.StarRating>4.5</Styled.StarRating>
        </Styled.RatingContainer>,
        href: "#google-play",
        icon: <img
          src="../../images/google-play-icon.svg"
          alt=""
          height="24px"
        />,
      }
    ]
  },
  {
    text: "Download Extension",
    svgSrc: "../../images/puzzle.svg",
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
        <Styled.ButtonContainer className="break-sm">
          {dropdowns.map((dropdownData, index) => {
            return (
              <Fragment key={index}>
                {DropdownToggle(dropdownData)}
              </Fragment>
            )

          })}
        </Styled.ButtonContainer>
      </Styled.Container>
    </header>
  )
}

export default Header