import { Row, Col } from 'react-bootstrap';
import * as Styled from './styles';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { renderGatsbyImage } from '../../../utils';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export interface SummaryPanelItemProps {
  id: string,
  title: string,
  text: {
    text: string
  },
  previewImage: {
    publicUrl: string,
    url: string,
    gatsbyImageData?: IGatsbyImageData,
    file: {
      contentType: string,
    }
  },
  svgContent?: {
    svgContent: string
  }
}

interface Props {
  data: SummaryPanelItemProps,
  index: number,
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
            <Col style={{ display: "flex" }}>
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 2 }}
                transition={{ duration: 0.2, ease: "easeInOut", delay: 0.15 * index }}
              >
                <Styled.SvgContainer>
                  {renderGatsbyImage({ image: data.previewImage, rawSVG: svgContent?.svgContent, alt: "Summary" })}
                </Styled.SvgContainer>
              </motion.div >
            </Col>
          </Row>
          <Row>
            <Col>
              <Styled.SummaryTitle>
                {title}
              </Styled.SummaryTitle>
              <Styled.MainText>
                {text.text}
              </Styled.MainText>
            </Col>
          </Row>
        </Styled.RootContainer>
      </section>
    </motion.div >
  );
};

export default SummaryPanelItem;
