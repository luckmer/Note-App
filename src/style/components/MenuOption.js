import styled from "styled-components";

export const P = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border-radius: 50%;
  color: #0380a1;
  border: 2px solid transparent;
  width: 40px;
  height: 40px;
  &:hover {
    width: 40px;
    height: 40px;
    opacity: 20%;
    border: 1px solid #0380a1;
    border-radius: 50%;
    transition: 0.3s;
  }
`;

export const NavBar = styled.div`
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
  border-radius: 8px 8px 0px 0px;
  transform: scale(${({ Move }) => (Move ? "1" : "0")});
  opacity: ${({ Move }) => (Move ? "1" : "0")};
  transform-origin: ${({ RadiusA, RadiusB }) =>
    !RadiusB && RadiusA
      ? "top right"
      : !RadiusB && !RadiusA
      ? "top left"
      : RadiusB && !RadiusA
      ? "bottom left"
      : "bottom right"};
  right: 118px;
  bottom: 118px;
  transition: all 1s cubic-bezier(0.075, 1, 0.165, 1);
  width: 220px;
  height: 300px;
  position: fixed;
  bottom: 50%;
  right: 50%;
  display: flex;
  color: white;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgb(27, 32, 40);
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 8px;
`;

export const BtnDiv = styled.div`
  height: 100%;
  width: 100%;
`;

export const ButtonStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;

export const Btn = styled.button`
  width: 100%;
  height: 100%;
  padding: 15px;
  border: 0;
  margin: 2px 10px 2px 10px;
  background-color: #1b2028;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  opacity: 1;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    opacity: 0.2;
    background-color: #0380a1;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ RadiusA, RadiusB }) =>
    (RadiusB === true && RadiusA === false) ||
    (RadiusB === true && RadiusA === true)
      ? "column-reverse"
      : "column"};
  align-items: center;
  border-radius: 8px 8px 0px 0px;
`;

export const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  border-radius: 8px 8px 0px 0px;
  border-top: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #191e25;
`;
