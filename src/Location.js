import React from "react";
import Park from "./Park";

class Location extends React.Component {

  render() {
    let locationParks = this.props.parks.map((park) => {
      return <Park {...park} />;
    });
    console.log(this.props.parks);
    return (
      <div className='location-container'>
        <h2 className='location-title'>{this.props.location}</h2>
        <div className='location-parks-container'>
          {locationParks}
        </div>
      </div>
    );
  }
}

export default Location;
