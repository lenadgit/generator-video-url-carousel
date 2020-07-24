import React, { useState, useEffect } from "react";
import styled from "styled-components";
import '../../App.css';
import InputField from '../../components/helpers/Input';
import Btn from '../../components/helpers/Button';
import ReadyUrls from './ReadyUrlsComponent';

//import { ModalProvider } from "../../../../context/ModalContext";

const ButtonsWrapper = styled.div`
  width: 424px;
  margin-top: 23px;
`;
const Form = styled.form``;

export default function InputComponent(props) {
  const [NewLink, setNewLink] = useState(null);

  const addNewLink = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }
  
    return (
    <div>
        <h1>Put your URL</h1>
        <Form onChange={addNewLink}>
        <InputField onChange={(e) => setNewLink(e.target.value)}/>
        <ButtonsWrapper>
          <Btn text="Add +" background="#636663" type = "submit"  onClick={addNewLink}></Btn>
          <Btn text = "Generate" background="#48ED39" width = "180px"></Btn>
        </ButtonsWrapper>
        </Form>
    </div>
  );
}
