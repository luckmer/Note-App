import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
  padding:0;
  box-sizing:border-box;
}

body{
  margin:0;
}

.styleButton {
  color: #999;
  cursor: pointer;
  margin-right: 16px;
  padding: 2px 0;
  display: inline-block;
}

.activeButton {
  color: #5890ff;
}

.DraftEditor-root{
  height:20vh;
  margin: 20px;
  padding: 5px;
}

`;

export default Global;
