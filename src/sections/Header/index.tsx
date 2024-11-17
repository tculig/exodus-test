import { Fragment } from 'react';
import * as Styled from './styles';
import { Dropdown } from 'tiho-component-library';
import { ReactComponent as BitcoinImage } from '../../images/bitcoin.svg';
import { useDropdownItems } from '../../hooks/use-dropdown-items';
import { useTranslation } from 'react-i18next';


interface HeaderProps {
  readonly variant?: "full" | "short";
}
const Header = ({ variant = "full" }: HeaderProps) => {
  const dropdowns = useDropdownItems();
  const { t } = useTranslation();

  return (
    <header>
      <Styled.Container $variant={variant}>
        {variant === "full" ? (
          <>
            <Styled.ImageContainer>
              <BitcoinImage style={{ width: "100%", height: "100%" }} />
            </Styled.ImageContainer>
            <Styled.Header1>
              {t("HeaderTitle")}
            </Styled.Header1>
            <Styled.Header2 >
              {t("HeaderSubtitle")}
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
        {dropdowns ? (
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
        ) : null}
      </Styled.Container>
    </header>
  )
}

export default Header