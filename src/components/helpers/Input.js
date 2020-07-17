import React from "react";
import styled from "styled-components";

const Input = styled.input`
 background: #E5E5E5;
 width: 425px;
 height: 45px;
 padding: 10px;
 border-radius: 5px;
`;

export default function InputField(props) {
  return <Input type = "text" />;
}