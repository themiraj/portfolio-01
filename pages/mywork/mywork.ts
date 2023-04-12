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
    position: relative;
    cursor: pointer;
    &:hover{
      color: white;
      background-color: #000;
    }
    img{
      width: 107px;
      height: 28px;
      position: absolute;
      right: 16px;
      object-fit: contain;
    }
    .description-short{
      margin-top: 10px;
      line-height: 1.5;
      font-size: 15px;
    }
  }
`