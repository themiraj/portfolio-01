import Layout from '@/Components/layout';
import React, { useEffect, useState } from 'react';
import style from './mywork.module.scss'
import apiFile from '@/cv.json'
import { MyworkStyled } from './mywork';
import Image from 'next/image';
interface itemInterFace {
  id: number,
  Name: string,
  short_description: string
  logo: string
}
const Mywork = () => {
  const [data, setData] = useState<Array<any>>([]);
  useEffect(() => {

  }, [])
  return (
    <MyworkStyled>
      {apiFile?.projects ?
        apiFile.projects.map((item: itemInterFace, index) => (
          <div key={item.id} className='item-wraper'>
            <h2>{item.Name}</h2>
            <Image src={item.logo} width={200} height={200} />
            <div>{item.short_description}</div>
          </div>
        ))
        : 'Not Found'}
    </MyworkStyled>
  )
}

export default Mywork;