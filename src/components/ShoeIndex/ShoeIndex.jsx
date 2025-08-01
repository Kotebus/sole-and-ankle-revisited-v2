import React from 'react';
import styled from 'styled-components';

import {QUERIES, WEIGHTS} from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <SelectWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SelectWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <LeftColumnSpacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
  
  @media (${QUERIES.tabletAndSmaller}) {
    flex-direction: column-reverse;  
    gap: 0;
  }
`;

const LeftColumnSpacer = styled(Spacer)`
  @media (${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media (${QUERIES.tabletAndSmaller}) {
    flex-basis: 0;
    margin-bottom: -0.5rem;
  }
  
  @media (${QUERIES.mobile}) {
    margin-bottom: 0.25rem;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (${QUERIES.tabletAndSmaller}) {
    align-items: flex-end;
  }
  @media (${QUERIES.mobile}) {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const SelectWrapper = styled.div`
  @media (${QUERIES.mobile}) {
    display: none;
  }
`;

export default ShoeIndex;
