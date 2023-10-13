import React from 'react'

export default function Header () {
  return (
    <header className='flex w-fit justify-center px-16 py-8 rounded-xl bg-white'>
      <ul className='flex gap-12 text-gray-500'>
        <li><a className='flex items-center gap-2' href='#'><span className='text-4xl icon-pikachu' /><p className='font-semibold'>Home</p></a></li>
        <li><a className='flex items-center gap-2' href='#'><span className='text-4xl icon-pokeball' /><p className='font-semibold'>Pokedex</p></a></li>
        <li><a className='flex items-center gap-2' href='#'><span className='text-4xl icon-dpad' /><p className='font-semibold'>Videogames</p></a></li>
        <li><a className='flex items-center gap-2' href='#'><span className='text-4xl icon-cards' /><p className='font-semibold'>GCC Pokemon</p></a></li>
        <li><a className='flex items-center gap-2' href='#'><span className='text-4xl icon-pokemontv' /><p className='font-semibold'>TV Pokemon</p></a></li>
        <li><a className='flex items-center gap-2' href='#'><span className='text-4xl icon-event' /><p className='font-semibold'>Play! Pokemon</p></a></li>
        <li><a className='flex items-center gap-2' href='#'><span className='text-4xl icon-news' /><p className='font-semibold'>News</p></a></li>
      </ul>
    </header>
  )
}
