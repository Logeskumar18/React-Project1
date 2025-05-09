import React from 'react'
import { IVComp } from './IVcom'
import Hinfo  from './Hinfo'
import Smain from "./Smain";
import { Cards } from './Cards';

export const Home = () => {
  return (
    <>
      <Hinfo />
      <IVComp/>
      <Smain />
      <Cards />
    </>
  )
}
