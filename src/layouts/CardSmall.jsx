import CardType from './CardType'

export default function CardSmall ({ data }) {
  const { id, name, types } = data
  const sprite = data.sprites.front_default

  return (
    <section>
      <img src={sprite} alt='' />
      <h1>{id}</h1>
      <h1>{name}</h1>
      <CardType types={types} />
    </section>
  )
}
