import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import getGlobalState from "../../globalState/getGlobalState";
import setGlobalState from "../../globalState/setGlobalState";

const increaseFontSize = () => {
  const currentSize = getGlobalState("cardHeight");
  const newSize = currentSize + 2;
  setGlobalState("cardHeight", newSize);
};
const decreaseFontSize = () => {
  const currentSize = getGlobalState("cardHeight");
  const newSize = currentSize - 2;
  setGlobalState("cardHeight", newSize);
};

const FooterFontSizer = () => {
  return (
    <Container>
      <SpanDiv>Card Height</SpanDiv>
      <SizeButton onClick={decreaseFontSize}>-</SizeButton>
      <SizeButton onClick={increaseFontSize}>+</SizeButton>
    </Container>
  );
};

export default view(FooterFontSizer);

const SizeButton = styled.button`
  background: #337ab7;
  border-color: #2e6da4;
  color: white;
  font-size: 0.8em;
  font-weight: bold;
  margin: 0 3px 0 3px;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 15px;
`;

const SpanDiv = styled.div`
  font-size: 16px;
`;