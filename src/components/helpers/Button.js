import React from "react";
import styled from "styled-components";
//import InputField from '../../components/input/InputComponent';

const Button = styled.button`
 background: ${props => props.background};
 width: ${props => props.width};
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
    const { text, background, width } = props;
    const handleClick = (e) => {
        //const {text} = props;
          console.log('setNewLink');
          setNewLink(e.target.value);
        };
return <Button background={background} width = {width} onClick={handleClick}>{text}</Button>;
}