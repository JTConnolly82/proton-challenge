import React from 'react';
import './App.css';


const Park = (props) => {

  const acreage = () => {
    let acres = props.Area.split('acres')[0].trim();
    acres = acres.split('.')[0];
    return acres;
  }


  return (
    <div className='park-container' >
      <div className='park-header'>
        <img className='park-image' src={props.Image}/>
      </div>
      <div className='park-content'>
        <div className='park-name-est'>
          <h2>{props.Name}</h2>
          <h4>Est. {props.Established}</h4>
        </div>
        <div className='park-acres-visitors'>
          <h4>Acres: {acreage()}</h4>
          <h4>Annual Visitors: {props["Recreation visitors"]}</h4>
        </div>
        <h4>{props.Description}</h4>
      </div>
    </div>
  )
}


export default Park;