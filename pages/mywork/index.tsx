import Layout from '@/Components/layout';
import React, { Fragment, useEffect, useRef, useState } from 'react';
// import style from './mywork.module.scss'
import apiFile from '@/cv.json'
import { MyworkStyled } from './mywork';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/Components/Shared/Global/SectionTitle';
import PopUp from '@/Components/Shared/Global/PopUp';
interface itemInterFace {
  id: number,
  Name: string,
  short_description: string
  logo: string
}
const Mywork = () => {
  const [posi, setposi] = useState<any>({
    positionx: 0,
    positiony: 0,
  });
  const [data, setData] = useState<any>({});
  const itemsRef: any = useRef([])
  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, apiFile.projects.length)
  }, [])
  return (
    <Fragment>
      <SectionTitle title="My Projects" />
      <MyworkStyled>
        {apiFile?.projects ?
          apiFile.projects.map((item: any, index: number) => (
            <div key={item.id} className='item-wraper'
              onClick={() => {
                if (itemsRef?.current?.[index]) {
                  const left = itemsRef?.current?.[index].offsetLeft;
                  const top = itemsRef?.current?.[index].offsetTop;
                  setposi({
                    positionx: left,
                    positiony: top,
                  })
                }
                setTimeout(() => {
                  setData(item)
                }, 500)
              }}
              ref={el => itemsRef.current[index] = el}
            >
              <Image unoptimized src={'https://www.webriderz.com/images/webriderz-logo-white-image.png'} width={200} height={200} alt='logo' />
              <h2>{item.Name}</h2>
              <div className='description-short'>{item.short_description}</div>
            </div>
          ))

          : <h1>sddsd</h1>}
      </MyworkStyled>
      <PopUp classes={`${Object.keys(data).length ? 'active' : ''}`} close={() => setData({})} pox={posi.positionx} poy={posi.positiony} data={data} />
    </Fragment>
  )
}

export default Mywork;