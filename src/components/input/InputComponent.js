import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "src/components/helpers/Input";
//import { ModalProvider } from "../../../../context/ModalContext";

export default function InputComponent(props) {
  const [] = useState(null);
  
    return (
    <div>
        <h1>Put your URL</h1>
        <Input />
    </div>
  );
}
