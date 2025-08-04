import React from 'react';
import styled from 'styled-components';
import {Dialog, DialogOverlay} from '@radix-ui/react-dialog'

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import {COLORS} from "../../constants.js";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 32px;
    justify-content: center;
    
    background-color: white;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    z-index: 2;
`;

const CloseButton = styled(UnstyledButton)`
    position: absolute;
    top: 10px;
    right: 0;
    padding: 16px;
`;

const Nav = styled.nav`
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    gap: 22px;
    
    a {
        color: ${COLORS.gray[900]};
        text-decoration: none;
        font-size: 1.1rem;
    }
`;

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 14px;
    
    position: absolute;
    bottom: 32px;
    
    a {
        color: ${COLORS.gray[700]};
        text-decoration: none;
        font-size: 0.9rem;
    }
`

const Overlay = styled(DialogOverlay)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${COLORS.transparentGray}; /* Полупрозрачный серый фон */
    z-index: 1;
`;

const MobileMenu = ({ isOpen, onDismiss }) => {
    if (!isOpen) {
        document.body.style.overflowY = 'revert';
        return null;
    }

    document.body.style.overflowY = 'hidden';

    return (
        <Dialog open={isOpen} onClose={onDismiss}>
            <Overlay onClick={onDismiss}/>
            <Wrapper>
                <CloseButton onClick={onDismiss}>
                    <Icon id="close" strokeWidth={2} size={24} />
                    <VisuallyHidden>Dismiss menu</VisuallyHidden>
                </CloseButton>
                <Nav>
                    <a href="/sale">Sale</a>
                    <a href="/new">New&nbsp;Releases</a>
                    <a href="/men">Men</a>
                    <a href="/women">Women</a>
                    <a href="/kids">Kids</a>
                    <a href="/collections">Collections</a>
                </Nav>
                <Footer>
                    <a href="/terms">Terms and Conditions</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/contact">Contact Us</a>
                </Footer>
            </Wrapper>
        </Dialog>
    );
};

export default MobileMenu;
