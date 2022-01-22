import React from 'react';
import styled from 'styled-components';

const StyledBigText = styled.h2`
  position: relative;
  font-size: 4em;
  color: white;
  text-shadow: 0px 0px 10px grey;
  margin-bottom: 10px;
  &.degree::after {
    position: absolute;
    font-size: 0.6em;
    content: "°";
  }`

const StyledSmallText = styled.span`
font-size: ${props => props.size};
font-weight: bold;
color: white;
margin: 3px 0;
text-shadow: 0px 0px 10px grey;
`

export default function Text(props) {
  return <>
{props.Big ? (<StyledBigText {...props}>{props.children}</StyledBigText>) 
: <StyledSmallText {...props}>{props.children}</StyledSmallText>}
  </>;
}
