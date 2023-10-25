import Filters from '../components/Filters'
import SearchBar from '../components/SearchBar'
import { CardsSmall } from '../layouts/CardsSmall'
import Background from './../components/Background'
import Header from './../layouts/Header'

export default function Pokedex () {
  return (
    <>
      <div className='grid place-items-center'>
        <Header />
      </div>

      <div className='w-[83rem] pl-[14.375rem] mt-12'>
        <SearchBar />
        <Filters />
        <CardsSmall />
      </div>
      <Background />
    </>
  )
}
