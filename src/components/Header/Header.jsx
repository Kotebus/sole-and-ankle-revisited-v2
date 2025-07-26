import React from 'react';
import styled from 'styled-components';

import {COLORS, QUERIES, WEIGHTS} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from "../Icon/index.js";
import UnstyledButton from "../UnstyledButton/UnstyledButton.js";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    // For our mobile hamburger menu, we'll want to use a button
    // with an onClick handler, something like this:
    //
    // <button onClick={() => setShowMobileMenu(true)}>

    return (
        <header>
            <SuperHeader/>
            <MainHeader>
                <Side>
                    <Logo/>
                </Side>
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <Side/>
                <MobileButtons>
                    <UnstyledButton>
                        <Icon id="shopping-bag" strokeWidth={2}/>
                    </UnstyledButton>
                    <UnstyledButton>
                        <Icon id="search" strokeWidth={2}/>
                    </UnstyledButton>
                    <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <Icon id="menu" strokeWidth={2}/>
                    </UnstyledButton>
                </MobileButtons>
            </MainHeader>

            <MobileMenu
                isOpen={showMobileMenu}
                onDismiss={() => setShowMobileMenu(false)}
            />
        </header>
    );
};

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    height: 72px;
    border-bottom: 1px solid ${COLORS.gray[300]};
    justify-content: space-between;

    @media (${QUERIES.tabletAndSmaller}) {
        border-top: 4px solid ${COLORS.gray[900]};
    }
`;

const Nav = styled.nav`
    display: flex;
    gap: 48px;
    margin: 0 48px;

    @media (${QUERIES.tabletAndSmaller}) { 
        display: none;
    }
`;

const MobileButtons = styled.div`
    display: none;

    @media (${QUERIES.tabletAndSmaller}) {
        display: flex;
        gap: 32px;
    }
    
    @media (${QUERIES.mobile}) {
        gap: 16px;
    }

`;

const Side = styled.div`
    flex: 1;
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: ${COLORS.secondary};
    }
`;

export default Header;
