import React from 'react'
import styled from 'styled-components'

const Thumbnail = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
`;
export default function CardThumbnail(props) {
    return (
        <Thumbnail>
            {props.children}
        </Thumbnail>
    )
}
