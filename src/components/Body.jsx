import React from 'react'
import Categories from './Categories'
import ChefIntro from './ChefIntro'
import Favorites from './Favorites'
import FonditasMenu from './FonditasMenu'
import Location from './Location'

const Body = () => {
  return (
    <>
      <Categories />
      <Favorites />
      <Location />
      <FonditasMenu />
      <ChefIntro />
    </>
  )
}

export default Body;