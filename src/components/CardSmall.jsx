import CardType from './CardType'

export default function CardSmall ({ data }) {
  const { id, name, types } = data
  const sprite = data.sprites.front_default

  return (
    <section className='w-[18rem] h-[13rem] flex flex-col items-center rounded-xl mb-12 shadow-sm bg-white'>
      <img className='w-24 h-24 relative bottom-12' src={sprite} alt='' />
      <div className='relative bottom-8 flex flex-col items-center gap-2'>
        <h2 className='text-sm font-bold text-[#777777]'>N°{id}</h2>
        <h1 className='text-xl font-bold'>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        <div className='flex gap-2'>
          <CardType types={types} />
        </div>
      </div>
    </section>
  )
}
