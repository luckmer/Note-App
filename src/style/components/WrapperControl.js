import styled from "styled-components";

export const Wrapper = styled.div`
  transition: all 1s cubic-bezier(0.075, 1, 0.165, 1);
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 8px;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
  width: 100px;
  height: 100px;
  border-radius: 50%;
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
  cursor: none;
`;

export const Div = styled.div`
  transition: all 0.3s;
  width: 100%;
  height: 100%;
  display: flex;
  transform: rotate(${({ menu }) => (menu ? "90deg " : "0deg")});
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Dot = styled.div`
  width: 5px;
  margin: 3px;
  height: 5px;
  background-color: #0380a1;
  border-radius: 50%;
`;

export const Hover = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border-radius: 50%;
  border: 1px solid transparent;
  &:hover {
    opacity: 20%;
    border: 3px solid #0380a1;
    border-radius: 50%;
    transition: 0.3s;
  }
`;
