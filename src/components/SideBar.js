import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  background-color: #f2f1f7;
  min-width: 300px;
  border-right: 1px solid #d9d8dd;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  margin: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding: 15.4px;
`;

const Span = styled.span`
  line-height: 1;
  font-size: 20px;
  color: #333;
  font-family: monospace;
  font-weight: bold;
  margin: 0 0.8rem;
  padding: 0.2rem 0.8rem;
  cursor: pointer;
`;

const Data = styled.section`
  width: 100%;
  height: 100%;
`;

const Div = styled.div``;

function SideBar() {
  return (
    <Section>
      <Header>
        <Span>Search</Span>
      </Header>
      <Data>
        <Div>
          <p>text</p>
          <p>text</p>
          <p>text</p>
          <p>text</p>
        </Div>
      </Data>
    </Section>
  );
}

export default SideBar;
