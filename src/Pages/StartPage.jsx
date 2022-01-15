import React, { useContext } from "react";
import styled from "styled-components";
// import SideCard from "../Components/SideCard";
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
// const Slider = styled.div`
//   width: 900px;
//   margin: auto;
//   height: 100%;
//   display: grid;
//   grid-template-columns: 300px;
//   justify-content: center;
//   perspective: 150px;
// `;

export default function StartPage() {
const {weatherData} = useContext(weatherContext)

//   console.log(weatherData);
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
