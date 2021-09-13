/* import styled from "styled-components"; */
/* from https://codesandbox.io/s/prism-react-renderer-example-u6vhk?file=/src/WithLineNumbers.js:698-701 */

import styled from 'styled-components'

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
  font-size: 1.3rem;

  & .token-line {
    line-height: 1.5em;
    height: 1.5em;
  }
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;