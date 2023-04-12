import React from 'react'
import styled from 'styled-components';

const SectionTitle = (props: any) => {
    const { title } = props;
    return (
        <Wrapper>
            {title}
        </Wrapper>
    )
}
export default SectionTitle;

const Wrapper = styled('div')`
    background-color: #000;
    color: #fff;
    padding: 20px;
    font-size: 25px;
    border-radius: 20px 20px 0 0;
    margin-top: 80px;
` 