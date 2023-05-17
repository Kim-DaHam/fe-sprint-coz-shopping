import React from 'react'
import styled from "styled-components"

const HeaderContainer = styled.div`
        width: 100vw;
        height: 50px;
        padding: 0 60px;
        position: fixed;
        justify-content: space-between;
        align-items: center;
        border: 1px red solid;
        display: flex;
    `;

const LogoImageWrapper = styled.div`
    float: left;
    display: flex;
    gap: 10px;
    &:hover {
        cursor: pointer;
    }
`;

const LogoImg = styled.img`
    height: 25px;
`;

const LogoTitle = styled.div`
    font-weight: 600;
    font-size: 1.2rem;
`;

const MenuIcon = styled.img`
    height: 18px;
    &:hover {
        cursor: pointer;
    }
`;

function Header(){

    return (
        <HeaderContainer>
            <LogoImageWrapper>
                <LogoImg src="./images/logo/로고.png"/>
                <LogoTitle>COZ Shopping</LogoTitle>
            </LogoImageWrapper>
            <MenuIcon src="./images/icons/hamburger.png"></MenuIcon>
        </HeaderContainer>
    )
}

export default Header