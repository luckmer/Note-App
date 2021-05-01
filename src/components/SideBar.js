import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  background-color: #f2f1f7;
  min-width: 300px;
  border-right: 1px solid #d9d8dd;
`;

function SideBar() {
  return (
    <Section>
      <header>
        <span>Search</span>
        <div></div>
      </header>
      <section>
        <div></div>
      </section>
    </Section>
  );
}

export default SideBar;
