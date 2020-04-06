import React from "react";

import logo from "lib/image/logo.png";
import styled from 'styled-components';

const Header = styled.header `
    width:100%;
    height:80px;
    z-index: 1;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
`;

const Nav = styled.nav `
    width:600px;
    height:100%;
    margin-right: 20px;

    @media screen and (max-width: 630px){
        display: none;
    }
`;

const Logo = styled.h1 `
    margin-left:20px;
`;

const LogoImg = styled.img `
    height: 30px;
`;

const Ul = styled.ul `
    width:100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

const List = styled.li `
    height: 100%;
    display: flex;
    align-items: center;
    font-size:20px;
`;

const NavBut = styled.a `
    text-decoration: none;
    outline: none;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 26px;
`;

export default function Navigation() {
    return (
        <Header>
            <Logo>
                <NavBut href="#ssr">
                    <LogoImg src={logo} alt={logo}/>
                </NavBut>
            </Logo>
            <Nav>
                <Ul id="myMenu">
                    <List data-menuanchor="about">
                        <NavBut href="#about">ABOUT</NavBut>
                    </List>
                    <List data-menuanchor="product">
                        <NavBut href="#product">PRODUCT</NavBut>
                    </List>
                    <List data-menuanchor="benefit">
                        <NavBut href="#benefit">BENEFIT</NavBut>
                    </List>
                    <List data-menuanchor="contact">
                        <NavBut href="#contact">CONTACT</NavBut>
                    </List>
                </Ul>
            </Nav>
        </Header>
    );
}
