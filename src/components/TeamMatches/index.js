import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchData: [],
    latestMatchDetails: [],
    recentMatchDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchData()
  }

  getTeamMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const formattedLatestData = {
      umpires: formattedData.latestMatchDetails.umpires,
      date: formattedData.latestMatchDetails.date,
      venue: formattedData.latestMatchDetails.venue,
      id: formattedData.latestMatchDetails.id,
      result: formattedData.latestMatchDetails.result,
      competingTeam: formattedData.latestMatchDetails.competing_team,
      competingTeamLogo: formattedData.latestMatchDetails.competing_team_logo,
      manOfTheMatch: formattedData.latestMatchDetails.man_of_the_match,
      firstInnings: formattedData.latestMatchDetails.first_innings,
      secondInnings: formattedData.latestMatchDetails.second_innings,
      matchStatus: formattedData.latestMatchDetails.match_status,
    }

    const formattedRecentData = formattedData.recentMatches.map(each => ({
      umpires: each.umpires,
      date: each.date,
      venue: each.venue,
      id: each.id,
      result: each.result,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      manOfTheMatch: each.man_of_the_match,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    console.log(formattedRecentData)

    this.setState({
      teamMatchData: formattedData,
      isLoading: false,
      latestMatchDetails: formattedLatestData,
      recentMatchDetails: formattedRecentData,
    })
  }

  renderTeamMatch() {
    const {teamMatchData, latestMatchDetails, recentMatchDetails} = this.state
    const {teamBannerUrl} = teamMatchData
    return (
      <div>
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-image"
        />
        <h1 className="latest-heading">Latest Matches</h1>
        <ul>
          <LatestMatch
            latestMatchDetails={latestMatchDetails}
            key={latestMatchDetails.id}
          />
        </ul>
        <ul className="recent-card">
          {recentMatchDetails.map(each => (
            <MatchCard recentMatchDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatch()
        )}
      </div>
    )
  }
}
export default TeamMatches
