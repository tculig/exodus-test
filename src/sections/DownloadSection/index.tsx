import { Fragment, useEffect, useState } from 'react';
import * as Styled from './styles';
import { Dropdown } from 'tiho-component-library';
import { ReactComponent as BitcoinImage } from '../../images/bitcoin.svg';
import { useDropdownItems } from '../../hooks/use-dropdown-items';
import { useTranslation } from 'react-i18next';


interface DownloadSectionProps {
  readonly variant?: "full" | "short";
}
const DownloadSection = ({ variant = "full" }: DownloadSectionProps) => {
  const dropdowns = useDropdownItems();
  const { t } = useTranslation();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <Styled.Container $variant={variant} $hydrated={hydrated}>
      {variant === "full" ? (
        <>
          <Styled.ImageContainer>
            <BitcoinImage style={{ width: "100%", height: "100%" }} />
          </Styled.ImageContainer>
          <Styled.DownloadSection1>
            {t("DownloadSectionTitle")}
          </Styled.DownloadSection1>
          <Styled.DownloadSection2 >
            {t("DownloadSectionSubtitle")}
          </Styled.DownloadSection2>
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

  )
}

export default DownloadSection