import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    venue,
    date,
    umpires,
    result,
    manOfTheMatch,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <li className="latest-container">
      <div className="container">
        <div>
          <p className="heading">{competingTeam}</p>
          <p className="para">{date}</p>
          <p className="para">{venue}</p>
          <p className="para">{result}</p>
        </div>
        <div>
          <img
            className="image"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>
      <hr className="line" />
      <div>
        <p className="para">First Innings</p>
        <p className="para">{firstInnings}</p>
        <p className="para">Second Innings</p>
        <p className="para">{secondInnings}</p>
        <p className="para">Man Of The Match </p>
        <p className="para">{manOfTheMatch}</p>
        <p className="para">Umpire </p>
        <p className="para">{umpires}</p>
      </div>
    </li>
  )
}
export default LatestMatch
