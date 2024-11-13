import { StaticImage } from 'gatsby-plugin-image'
import * as Styled from './styles';

interface ToggleProps {
  svgSrc: string,
  text: string,
  carret?: boolean
}

const generateDropdownToggle = ({ svgSrc, text, carret = true }: ToggleProps) => {
  return (
    <Styled.DropdownToggle>
      <Styled.ToggleIconContainer>
        <img
          src={svgSrc}
          alt={text}
          loading="eager"
          width={24}
          height={24}

        />
      </Styled.ToggleIconContainer>
      <Styled.ToggleLabel>{text}</Styled.ToggleLabel>
      {carret && <StaticImage
        src="../../images/caret.svg"
        alt="Caret"
        loading="eager"
        style={{
          width: "11px",
          height: "7px",
        }}
      />}
    </Styled.DropdownToggle>
  )
};

const Header = ({ data }) => {
  return (
    <header>
      <Styled.Container>
        <img
          src={data.bitcoinSvg.url}
          alt="Bitcoin (BTC)"
          loading="eager"
          width={"80px"}
          height={"80px"}
        />
        <Styled.Header1 className="break-sm">
          Exodus Bitcoin Wallet
        </Styled.Header1>
        <Styled.Header2 className="x-break-sm">
          Send, Receive, and Swap With Exodus' Free and Secure BTC Wallet
        </Styled.Header2>
        <Styled.ButtonContainer className="break-sm">
          <Styled.Dropdown>
            {generateDropdownToggle({ svgSrc: data.desktopSvg.url, text: "Download Desktop" })}
            <Styled.DropdownMenu>
              <Styled.DropdownItem href="#windows">Windows</Styled.DropdownItem>
              <Styled.DropdownItem href="#mac">Mac</Styled.DropdownItem>
              <Styled.DropdownItem href="#linux">Linux</Styled.DropdownItem>
            </Styled.DropdownMenu>
          </Styled.Dropdown>

          <Styled.Dropdown>
            {generateDropdownToggle({ svgSrc: data.mobileSvg.url, text: "Download Mobile" })}
            <Styled.DropdownMenu>
              <Styled.DropdownItem href="#ios">iOS</Styled.DropdownItem>
              <Styled.DropdownItem href="#android">Android</Styled.DropdownItem>
            </Styled.DropdownMenu>
          </Styled.Dropdown>

          <Styled.Dropdown>
            {generateDropdownToggle({ svgSrc: data.puzzleSvg.url, text: "Download Extension", carret: false })}
          </Styled.Dropdown>
        </Styled.ButtonContainer>
      </Styled.Container>
    </header>
  )
}

export default Header