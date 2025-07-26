import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import {QUERIES} from "../../constants.js";

const App = () => {
    const [sortId, setSortId] = React.useState('newest');

    return (
        <>
            <Header/>
            <Main>
                <ShoeIndex sortId={sortId} setSortId={setSortId}/>
            </Main>
        </>
    );
};

const Main = styled.main`
    padding: 64px 32px;

    @media (${QUERIES.tabletAndSmaller}) {
        padding-top: 48px;
        padding-bottom: 48px;
    }

    @media (${QUERIES.mobile}) {
        padding-left: 16px;
        padding-right: 16px;
    }
`;

export default App;
