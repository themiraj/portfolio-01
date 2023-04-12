import React from 'react'
import styled from 'styled-components';

const Overlay = (props: any) => {
    const { close } = props;
    return (
        <Wrapper onClick={() => close()}> </Wrapper>
    )
}

export default Overlay;
const Wrapper = styled('div')`
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background : #000;
    opacity: 0.5;
`