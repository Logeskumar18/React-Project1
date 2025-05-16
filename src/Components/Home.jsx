import React from 'react'
import { IVComp } from './IVcom'
import Hinfo  from './Hinfo'
import Smain from "./Smain";
import { Cards } from './Cards';
import AdvanceControl from './AdvanceControl';
import ImgComp from './ImgComp';
import Articles from './Articles';
import { Lmain } from './Lmain';
import { Join } from './Join';
import Footer from './Footer';

export const Home = () => {
  return (
    <>
      <Hinfo />
      <IVComp/>
      <Smain />
      <Cards />
      <AdvanceControl />
      <ImgComp />
      <Articles />
      <Lmain />
      <Join />
      <Footer />
    </>
  )
}
