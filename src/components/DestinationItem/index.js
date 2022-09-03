import './index.css'

const DestinationItem = props => {
  const {DestinationDetails} = props
  const {imgUrl, name} = DestinationDetails
  return (
    <li className="Destination-item">
      <img src={imgUrl} alt={name} className="Destination-image" />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
