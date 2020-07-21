import React, { useState, useEffect } from "react";
import styled from "styled-components";
import '../../App.css';
import InputField from '../../components/helpers/Input';
import Btn from '../../components/helpers/Button';

//import { ModalProvider } from "../../../../context/ModalContext";

const ButtonsWrapper = styled.div`
  width: 424px;
  margin-top: 23px;
`;

const GrayButton = styled(Btn)`
  background: #636663;
`;
const GreenButton = styled(Btn)`
  background: #48ED39;
  width: 180px;
`;

export default function InputComponent(props) {
  const [] = useState(null);
  
    return (
    <div>
        <h1>Put your URL</h1>
        <InputField />
        <ButtonsWrapper>
        <GrayButton text="Add +"></GrayButton>
          <GreenButton text = "Generate"></GreenButton>
        </ButtonsWrapper>
    </div>
  );
}
