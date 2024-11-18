import { Row } from 'react-bootstrap';
import * as Styled from './styles';
import { renderGatsbyImage } from '../../../utils';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export type SummaryPanelItemProps = Queries.SummaryPanelQuery["allContentfulSummaryPanel"]["nodes"][number];

interface Props {
  readonly data: SummaryPanelItemProps,
  readonly index: number,
}

const SummaryPanelItem = ({ data, index }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { svgContent, title, text } = data;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
      transition={{
        opacity: { duration: 0.25, ease: "easeInOut", delay: 0.15 * index },
        y: { duration: 0.18, ease: "easeInOut", delay: 0.15 * index },
      }}
      style={{
        width: "100%", display: "flex", justifyContent: "center"
      }}
    >
      <section>
        <Styled.RootContainer>
          <Row>
            <Styled.Column>
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 2 }}
                transition={{ duration: 0.2, ease: "easeInOut", delay: 0.15 * index }}
              >
                <Styled.SvgContainer>
                  {renderGatsbyImage({ image: data.previewImage, rawSVG: svgContent?.svgContent, alt: "Summary" })}
                </Styled.SvgContainer>
              </motion.div >
            </Styled.Column>
          </Row>
          <Row>
            <Styled.Column>
              <Styled.SummaryTitle>
                {title}
              </Styled.SummaryTitle>
              <Styled.MainText>
                {text?.text}
              </Styled.MainText>
            </Styled.Column>
          </Row>
        </Styled.RootContainer>
      </section>
    </motion.div >
  );
};

export default SummaryPanelItem;
