import React, { useContext } from "react";
import styled from "styled-components";
import { weatherContext } from "../App";
import Card from "../Components/Card";

const Wrapper = styled.div`
  position: absolute;
  height: 70%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function StartPage() {
const {weatherData} = useContext(weatherContext)

  return (<>
    <Wrapper>
      {weatherData && (
        <>
          <Card></Card>
        </>
      )}
    </Wrapper>
    </>
  );
}
