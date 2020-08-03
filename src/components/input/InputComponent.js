import React, { useState, useEffect } from "react";
import styled from "styled-components";
import '../../App.scss';
import InputField from '../../components/helpers/Input';
import Btn from '../../components/helpers/Button';
import ReadyUrls from './ReadyUrlsComponent';
//import { ModalProvider } from "../../../../context/ModalContext";
const ButtonsWrapper = styled.div`
  width: 424px;
  margin-top: 23px;
`;
export default function InputComponent(props) {
  const [newLink, setNewLink] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);

  function CreateLink({ addLink }) {
  const [value, setValue] = useState("");

  const handleClick = e => {
    e.preventDefault();
    if (!value) return;

    addLink(value);
    setValue("");
}
  
    return (
    <div>
        <h1>Put your URL</h1>      
        <InputField {e => setValue(e.target.value)}
        />
        <ButtonsWrapper>
        <Btn text="Add +" background="#636663" type = "button" onClick={handleClick}></Btn>
          <Btn text = "Generate" background="#48ED39" width = "180px"></Btn>
        </ButtonsWrapper>
        <div >
        {newLink.map((newLink, index) => (
        <Todo
          key={index}
          index={index}
          newLink={newLink}
        />
      ))}
        </div>        
    </div>
  );
}
}
