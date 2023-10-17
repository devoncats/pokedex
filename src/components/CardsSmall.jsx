import CardSmall from '../layouts/CardSmall'
import response from '../assets/mocks/mocks.json'

export function CardsSmall () {
  const hasPokemons = response.length > 0
  const pokemons = response

  return (
    <article className='grid grid-cols-3 gap-2'>
      {
        hasPokemons && pokemons.map((pokemon) => {
          return (
            <CardSmall
              key={pokemon.id}
              data={pokemon}
            />
          )
        })
      }
    </article>
  )
}
