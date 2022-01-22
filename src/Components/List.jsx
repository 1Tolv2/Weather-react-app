import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(12, auto);
  grid-auto-flow: column;
  gap: 0 35px;
  padding-left: 45px;
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px 0;
    border-radius: 5px;
    background-color: white;
    opacity: 0.2;
    z-index: 0;
  }
`;

export default function List(props) {
  return <StyledList>{props.children}</StyledList>;
}
