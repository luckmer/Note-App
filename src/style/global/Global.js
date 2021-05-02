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
  font-weight: 700;
  color: #999;
  cursor: pointer;
  margin-right: 16px;
  padding: 10px 0;
  line-height:1em;
  font-family: 'Monaco', monospace;
  display: inline-block;
}

.activeButton {
  color:#0380a1;
}

.DraftEditor-root{
  height:20vh;
  margin: 20px;
  padding: 5px;
  word-break: break-all; 
  font-family: 'Monaco',monospace;
}

.public-DraftStyleDefault-ul , .public-DraftStyleDefault-ol , blockquote{
  background-color:#fc929e;
  color:#fff;
  padding: 20px 20px 20px 25px;
  border-radius:5px;
  line-height:2em;
  font-size:18px;
  font-family: 'Monaco', monospace;
}

.public-DraftStyleDefault-ol{
  padding-left:32px;
  background-color:#c5a5c5;
  color:#fff;
}


blockquote{
  padding-left:32px;
  background-color:#79b6f2;
  color:#fff;
}


`;

export default Global;
