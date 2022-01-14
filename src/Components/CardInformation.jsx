import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
padding: 10px;
`
export default function CardInformation(props) {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}
