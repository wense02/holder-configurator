import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import "@fontsource/ubuntu/400.css";

const MainNavContainer = styled.div`
 width: 100%;
 height: 40px;
 display: flex;
 padding: 0 2.5em;
 align-items: center;
 background-color: #292727;
 justify-content: space-between;
`;

const NavbarContainer = styled.nav`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-family: "Ubuntu";
  color: #000000;
  font-weight: 700;
  border-color: black;
  background-color: #fff;
  justify-content: space-between;
  padding: 0px 20px;
`;

const CenterContentContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  font-family: "Ubuntu";
  font-style: inherit;
  justify-self: right;
  line-height: 25.6px;
  text-align: left;
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  color: #333;
  padding: 2px 5px;
  border-radius: 2px;
  box-sizing: content-box;
  border: 1px solid;
  justify-self: left;
  margin-left: 5px;
  margin-right: 5px;
  font-family: "Ubuntu";
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  min-height: 24px;
  text-size-adjust: 100%;
`;

const MmText = styled.span`
  margin-left: 5px;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  text-align: left;
`;

const XText = styled.span`
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  text-align: left;
  vertical-align: baseline;
`;

const Box2Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  color: #333;
  padding: 2px 5px;
  border-radius: 2px;
  box-sizing: content-box;
  border: 1px solid;
  justify-self: left;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  min-height: 24px;
  text-size-adjust: 100%;
`;

const Mm2Text = styled.span`
  margin-left: 5px;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  text-align: left;
`;

const AccessibilityContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 1.4em;
`;

export function Navbar(props) {
 return (
  <><MainNavContainer></MainNavContainer>
  <NavbarContainer>
    Holder Configurator
    <CenterContentContainer>
      Dimensions:
      <BoxContainer>100</BoxContainer>
      <MmText>mm</MmText>
      <XText>x</XText>
      <Box2Container>100</Box2Container>
      <Mm2Text>mm</Mm2Text>
    </CenterContentContainer>
   <AccessibilityContainer>
    <Button>
      Add to Cart
    </Button>
   </AccessibilityContainer>
  </NavbarContainer></>
 ); 
}