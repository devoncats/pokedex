export default function Header () {
  return (
    <header className='w-fit flex justify-center px-16 py-8 mt-10 rounded-xl shadow-sm bg-white'>
      <ul className='flex gap-14 text-[#777777]'>
        <li><a className='flex items-center gap-2' href='#'><span className='text-5xl icon-pikachu' /><p className='font-bold'>Home</p></a></li>
        <li><a className='flex items-center gap-2' href='#'><span className='text-5xl icon-pokeball' /><p className='font-bold'>Pokedex</p></a></li>
        <li><a className='flex items-center gap-2' href='#'><span className='text-5xl icon-dpad' /><p className='font-bold'>Videogames</p></a></li>
        <li><a className='flex items-center gap-2' href='#'><span className='text-5xl icon-cards' /><p className='font-bold'>GCC Pokemon</p></a></li>
        <li><a className='flex items-center gap-2' href='#'><span className='text-5xl icon-pokemontv' /><p className='font-bold'>TV Pokemon</p></a></li>
        <li><a className='flex items-center gap-2' href='#'><span className='text-5xl icon-event' /><p className='font-bold'>Play! Pokemon</p></a></li>
        <li><a className='flex items-center gap-2' href='#'><span className='text-5xl icon-news' /><p className='font-bold'>News</p></a></li>
      </ul>
    </header>
  )
}
