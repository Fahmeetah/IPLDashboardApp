import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} =
    recentMatchDetails

  return (
    <li className="recent-container">
      <img
        className="recent-image"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="desc">{competingTeam}</p>
      <p className="desc">{result}</p>
      <p className="red-desc">{matchStatus}</p>
    </li>
  )
}
export default MatchCard
