import React from "react";
import styled from "styled-components";

const Button = styled.button`
 /*background: papayawhip;*/
 height: 0px;
 padding: 12px 20px 28px 20px;
 vertical-align: middle;
 border-radius: 5px;
 outline: none;
 border: none;
 font: 14px 'Roboto', sans-serif;
 margin-right: 14px;
 color: #ffffff;
`;

export default function Btn(props) {
    const { text } = props;
return <Button>{text}</Button>;
}