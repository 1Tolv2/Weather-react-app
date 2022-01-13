import React, {useContext} from 'react'
import { weatherContext } from '../App'
import styled from 'styled-components'

const StyledList = styled.ul`
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto auto auto auto auto auto auto auto auto auto auto;
grid-auto-flow: column;
padding-left: 45px;
`
const StyledListItem = styled.li`
position: relative;
color: grey;
list-style: none;
&::before {
    content: "${props => props.id}";
    position: absolute;
    left: -25px;
    color: grey;
}
&.forecast, &.forecast::before {
    color: white;
}`

export default function HourlyForecast() {
    const {weatherData} = useContext(weatherContext)
    const currentDate = new Date(weatherData.current.dt * 1000)
    console.log(weatherData.hourly[0].weather[0].main)
    const weatherText = weatherData.hourly[0].weather[0].main

    const hourList = []
    for (let i = 0; i < 24; i++){
        i >= currentDate.getHours() ? hourList.push(<StyledListItem key={i} id={i} className="forecast">{weatherText}
            </StyledListItem>) : hourList.push(<StyledListItem key={i} id={i}><br/>
        </StyledListItem>)
    }
    console.log(hourList)
    

    return (<StyledList>{hourList}
        </StyledList>
    )
}
