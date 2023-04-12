import React, { Fragment } from 'react'
import styled from 'styled-components';
import Overlay from './Overlay';

const PopUp = (props: any) => {
    const { data, classes, close, pox, poy } = props;
    return (
        <Fragment>
            {Object.keys(data).length > 0 ?
                <Overlay close={close} />
                : null
            }
            <Wrapper className={Object.keys(data).length ? 'active' : ''} pox={pox} poy={poy}>
                <h1 onClick={() => close()}>Close</h1>
                <h2> {data?.Name} </h2>
                <div className='text-tech'>
                    {data?.technologies && data?.technologies.length > 0 ?
                        data?.technologies.map((item: any) => (
                            <span>{item}</span>
                        ))
                        : null
                    }
                </div>
                <p>{data?.description}</p>
                <ul>
                    {data?.reposibility && data?.reposibility.length > 0 ?
                        data.reposibility.map((item: any, index: number) => (
                            <li key={index}>{item.desc}</li>
                        ))
                        : null
                    }

                </ul>
            </Wrapper>
        </Fragment>
    )
}

export default PopUp;

const Wrapper = styled('div')`
    height: 0;
    width: 0;
    position: fixed;
    left:${(props: any) => props.pox || props.pox}px;
    top:${(props: any) => props.poy || props.poy}px;
    transition: 0.3s ease-in-out;
    overflow:hidden;
    border-radius: 15px;
    padding: 15px;
    opacity:0;
    &.active{
        opacity:1;
        width: 800px;
        height: 800px;
        background: #FFF;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .text-tech{
        display: flex;
        flex-wrap:wrap;
        margin-bottom: 15px;
        margin-top: 15px;
        span{
            display: inline-block;
            padding: 5px 15px;
            background-color: #ccc;
            margin: 5px;
            text-transform: uppercase;
        }
    }
` 