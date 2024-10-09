import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {isLoading: true, matchData: []}

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({matchData: formattedData, isLoading: false})
  }

  render() {
    const {matchData, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="text">IPL Dashboard</h1>
        </div>
        <ul className="matchCard">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            matchData.map(each => (
              <TeamCard teamCardDetails={each} key={each.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default Home
