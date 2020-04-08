import React from "react";
import Park from "./Park";

class Location extends React.Component {

  render() {
    let locationParks = this.props.parks.map((park) => {
      return <Park {...park} />;
    });
    console.log(this.props.parks);
    return (
      <div style={{display: 'flex', flexDirection: 'column', marginTop: '15px'}}>
        <h2 style={{fontSize: '35px', marginLeft: '15px'}}>{this.props.location}</h2>
        <div className='location-parks-container'>
          {locationParks}
        </div>
      </div>
    );
  }
}

export default Location;
