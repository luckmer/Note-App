import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  background-color: #f2f1f7;
  border-right: 1px solid #d9d8dd;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 772px) {
    min-width: 300px;
  }

  @media screen and (max-width: 772px) {
    position: absolute;
    width: 100%;
    transform: translateX(${({ open }) => (open === true ? "0%" : "-100%")});
    transition: transform 1s;
  }
`;

export const Header = styled.header`
  word-break: break-all;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  text-align: center;
  margin: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding: 15.4px;
`;

export const Span = styled.span`
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  line-height: 1;
  font-size: 20px;
  color: #333;
  font-family: monospace;
  font-weight: bold;
  margin: 0 0.8rem;
  padding: 0.2rem 0.8rem;
`;

export const Mobile = styled.span`
  user-select: none;
  cursor: pointer;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  opacity: ${({ open }) => (open ? "1" : "0")};
  line-height: 1;
  font-size: 20px;
  color: #333;
  font-family: monospace;
  font-weight: bold;
  margin: 0 0.8rem;
  padding: 0.2rem 0.8rem;
`;

export const Data = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 10vh;
`;

export const Div = styled.div``;

export const Main = styled.main`
  width: 100%;
  border-bottom: 1px solid #d9d8dd;
  height: auto;
`;

export const HeaderDiv = styled.div`
  text-align: center;
  padding: 10px;
  margin: 15px;
  border-radius: 5px;
  background-color: #1b2028;
  user-select: none;
  -webkit-user-select: none
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none;
`;
export const HeaderBar = styled.header`
  font-weight: 700;
  color: #999;
  margin-right: 16px;
  padding: 10px 0;
  line-height: 1em;
  font-family: "Monaco", monospace;
  display: inline-block;
`;

export const SectionBar = styled.section`
  text-align: center;
`;

export const DataBar = styled.div`
  text-align: center;
  padding: 10px;
  margin: 15px;
  border-radius: 5px;
  border: 1px solid #1b2028;
`;

export const P = styled.p`
  font-weight: 700;
  color: #1b2028;
  cursor: pointer;
  line-height: 1em;
  font-family: "Monaco", monospace;
`;
