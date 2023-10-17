export default function CardType ({ types }) {
  return (
    types.map((type) => <div key={type.type.name} className={type.type.name}>{type.type.name}</div>)
  )
}
