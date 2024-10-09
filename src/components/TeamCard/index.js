import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {teamImageUrl, name, id} = teamCardDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="card">
        <img className="team-logo" src={teamImageUrl} alt={name} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
