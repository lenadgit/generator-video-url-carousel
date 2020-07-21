import React from "react";
import styled from "styled-components";

const Input = styled.input`
 background: #E5E5E5;
 width: 100%;
 height: 0px;
 padding: 28px;
 border-radius: 5px;
 outline: none;
 border: none;
 font: 14px 'Roboto', sans-serif;
`;

export default function InputField(props) {
  return <Input type = "text"/>;
}