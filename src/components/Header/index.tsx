import { useState } from 'react';
import * as Styled from './styles';

const DropdownToggle = ({ svgSrc, text, items, href }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Dropdown>
      <Styled.DropdownToggle onToggle={(isOpen) => setIsOpen(isOpen)}>
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
          {items.map(({ title, href, icon }) => <Styled.DropdownItem href={href}>{title}</Styled.DropdownItem>)}
        </Styled.DropdownMenu>
      ) : null}
    </Styled.Dropdown>
  )
};
interface DropdownItem {
  title: string,
  href: string,
  icon: string,
}
interface DropdownProps {
  text: string,
  svgSrc: string,
  items?: DropdownItem[],
  href?: string
}
const dropdowns: DropdownProps[] = [
  {
    text: "Download Desktop",
    svgSrc: "../../images/desktop.svg",
    items: [
      {
        title: "Windows",
        href: "#windows",
        icon: "",
      },
      {
        title: "Mac",
        href: "#mac",
        icon: "",
      },
      {
        title: "Linux",
        href: "#linux",
        icon: "",
      }
    ]
  },
  {
    text: "Download Mobile",
    svgSrc: "../../images/mobile.svg",
    items: [
      {
        title: "iOS",
        href: "#ios",
        icon: "",
      },
      {
        title: "Android",
        href: "#android",
        icon: "",
      }
    ]
  },
  {
    text: "Download Extension",
    svgSrc: "../../images/puzzle.svg",
    href: "",
  },
]
const Header = ({ data }) => {
  return (
    <header>
      <Styled.Container>
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
        <Styled.ButtonContainer className="break-sm">
          {dropdowns.map(dropdownData => {
            return DropdownToggle(dropdownData);
          })}
        </Styled.ButtonContainer>
      </Styled.Container>
    </header>
  )
}

export default Header