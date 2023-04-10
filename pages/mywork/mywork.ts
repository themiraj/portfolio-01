import styled from "styled-components";

export const MyworkStyled = styled('div')`
  display: flex;
  flex-wrap:wrap;
  gap: 10px;
  .item-wraper{
    width: calc(33.5% - 10px);
    padding: 15px;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    text-transform: uppercase;
    background-color: rgba(var(--callout-rgb), 0.5);
    border: 1px solid rgba(var(--callout-border-rgb), 0.3);
    border-radius: 5px;
    font-family: var(--font-mono);
  }
`