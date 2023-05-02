import './index.css'

const Planeitem = props => {
  const {planets} = props
  const {name, imageUrl, description} = planets
  return (
    <div className="main">
      <img className="img" src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
export default Planeitem
