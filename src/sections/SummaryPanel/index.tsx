import { Row } from 'react-bootstrap';
import SummaryPanelItem, { type SummaryPanelItemProps } from './SummaryPanelItem';
import * as Styled from './styles';
import { useMediaQuery } from "react-responsive";
import { useMemo } from 'react';
interface Props {
  readonly nodes: readonly SummaryPanelItemProps[]
}

const SummaryPage = ({ nodes }: Props) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 992px)" });
  const mdValue = useMemo(() => {
    if (isSmallScreen) return 12;
    if (isMediumScreen) return 6;
    return 4;
  }, [isSmallScreen, isMediumScreen])

  return (
    <Styled.Section>
      <Row className='gx-5'>
        {nodes.map((node, index) => {
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
