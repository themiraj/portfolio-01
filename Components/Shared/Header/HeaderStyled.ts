import styled from 'styled-components';
export const HeaderStyled = styled('div')`
        display: flex;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
    padding: 15px 0;
    align-items: center;
    ul{
        display: flex;
        li{
            min-width: 100px;
            background-color: rgba(var(--callout-rgb), 0.5);
            border: 1px solid rgba(var(--callout-border-rgb), 0.3);
            border-radius: var(--border-radius);
            padding: 0.8rem 1rem;
            font-family: var(--font-mono);
            list-style: none;
            text-align: center;
            &:hover{
                background-color: rgba(var(--callout-border-rgb), 0.3);
            }
            &:not(:last-child){
                margin-right: 15px;
            }
        }
    }
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 50px;
        padding: 25px 10px;
        margin-left: 16px;
        transform: translateZ(0);
        border-radius: var(--border-radius);
        overflow: hidden;
        box-shadow: 0px 2px 8px -1px #0000001a;
        font-family: var(--font-mono);
        text-transform: uppercase;
        font-weight: 600;
        &::before{
            animation: 6s rotate linear infinite;
            width: 200%;
            height: 200%;
            background: var(--tile-border);  
        }
        &::after{
            inset: 0;
            padding: 1px;
            border-radius: var(--border-radius);
            background: linear-gradient( to bottom right, rgba(var(--tile-start-rgb), 1), rgba(var(--tile-end-rgb), 1) );
            background-clip: content-box;
        }
        &::after,
        &::before
        {
            content: '';
            position: absolute;
            z-index: -1;
        }
    }
`      