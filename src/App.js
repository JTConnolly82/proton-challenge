import React from "react";
import axios from 'axios';
import './App.css';
import Location from './Location';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      parks: {},
      locations: [],
      errMsg: '',
      filterState: ''
    }
  }
  
  
  componentDidMount() {
    axios.get('https://prm-interview.s3.amazonaws.com/parks.json')
      .then((res) => {
        let locations = [];
        res.data.forEach((park) => {
          locations.push(park.Location);
        })
        locations = [...new Set(locations)].sort();
        this.setState({
          parks: res.data,
          locations: locations
        })
      })
      .catch((err) => {
        this.setState({
          errMsg: err.message
        })
      })
  }

  handleChange = (e) => {
    this.setState({
      filterState: e.target.value.toUpperCase()
    })
  }

  handleSearch = (e) => {
    e.preventDefault();
    let queriedParks = this.state.parks.filter( park => {
      return park.Location.toUpperCase().includes(this.state.filterState)
    })
    let queriedStates = this.state.locations.filter( location => {
      return location.toUpperCase().includes(this.state.filterState)
    } )
    this.setState({
      parks: queriedParks,
      locations: queriedStates
    })
  }

  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      filterState: ''
    })
    document.getElementById('input').value = ''
    axios.get('https://prm-interview.s3.amazonaws.com/parks.json')
      .then((res) => {
        let locations = [];
        res.data.forEach((park) => {
          locations.push(park.Location);
        })
        locations = [...new Set(locations)].sort();
        this.setState({
          parks: res.data,
          locations: locations
        })
      })
      .catch((err) => {
        this.setState({
          errMsg: err.message
        })
      })
  }


  render() {

    let locations = this.state.locations.map((parkLocation) => {
      let filteredParks = this.state.parks.filter( park => {
        return park.Location === parkLocation
      })
      return <Location location={parkLocation} parks={filteredParks} />
    })

    return (
      <div>
        <div className='app-header'>
          <h1 id='title'>National Parks</h1>
          <form>
            <input onChange={this.handleChange} placeholder="search by state" id='input'/>
            <button onClick={this.handleSearch} id='search'>Search</button>
            <button onClick={this.handleReset} id='reset'>Reset</button>
          </form>
          {this.state.errMsg !== '' && <h3>{this.state.errMsg}</h3>}
        </div>
        <div>
          {locations}
        </div>
      </div>
    );
  }
}

export default App;
