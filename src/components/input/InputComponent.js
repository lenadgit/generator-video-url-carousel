import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InputField from '../../components/helpers/Input';
import Btn from '../../components/helpers/Button';

//import { ModalProvider } from "../../../../context/ModalContext";

const ButtonsWrapper = styled.div`
  width: 424px;
  margin-top: 23px;
`;

export default function InputComponent(props) {
  const [] = useState(null);
  
    return (
    <div>
        <h1>Put your URL</h1>
        <InputField />
        <ButtonsWrapper>
        <Btn text="Add +"></Btn>
          <Btn text = "Generate"></Btn>
        </ButtonsWrapper>
    </div>
  );
}
