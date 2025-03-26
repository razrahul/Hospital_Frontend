import React from 'react'
import Header from '../../components/home/header'
import HeaderMain from '../../components/home/headerMain.jsx'
import GallerySliding from '../../components/home/gallerySliding.jsx'
import SpecialitiesSlider from '../../components/home/SpecialitiesSlider.jsx'

function Home() {
  return (
    <>
    <Header/>
    <HeaderMain/>
    <GallerySliding/>
    <SpecialitiesSlider/>
    </>
  )
}

export default Home