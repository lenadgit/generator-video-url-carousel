import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ReadyUrlsWrapper = styled.div`
 margin-top: 95px;
 padding: 0 28px;
 width: 100%;
`;
const UrlWrapper = styled.div`
 /*display: none;*/
 display: flex;
 justify-content: space-between;
 margin-bottom: 20px;
`;
const ButtonNumber = styled.div`
 background: #262626;
 border-radius: 5px;
 width: 24px;
 height: 24px;
 color: #ffffff;
 text-align: center;
`;
const UrlBlock = styled.div`
 display: inline;
 padding: 0 28px;
`;
const ButtonDel = styled.div`
 background: #F22727;
 border-radius: 5px;
 width: 24px;
 height: 24px;
 color: #ffffff;
 text-align: center;
`;

export default function ReadyUrls(props) {
    const [items, setItems] = useState([]);
    const listItems = items.map((item) => <li key={item.id}>{item.value}</li>)
    const addItem = () => {
        console.log('item added');

        setItems([
            ...items,
            {
                id: items.length,
                value: 'New Item'+items.length
            }
        ])

        return items
    }
  
    return (
    <div>        
        <ReadyUrlsWrapper>
            <UrlWrapper>
                <ButtonNumber>1</ButtonNumber>
                <UrlBlock>
                <ul>
                    {listItems}
                </ul>
                </UrlBlock>
                <ButtonDel>X</ButtonDel>
            </UrlWrapper>
        </ReadyUrlsWrapper>
        <button onClick={addItem}>Add Item</button>
    </div>
  );
}
