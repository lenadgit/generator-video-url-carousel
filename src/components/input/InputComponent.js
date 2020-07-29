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

export default function InputComponent(props) {
  const [NewLink, setNewLink] = useState('');
  const inputValue = (e) => {
    setNewLink(e.target.value);
    console.log(e.target.value);
  
  };

  const handleClick = (e) => {
    {e} = props;
    console.log('setNewLink');
    setNewLink(e.target.value);
  };

 
    return (
    <div>
        <h1>Put your URL</h1>      
        <InputField value={NewLink} onChange= {inputValue}/>
        <ButtonsWrapper>
        <Btn text="Add +" background="#636663" type = "button"  onClick={props.handleClick}></Btn>
          <Btn text = "Generate" background="#48ED39" width = "180px"></Btn>
        </ButtonsWrapper>        
    </div>
  );
}
