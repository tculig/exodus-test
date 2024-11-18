import { Row } from 'react-bootstrap';
import SummaryPanelItem from './SummaryPanelItem';
import * as Styled from './styles';
import { useMediaQuery } from "react-responsive";
import { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const SummaryPage = () => {
  const data: Queries.SummaryPanelQuery = useStaticQuery(graphql`
   query SummaryPanel{
    allContentfulSummaryPanel(sort: {order: ASC}) {
        nodes {
          id
          title
          text {
            text
          }
          svgContent {
            svgContent
          }
          previewImage {
            publicUrl
            url
            gatsbyImageData(placeholder: BLURRED)
            file {
              contentType
            }
          }
        }
      }
  }
  `);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 992px)" });
  const mdValue = useMemo(() => {
    if (isSmallScreen) return 12;
    if (isMediumScreen) return 6;
    return 4;
  }, [isSmallScreen, isMediumScreen]);


  return (
    <Styled.Section>
      <Row className='gx-5'>
        {data.allContentfulSummaryPanel.nodes.map((node, index) => {
          return (
            <Styled.Column key={index} md={mdValue}>
              <SummaryPanelItem data={node} index={index} />
            </Styled.Column>
          );
        })}
      </Row>
    </Styled.Section>
  );
};

export default SummaryPage;
