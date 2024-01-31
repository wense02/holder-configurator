import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
 border: none;
 outline: none;
 color: white;
 padding: 10px 16px;
 margin-right: auto;
 font-size: ${({ size }) => size ? size + "px" : "16px"};
 font-weight: 400;
 border-radius: 5px;
 word-wrap: break-word;
 background-color: #ff9900;
 cursor: pointer;
 transition: all 200ms ease-in-out;

 &:hover{
  background-color: #e3c186;
 }

&:focus {
 outline: none;
}
`;

export function Button(props) {
 const { size } = props;

 return <ButtonWrapper size={size}>{props.children}</ButtonWrapper>;
}