import { Row } from 'react-bootstrap';
import * as Styled from './styles';
import { renderGatsbyImage } from '../../utils';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  readonly withBg: boolean,
  readonly data: Queries.RootQuery["allContentfulHeroPanel"]["nodes"][number]
}

const HeroPanel = ({ data, withBg = false }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { title, text, heroImage, rawHtml } = data;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 160 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 160 }}
      transition={{
        opacity: { duration: 0.5, ease: "easeInOut" },
        y: { duration: 0.35, ease: "easeInOut" },
      }}
      style={{
        width: "100%", display: "flex", justifyContent: "center"
      }}
    >
      <Styled.Section>
        <Styled.RootContainer $withBg={withBg}>
          {rawHtml?.rawHtml ? (
            <div
              dangerouslySetInnerHTML={{
                __html: rawHtml.rawHtml
              }}
            />
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{
                  opacity: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
                }}
              >
                <Styled.ImageRow>
                  <Styled.CenteredCol>
                    {heroImage ? renderGatsbyImage({ image: heroImage, alt: "Exodus Bitcoin Mobile Wallet", style: { objectFit: "contain" } }) : null}
                  </Styled.CenteredCol>
                </Styled.ImageRow>
              </motion.div>

              <Row style={{ paddingTop: "62px" }}>
                <Styled.CenteredCol>
                  <Styled.Heading>
                    {title}
                  </Styled.Heading>
                  <Styled.Subheading>
                    {text?.text}
                  </Styled.Subheading>
                </Styled.CenteredCol>
              </Row>
            </>
          )}


        </Styled.RootContainer>
      </Styled.Section>
    </motion.div >
  );
};

export default HeroPanel;
