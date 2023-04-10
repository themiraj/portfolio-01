import styled from "styled-components";

export const LayoutStyled = styled('div')`
    display: flex;
    .sidebar{
        min-width: 420px;
        min-height: 100vh;
        background-color: rgba(var(--callout-rgb), 0.5);
        border: 1px solid rgba(var(--callout-border-rgb), 0.3);
    }
    .main{
        width: 100%;
        padding: 0 15px;
    }
`