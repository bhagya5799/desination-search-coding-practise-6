import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem/index'

export default class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="destinationSearch">
          <h1 className="heading">DESTINATION SEARCH</h1>
          <div className="inputField">
            <input
              type="search"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              value={searchInput}
            />
          </div>
        </div>
        <ul className="items-card">
          {searchResults.map(eachItem => (
            <DestinationItem DestinationDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
