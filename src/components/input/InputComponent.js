import React, { useState, useEffect } from "react";
import InputField from '../../components/helpers/Input';
//import { ModalProvider } from "../../../../context/ModalContext";

export default function InputComponent(props) {
  const [] = useState(null);
  
    return (
    <div>
        <h1>Put your URL</h1>
        <InputField />
    </div>
  );
}
